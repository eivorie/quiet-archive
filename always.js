document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".always-trigger");
  const letter = document.querySelector(".hidden-letter");

  if (!trigger || !letter) return;

  trigger.addEventListener("click", () => {
    // reveal
    letter.style.display = "block";

    // a11y
    trigger.setAttribute("aria-expanded", "true");
    letter.setAttribute("aria-hidden", "false");

    // scroll doux
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // optionnel : empêcher un second clic
    trigger.disabled = true;
    trigger.style.cursor = "default";
    trigger.style.opacity = "0.4";
  });
});
