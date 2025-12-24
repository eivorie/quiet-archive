document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("alwaysToggle");
  const letter = document.getElementById("hiddenLetter");

  if (!toggle || !letter) return;

  toggle.addEventListener("click", () => {
    const isOpen = letter.classList.contains("is-visible");

    if (isOpen) {
      // Fermer
      letter.classList.remove("is-visible");
      letter.style.display = "none";

      toggle.setAttribute("aria-expanded", "false");
      letter.setAttribute("aria-hidden", "true");
    } else {
      // Ouvrir
      letter.style.display = "block";
      letter.classList.add("is-visible");

      toggle.setAttribute("aria-expanded", "true");
      letter.setAttribute("aria-hidden", "false");

      // Scroll doux vers la lettre
      letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
