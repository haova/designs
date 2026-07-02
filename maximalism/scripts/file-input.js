document.querySelectorAll(".file-input__native").forEach(function (input) {
  input.addEventListener("change", function () {
    var name = input.files.length ? input.files[0].name : "No file chosen";
    input.closest(".file-input").querySelector(".file-input__name").textContent = name;
  });
});
