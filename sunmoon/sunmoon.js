const body = document.body;
const cards = document.querySelectorAll(".sunmoon-card");
const switches = document.querySelectorAll(".sunmoon-switch");

function setMode(mode) {
  // 1. changer le monde (jour / nuit)
  body.classList.remove("mode-moon", "mode-sun");
  body.classList.add(`mode-${mode}`);

  // 2. activer la bonne carte
  cards.forEach(card => {
    card.classList.toggle(
      "is-active",
      card.classList.contains(`card-${mode}`)
    );
  });
}

// 3. clic sur les boutons
switches.forEach(btn => {
  btn.addEventListener("click", () => {
    setMode(btn.dataset.target);
  });
});

// 4. état initial
setMode("moon");
