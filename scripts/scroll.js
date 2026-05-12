document.addEventListener("DOMContentLoaded", () => {
  const getSectionPos = (section) => {
    const target = document.getElementById(section);

    if (!target) return;

    return target.getBoundingClientRect().top + window.scrollY;
  };

  const container = document.querySelector(".navs ul");

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

    console.log(e.target.dataset.scroll);
  })
});
