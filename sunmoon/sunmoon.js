const body = document.body;
const switches = document.querySelectorAll(".sunmoon-switch");

let currentMode = "moon";
let isTransitioning = false;

function setMode(mode) {
  if (mode === currentMode || isTransitioning) return;

  isTransitioning = true;

  const nextCard = document.querySelector(`.card-${mode}`);
  const prevCard = document.querySelector(`.card-${currentMode}`);

  // 1. changer le monde
  body.classList.remove(`mode-${currentMode}`);
  body.classList.add(`mode-${mode}`);

  // 2. faire apparaître la nouvelle carte
  nextCard.classList.add("is-active");

  // 3. laisser l’ancienne disparaître lentement
  setTimeout(() => {
    prevCard.classList.remove("is-active");
    currentMode = mode;
    isTransitioning = false;
  }, 2200);
}

switches.forEach(btn => {
  btn.addEventListener("click", () => {
    setMode(btn.dataset.target);
  });
});

// INIT
body.classList.add("mode-moon");
document.querySelector(".card-moon").classList.add("is-active");
