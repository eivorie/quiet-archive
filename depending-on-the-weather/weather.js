document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-switch button");
  const blocks = document.querySelectorAll(".lang");

  function switchLanguage(lang) {
    buttons.forEach(b => b.classList.remove("active"));
    blocks.forEach(b => b.classList.remove("active"));

    document.querySelector(`[data-lang="${lang}"]`)?.classList.add("active");
    document.querySelector(".lang-" + lang)?.classList.add("active");

    localStorage.setItem("weatherLang", lang);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      switchLanguage(lang);
    });
  });

  // Restaurer la langue sauvegardée
  const savedLang = localStorage.getItem("weatherLang");
  if (savedLang) {
    switchLanguage(savedLang);
  }
});
