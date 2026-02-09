document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const cards = document.querySelectorAll(".sunmoon-card");
  const switches = document.querySelectorAll(".sunmoon-switch");

  if (!cards.length || !switches.length) {
    console.warn("Sunmoon: elements not found");
    return;
  }

  /* ----------------------------------------
     SET ACTIVE MODE
  ---------------------------------------- */
  function setMode(mode) {
    body.classList.remove("mode-moon", "mode-sun");
    body.classList.add(`mode-${mode}`);

    cards.forEach(card => {
      const isTarget = card.classList.contains(`card-${mode}`);
      card.classList.toggle("is-active", isTarget);
    });
  }

  /* ----------------------------------------
     SWITCH BUTTONS
  ---------------------------------------- */
  switches.forEach(button => {
    button.addEventListener("click", () => {
      const target =
        button.getAttribute("aria-label") === "Go to Sun"
          ? "sun"
          : "moon";

      setMode(target);
    });
  });

  /* ----------------------------------------
     INIT
  ---------------------------------------- */
  setMode("moon");
});
