document.querySelectorAll(".dropdown__trigger").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.stopPropagation();
    var dropdown = btn.closest(".dropdown");
    var isOpen = dropdown.classList.contains("dropdown--open");
    document.querySelectorAll(".dropdown--open").forEach(function (open) {
      open.classList.remove("dropdown--open");
    });
    if (!isOpen) {
      dropdown.classList.add("dropdown--open");
      var menu = dropdown.querySelector(".dropdown__menu");
      menu.style.left = "";
      menu.style.right = "";
      var rect = menu.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        menu.style.left = "auto";
        menu.style.right = "0";
      }
    }
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".dropdown--open").forEach(function (open) {
    open.classList.remove("dropdown--open");
  });
});
