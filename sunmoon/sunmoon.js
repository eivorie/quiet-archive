const body = document.body;
const cards = document.querySelectorAll(".sunmoon-card");
const switches = document.querySelectorAll(".sunmoon-switch");

function setMode(mode) {
  body.classList.remove("mode-moon", "mode-sun");
  body.classList.add(`mode-${mode}`);

  cards.forEach(card => {
    card.classList.toggle(
      "is-active",
      card.classList.contains(`card-${mode}`)
    );
  });
}

switches.forEach(btn => {
  btn.addEventListener("click", () => {
    setMode(btn.dataset.target);
  });
});

// init
setMode("moon");
