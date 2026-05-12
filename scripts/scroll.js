document.addEventListener("DOMContentLoaded", () => {
  const containerMobile = document.querySelector(".nav-wrapper");
  const containerDesktop = document.querySelector(".navs-mobile ul");

  const nav = document.querySelector("nav");

  const isMobile = () => window.innerWidth < 768;
  const container = isMobile() ? containerMobile : containerDesktop;

  const getSectionPos = (section) => {
    const target = document.getElementById(section);

    if (!target) return;

    return (
      target.getBoundingClientRect().top + window.scrollY - nav.scrollHeight
    );
  };

  container.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== "li") return;
    const value = e.target.dataset.scroll;

    if (!value) return;

    const sectionPos = getSectionPos(value);

    if (!sectionPos) return;

    window.scrollTo({
      top: sectionPos,
      behavior: "smooth",
    });

    isMobile && window.mobileCloseMenu();
  });
});
