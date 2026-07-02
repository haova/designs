/* Analytics live board — simulated data, refreshes on a fixed tick. */

(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";
  var WINDOW_SIZE = 31; /* 30 minutes + current */
  var TICK_MS = 2000;
  var FEED_MAX_ROWS = 5;

  /* State */

  var requestsBase = 1180;
  var requestsSeries = [];
  var latency = 128;
  var errorRate = 0.4;
  var previous = { visitors: 0, requests: 0, latency: 0, errors: 0 };

  var pages = [
    { path: "/pricing", views: 4821 },
    { path: "/docs/getting-started", views: 3980 },
    { path: "/blog/removing-everything", views: 2764 },
    { path: "/changelog", views: 1902 },
    { path: "/about", views: 1245 }
  ];

  var services = [
    { name: "API", latency: 84, status: "success", label: "Operational" },
    { name: "Web", latency: 46, status: "success", label: "Operational" },
    { name: "Database", latency: 12, status: "success", label: "Operational" },
    { name: "Workers", latency: 310, status: "warning", label: "Degraded" }
  ];

  var eventPool = [
    { msg: "Deploy completed — web@7f3a2c1", status: "success", label: "OK" },
    { msg: "Nightly backup finished", status: "success", label: "OK" },
    { msg: "Cache purged for /docs/*", status: "neutral", label: "Info" },
    { msg: "Cron: weekly digest sent", status: "neutral", label: "Info" },
    { msg: "New API key issued", status: "neutral", label: "Info" },
    { msg: "Slow query on reports.views", status: "warning", label: "Warn" },
    { msg: "Worker queue depth above 500", status: "warning", label: "Warn" },
    { msg: "5xx spike on /api/search", status: "danger", label: "Error" }
  ];

  /* Helpers */

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function nextRequestsValue() {
    requestsBase = clamp(requestsBase + (Math.random() - 0.5) * 50, 900, 1500);
    return Math.round(requestsBase + (Math.random() - 0.5) * 60);
  }

  function formatInt(value) {
    return value.toLocaleString("en-US");
  }

  function svgEl(name, attrs) {
    var el = document.createElementNS(SVG_NS, name);
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
    return el;
  }

  function niceTicks(min, max, count) {
    var span = max - min || 1;
    var rawStep = span / count;
    var magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    var residual = rawStep / magnitude;
    var step = (residual >= 5 ? 10 : residual >= 2 ? 5 : residual >= 1 ? 2 : 1) * magnitude;
    var ticks = [];
    for (var v = Math.ceil(min / step) * step; v <= max; v += step) {
      ticks.push(Math.round(v));
    }
    return ticks;
  }

  /* Clock */

  var clockEl = document.querySelector(".board__clock");

  function updateClock() {
    var now = new Date();
    clockEl.textContent = now.toISOString().slice(11, 19) + " UTC";
  }

  /* Stats */

  function setDelta(el, delta, unit, goodWhenUp) {
    var sign = delta > 0 ? "+" : "";
    el.textContent = sign + delta + unit;
    el.classList.remove("stat__delta--up", "stat__delta--down");
    if (delta === 0) {
      return;
    }
    var isGood = goodWhenUp ? delta > 0 : delta < 0;
    el.classList.add(isGood ? "stat__delta--up" : "stat__delta--down");
  }

  function updateStats() {
    var requests = requestsSeries[requestsSeries.length - 1];
    var visitors = Math.round(requests * 0.7 + (Math.random() - 0.5) * 30);
    latency = clamp(latency + (Math.random() - 0.5) * 10, 80, 260);
    errorRate = clamp(errorRate + (Math.random() - 0.5) * 0.1, 0.05, 2.5);

    document.querySelector(".stat__value--visitors").textContent = formatInt(visitors);
    document.querySelector(".stat__value--requests").textContent = formatInt(requests);
    document.querySelector(".stat__value--latency").textContent = String(Math.round(latency));
    document.querySelector(".stat__value--errors").textContent = errorRate.toFixed(2) + "%";

    if (previous.requests > 0) {
      setDelta(document.querySelector(".stat__delta--visitors"), visitors - previous.visitors, "", true);
      setDelta(document.querySelector(".stat__delta--requests"), requests - previous.requests, "", true);
      setDelta(document.querySelector(".stat__delta--latency"), Math.round(latency) - previous.latency, "ms", false);
      setDelta(
        document.querySelector(".stat__delta--errors"),
        Number((errorRate - previous.errors).toFixed(2)),
        "pp",
        false
      );
    }

    previous = {
      visitors: visitors,
      requests: requests,
      latency: Math.round(latency),
      errors: Number(errorRate.toFixed(2))
    };
  }

  /* Line chart */

  var chartEl = document.querySelector(".chart");

  function renderChart() {
    var width = chartEl.clientWidth;
    var height = chartEl.clientHeight;
    if (width === 0 || height === 0) {
      return;
    }

    chartEl.setAttribute("viewBox", "0 0 " + width + " " + height);
    while (chartEl.firstChild) {
      chartEl.removeChild(chartEl.firstChild);
    }

    var pad = { top: 10, right: 56, bottom: 18, left: 40 };
    var plotW = width - pad.left - pad.right;
    var plotH = height - pad.top - pad.bottom;

    var min = Math.min.apply(null, requestsSeries);
    var max = Math.max.apply(null, requestsSeries);
    var span = Math.max(max - min, 40);
    var yMin = min - span * 0.15;
    var yMax = max + span * 0.15;

    function x(i) {
      return pad.left + (i / (WINDOW_SIZE - 1)) * plotW;
    }
    function y(v) {
      return pad.top + (1 - (v - yMin) / (yMax - yMin)) * plotH;
    }

    /* Grid + y labels */
    niceTicks(yMin, yMax, 3).forEach(function (tick) {
      var line = svgEl("line", {
        class: "chart__grid-line",
        x1: pad.left,
        x2: pad.left + plotW,
        y1: y(tick),
        y2: y(tick)
      });
      chartEl.appendChild(line);
      var label = svgEl("text", {
        class: "chart__tick",
        x: pad.left - 6,
        y: y(tick) + 3,
        "text-anchor": "end"
      });
      label.textContent = formatInt(tick);
      chartEl.appendChild(label);
    });

    /* X labels */
    [
      { i: 0, text: "-30m" },
      { i: 10, text: "-20m" },
      { i: 20, text: "-10m" },
      { i: 30, text: "now" }
    ].forEach(function (mark) {
      var label = svgEl("text", {
        class: "chart__tick",
        x: x(mark.i),
        y: height - 4,
        "text-anchor": mark.i === 0 ? "start" : mark.i === WINDOW_SIZE - 1 ? "end" : "middle"
      });
      label.textContent = mark.text;
      chartEl.appendChild(label);
    });

    /* Series line */
    var points = requestsSeries
      .map(function (v, i) {
        return x(i).toFixed(1) + "," + y(v).toFixed(1);
      })
      .join(" ");
    chartEl.appendChild(svgEl("polyline", { class: "chart__line", points: points }));

    /* Current point, directly labeled */
    var lastValue = requestsSeries[requestsSeries.length - 1];
    var lastX = x(WINDOW_SIZE - 1);
    var lastY = y(lastValue);
    chartEl.appendChild(svgEl("circle", { class: "chart__dot", cx: lastX, cy: lastY, r: 3.5 }));
    var valueLabel = svgEl("text", {
      class: "chart__value",
      x: lastX + 8,
      y: lastY + 4,
      "text-anchor": "start"
    });
    valueLabel.textContent = formatInt(lastValue);
    chartEl.appendChild(valueLabel);

    chartEl.setAttribute(
      "aria-label",
      "Requests per minute over the last 30 minutes. Current: " + formatInt(lastValue)
    );
  }

  /* Top pages bars */

  var barsEl = document.querySelector(".bars");

  function buildBars() {
    pages.forEach(function () {
      var row = document.createElement("div");
      row.className = "bar-row";

      var head = document.createElement("div");
      head.className = "bar-row__head";
      var name = document.createElement("span");
      name.className = "bar-row__name";
      var value = document.createElement("span");
      value.className = "bar-row__value";
      head.appendChild(name);
      head.appendChild(value);

      var track = document.createElement("div");
      track.className = "bar-row__track";
      var fill = document.createElement("div");
      fill.className = "bar-row__fill";
      track.appendChild(fill);

      row.appendChild(head);
      row.appendChild(track);
      barsEl.appendChild(row);
    });
  }

  function updateBars() {
    var max = pages.reduce(function (m, p) {
      return Math.max(m, p.views);
    }, 0);
    var rows = barsEl.children;
    pages.forEach(function (page, i) {
      if (Math.random() < 0.4) {
        page.views += Math.floor(Math.random() * 12);
      }
      var row = rows[i];
      row.querySelector(".bar-row__name").textContent = page.path;
      row.querySelector(".bar-row__value").textContent = formatInt(page.views);
      row.querySelector(".bar-row__fill").style.width = ((page.views / max) * 100).toFixed(1) + "%";
    });
  }

  /* Event feed */

  var feedEl = document.querySelector(".feed__rows");

  function makeBadge(status, label) {
    var badge = document.createElement("span");
    badge.className = "badge badge--" + status;
    badge.textContent = label;
    return badge;
  }

  function pushEvent() {
    var roll = Math.random();
    var pick;
    if (roll < 0.7) {
      pick = eventPool[Math.floor(Math.random() * 5)]; /* success / neutral */
    } else if (roll < 0.93) {
      pick = eventPool[5 + Math.floor(Math.random() * 2)]; /* warning */
    } else {
      pick = eventPool[7]; /* danger */
    }

    var row = document.createElement("tr");
    var time = document.createElement("td");
    time.className = "feed__time";
    time.textContent = new Date().toISOString().slice(11, 19);
    var msg = document.createElement("td");
    msg.className = "feed__msg";
    msg.textContent = pick.msg;
    var status = document.createElement("td");
    status.className = "feed__status";
    status.appendChild(makeBadge(pick.status, pick.label));

    row.appendChild(time);
    row.appendChild(msg);
    row.appendChild(status);
    feedEl.insertBefore(row, feedEl.firstChild);

    while (feedEl.children.length > FEED_MAX_ROWS) {
      feedEl.removeChild(feedEl.lastChild);
    }
  }

  /* Services */

  var servicesEl = document.querySelector(".services");

  function buildServices() {
    services.forEach(function () {
      var item = document.createElement("li");
      item.className = "service";
      var name = document.createElement("span");
      name.className = "service__name";
      var lat = document.createElement("span");
      lat.className = "service__latency";
      item.appendChild(name);
      item.appendChild(lat);
      servicesEl.appendChild(item);
    });
  }

  function updateServices() {
    var items = servicesEl.children;
    services.forEach(function (service, i) {
      service.latency = Math.max(4, Math.round(service.latency + (Math.random() - 0.5) * 8));
      if (service.name === "Workers" && Math.random() < 0.04) {
        var degraded = service.status === "warning";
        service.status = degraded ? "success" : "warning";
        service.label = degraded ? "Operational" : "Degraded";
      }

      var item = items[i];
      item.querySelector(".service__name").textContent = service.name;
      item.querySelector(".service__latency").textContent = service.latency + " ms";
      var oldBadge = item.querySelector(".badge");
      if (oldBadge) {
        item.removeChild(oldBadge);
      }
      item.appendChild(makeBadge(service.status, service.label));
    });
  }

  /* Tick */

  function tick() {
    requestsSeries.shift();
    requestsSeries.push(nextRequestsValue());
    updateStats();
    renderChart();
    updateBars();
    updateServices();
    if (Math.random() < 0.45) {
      pushEvent();
    }
  }

  /* Init */

  for (var i = 0; i < WINDOW_SIZE; i++) {
    requestsSeries.push(nextRequestsValue());
  }
  buildBars();
  buildServices();

  updateClock();
  updateStats();
  renderChart();
  updateBars();
  updateServices();
  pushEvent();
  pushEvent();
  pushEvent();

  setInterval(updateClock, 1000);
  setInterval(tick, TICK_MS);
  window.addEventListener("resize", renderChart);
})();
