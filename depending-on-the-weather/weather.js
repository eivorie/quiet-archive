document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     LANGUAGE SWITCH
     Used by multilingual Weather stories
  ===================================================== */

  const langButtons = document.querySelectorAll(".lang-switch button");
  const langBlocks = document.querySelectorAll(".lang");

  function switchLanguage(lang) {

    langButtons.forEach(button => {
      button.classList.remove("active");
    });

    langBlocks.forEach(block => {
      block.classList.remove("active");
    });

    document
      .querySelector(`[data-lang="${lang}"]`)
      ?.classList.add("active");

    document
      .querySelector(`.lang-${lang}`)
      ?.classList.add("active");

    localStorage.setItem("weatherLang", lang);
  }


  langButtons.forEach(button => {

    button.addEventListener("click", () => {

      const lang = button.dataset.lang;

      switchLanguage(lang);
    });
  });


  const savedLang = localStorage.getItem("weatherLang");

  if (savedLang && langButtons.length && langBlocks.length) {
    switchLanguage(savedLang);
  }


  /* =====================================================
     WEATHER INDEX PAGINATION
  ===================================================== */

  const weatherPages = document.querySelectorAll(".weather-index-page");
  const prevButton = document.querySelector(".weather-page-prev");
  const nextButton = document.querySelector(".weather-page-next");
  const pageCurrent = document.querySelector(".weather-page-current");
  const pageTotal = document.querySelector(".weather-page-total");

  /*
     Si on n'est pas sur l'index Weather,
     cette partie ne fait simplement rien.
  */
  if (weatherPages.length) {

    let currentPage = 0;

    const totalPages = weatherPages.length;


    function showWeatherPage(index) {

      /*
         Empêche de dépasser les pages existantes.
      */
      if (index < 0 || index >= totalPages) {
        return;
      }


      weatherPages.forEach((page, pageIndex) => {

        page.classList.toggle(
          "is-active",
          pageIndex === index
        );
      });


      currentPage = index;


      /* ---------- compteur ---------- */

      if (pageCurrent) {
        pageCurrent.textContent = currentPage + 1;
      }

      if (pageTotal) {
        pageTotal.textContent = totalPages;
      }


      /* ---------- boutons ---------- */

      if (prevButton) {
        prevButton.disabled = currentPage === 0;
      }

      if (nextButton) {
        nextButton.disabled =
          currentPage === totalPages - 1;
      }
    }


    /* ---------- navigation ---------- */

    prevButton?.addEventListener("click", () => {
      showWeatherPage(currentPage - 1);
    });


    nextButton?.addEventListener("click", () => {
      showWeatherPage(currentPage + 1);
    });


    /* ---------- initialisation ---------- */

    showWeatherPage(0);
  }

});
