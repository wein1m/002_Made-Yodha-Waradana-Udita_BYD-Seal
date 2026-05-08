document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".hero-content .bottom");
  const video = document.querySelector(".hero-content video");
  const overlay = document.querySelector(".hero-content .overlay");
  const playBtn = document.querySelector(".hero-content .play-btn");

  if (videoContainer && video && overlay && playBtn) {
    videoContainer.addEventListener("mouseenter", () => {
      overlay.style.opacity = "0";
      overlay.style.visibility = "hidden";

      playBtn.style.opacity = "0";
      playBtn.style.visibility = "hidden";

      video.play();
    });

    videoContainer.addEventListener("mouseleave", () => {
      overlay.style.opacity = "1";
      overlay.style.visibility = "visible";

      playBtn.style.opacity = "1";
      playBtn.style.visibility = "visible";

      video.pause();
    });
  }
});
