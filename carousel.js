document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".carousel-wrapper");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const item = document.querySelector(".carousel-item");
  const itemWidth = item.clientWidth;

  const validate = () => {
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    const currScroll = wrapper.scrollLeft;

    // the '10' is for tolerance (cuz the scroll pos may not be exact)
    if (currScroll <= 10) {
      prevBtn.style.opacity = "0.5";
    } else if (currScroll >= maxScroll - 10) {
      nextBtn.style.opacity = "0.5";
    } else {
      prevBtn.style.opacity = "1";
      nextBtn.style.opacity = "1";
    }
  };

  prevBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: itemWidth, behavior: "smooth" });
  });

  wrapper.addEventListener("scroll", validate);

  validate();
});
