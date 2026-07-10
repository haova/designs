var slider = document.getElementById("weight-slider");
var value = document.getElementById("weight-value");

slider.addEventListener("input", function () {
  document.documentElement.style.setProperty("--weight", slider.value);
  value.textContent = slider.value;
});
