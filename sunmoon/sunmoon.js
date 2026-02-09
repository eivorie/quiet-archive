const body = document.body;
const cards = document.querySelectorAll(".sunmoon-card");
const switches = document.querySelectorAll(".sunmoon-switch");

let currentMode = "moon";
let isTransitioning = false;

function setMode(mode) {
  if (mode === currentMode || isTransitioning) return;

  isTransitioning = true;

  const nextCard = document.querySelector(`.card-${mode}`);
  const prevCard = document.querySelector(`.card-${currentMode}`);

  // 1. changer le monde (fond, nav)
  body.classList.remove(`mode-${currentMode}`);
  body.classList.add(`mode-${mode}`);

  // 2. faire apparaître la nouvelle carte
  nextCard.classList.add("is-active");

  // 3. laisser l’ancienne se dissoudre
  setTimeout(() => {
    prevCard.classList.remove("is-active");
    currentMode = mode;
    isTransitioning = false;
  }, 1800); // durée du fondu croisé
}

switches.forEach(btn => {
  btn.addEventListener("click", () => {
    setMode(btn.dataset.target);
  });
});

// init — une seule carte visible au départ
document.querySelector(".card-moon").classList.add("is-active");
body.classList.add("mode-moon");
