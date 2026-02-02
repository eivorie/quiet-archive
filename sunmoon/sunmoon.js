/* =====================================================
   SUNMOON — SWIPE + MODE SWITCH
   ===================================================== */

const slider = document.querySelector(".sunmoon-slider");
let currentMode = "moon"; // default
let startX = 0;
let currentX = 0;
let isDragging = false;

/* -----------------------------------------------------
   UPDATE THEME
----------------------------------------------------- */
function setMode(mode) {
  currentMode = mode;
  document.body.classList.remove("mode-moon", "mode-sun");
  document.body.classList.add(`mode-${mode}`);

  // translate slider
  slider.style.transform = mode === "moon"
    ? "translateX(0)"
    : "translateX(-100vw)";
}

/* -----------------------------------------------------
   TOUCH EVENTS
----------------------------------------------------- */
slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener("touchmove", e => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (!isDragging) return;
  isDragging = false;

  const delta = currentX - startX;

  // swipe left → SUN
  if (delta < -60) {
    setMode("sun");
  }
  // swipe right → MOON
  else if (delta > 60) {
    setMode("moon");
  }
});

/* -----------------------------------------------------
   DESKTOP KEYS (← / →)
----------------------------------------------------- */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") setMode("sun");
  if (e.key === "ArrowLeft") setMode("moon");
});

/* -----------------------------------------------------
   DESKTOP CLICK / DRAG (OPTIONAL PREMIUM)
----------------------------------------------------- */
// (activation possible plus tard)
