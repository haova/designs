document.querySelectorAll("[data-dialog-open]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById(btn.dataset.dialogOpen).showModal();
  });
});

document.querySelectorAll("[data-dialog-close]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest("dialog").close();
  });
});
