var toastMessages = {
  success: "Item published. MORE!",
  warning: "Changes saved, but review is pending.",
  danger: "Failed to delete item. Try again.",
  neutral: "Nothing changed. (Boring.)"
};

document.querySelectorAll("[data-toast]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var type = btn.dataset.toast;
    var stack = document.getElementById("toast-stack");
    var toast = document.createElement("div");
    toast.className = "toast toast--" + type;
    toast.textContent = toastMessages[type];
    stack.appendChild(toast);
    setTimeout(function () {
      toast.classList.add("toast--visible");
    }, 10);
    setTimeout(function () {
      toast.classList.remove("toast--visible");
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 3000);
  });
});
