const slider = document.querySelector(".sunmoon-slider");

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function isMobile() {
  return window.innerWidth <= 768;
}

function updateSlider() {
  if (!isMobile()) {
    slider.style.transform = "none";
    return;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

/* TOUCH */
slider.addEventListener("touchstart", e => {
  if (!isMobile()) return;
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener("touchmove", e => {
  if (!isDragging || !isMobile()) return;
  currentX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (!isDragging || !isMobile()) return;
  isDragging = false;

  const delta = currentX - startX;

  if (delta < -60 && currentIndex < 1) {
    currentIndex = 1;
  } else if (delta > 60 && currentIndex > 0) {
    currentIndex = 0;
  }

  updateSlider();
});

/* RESET ON RESIZE */
window.addEventListener("resize", updateSlider);

/* INIT */
updateSlider();
