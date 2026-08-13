document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("alwaysToggle");
  const letter = document.getElementById("hiddenLetter");

  if (!toggle || !letter) return;

  toggle.addEventListener("click", () => {
    const isOpen = letter.classList.toggle("is-visible");

    toggle.setAttribute("aria-expanded", isOpen);
    letter.setAttribute("aria-hidden", !isOpen);

    if (isOpen) {
      setTimeout(() => {
        letter.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 150);
    }
  });
});
