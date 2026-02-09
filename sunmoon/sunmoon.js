/* =====================================================
   SUNMOON — MODE SWITCH (NO SWIPE)
   ===================================================== */

const body = document.body;
const cards = document.querySelectorAll(".sunmoon-card");
const switches = document.querySelectorAll(".sunmoon-switch");

/* -----------------------------------------------------
   SET ACTIVE MODE
----------------------------------------------------- */
function setMode(mode) {
  // body theme
  body.classList.remove("mode-moon", "mode-sun");
  body.classList.add(`mode-${mode}`);

  // active card
  cards.forEach(card => {
    const isTarget = card.classList.contains(`card-${mode}`);
    card.classList.toggle("is-active", isTarget);
  });
}

/* -----------------------------------------------------
   SWITCH BUTTONS
----------------------------------------------------- */
switches.forEach(button => {
  button.addEventListener("click", () => {
    const targetMode =
      button.getAttribute("aria-label")?.includes("Sun") ? "sun" : "moon";

    setMode(targetMode);
  });
});

/* -----------------------------------------------------
   INIT (default = moon)
----------------------------------------------------- */
setMode("moon");
