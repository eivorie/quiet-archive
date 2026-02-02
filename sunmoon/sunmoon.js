const slider = document.querySelector(".sunmoon-slider");
const cards = document.querySelectorAll(".sunmoon-card");

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function isMobile() {
  return window.innerWidth <= 768;
}

/* -----------------------------------------------------
   ACTIVE CARD (LUMIÈRE / MONDE)
----------------------------------------------------- */
function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle("is-active", index === currentIndex);
  });
}

/* -----------------------------------------------------
   UPDATE SLIDER
----------------------------------------------------- */
function updateSlider() {
  if (!isMobile()) {
    slider.style.transform = "none";
    cards.forEach(card => card.classList.remove("is-active"));
    return;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
  updateActiveCard();
}

/* -----------------------------------------------------
   TOUCH EVENTS
----------------------------------------------------- */
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

  if (delta < -60 && currentIndex < cards.length - 1) {
    currentIndex++;
  } else if (delta > 60 && currentIndex > 0) {
    currentIndex--;
  }

  updateSlider();
});

/* -----------------------------------------------------
   RESET ON RESIZE
----------------------------------------------------- */
window.addEventListener("resize", updateSlider);

/* -----------------------------------------------------
   INIT
----------------------------------------------------- */
updateSlider();
