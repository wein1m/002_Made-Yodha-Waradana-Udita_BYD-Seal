const container = document.getElementById("scroll-container");
let current = 0;
let target = 0;
const ease = 0.1;

const setBodyHeight = () => {
  document.body.style.height = container.scrollHeight + "px";
};

setBodyHeight();
window.addEventListener("resize", setBodyHeight);

window.addEventListener("scroll", () => {
  target = window.scrollY;
});

const animate = () => {
  current += (target - current) * ease;
  container.style.transform = `translateY(${-current}px)`;
  requestAnimationFrame(animate);
};

animate();
