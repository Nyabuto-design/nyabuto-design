document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".current-year").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const opened = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(opened));
      menuButton.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation");
    });
  }
});
