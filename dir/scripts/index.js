document.addEventListener("DOMContentLoaded", function () {
  const mobileDropdown = document.querySelector(".mobile-dropdown");

  document.querySelector(".logo").addEventListener("click", function () {
    mobileDropdown.style.display =
      mobileDropdown.style.display === "none" ||
      mobileDropdown.style.display === ""
        ? "block"
        : "none";
  });
});
