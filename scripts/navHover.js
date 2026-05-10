document.addEventListener("DOMContentLoaded", () => {
  const navWrapper = document.querySelector(".navs-mobile ul");
  const navItems = document.querySelectorAll(".navs-mobile ul li");

  let lastHovered = 0;

  navItems.forEach((e, i) => {
    e.addEventListener("mouseenter", () => {
      e.style.cursor = "pointer";
      e.classList.add("hovered");
    });
    e.addEventListener("mouseleave", () => {
      lastHovered = i;
      e.style.cursor = "default";
      e.classList.remove("hovered");
    });
  });

  navWrapper.addEventListener("mouseenter", () => {
    navItems.forEach((e) => e.classList.remove("hovered"));
  });

  navWrapper.addEventListener("mouseleave", () => {
    navItems[lastHovered].classList.add("hovered");
  });
});
