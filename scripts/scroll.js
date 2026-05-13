document.addEventListener("DOMContentLoaded", () => {
  scrollToSection();
  smoothScroll();
});

function scrollToSection() {
  const logo = document.querySelector(".logo");
  const containerMobile = document.querySelector(".navs-mobile ul");
  const containerDesktop = document.querySelector(".navs ul");

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

  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function smoothScroll() {
  const container = document.getElementById("scroll-container");
  let current = 0;
  let target = 0;
  const ease = 0.1;

  const isDesktop = () => window.innerWidth >= 768;
  const smoothing = isDesktop() ? ease : 1;

  const setBodyHeight = () => {
    document.body.style.height = container.scrollHeight + "px";
  };

  let resizeTimeout;

  function debouncedSetBodyHeight() {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      setBodyHeight();
    }, 300);
  }

  setBodyHeight();

  // images load after initial render;,
  // so scrollHeight is wrong at first
  // we observe size changes to fix it
  const resizeObserver = new ResizeObserver(debouncedSetBodyHeight);
  resizeObserver.observe(container);

  window.addEventListener("resize", debouncedSetBodyHeight);

  window.addEventListener("scroll", () => {
    target = window.scrollY;
  });

  const nav = document.querySelector("nav");
  const navHeight = nav.scrollHeight + 100; // 100px offset

  const animate = () => {
    current += (target - current) * smoothing;
    container.style.transform = `translateY(${-current}px)`;

    current > navHeight
      ? nav.classList.add("scrolled")
      : nav.classList.remove("scrolled");

    requestAnimationFrame(animate);
  };

  animate();
}
