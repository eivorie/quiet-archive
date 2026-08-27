const pages = document.querySelectorAll(".stories-page");
const pageButtons = document.querySelectorAll(".page-number");

const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");

let currentPage = 0;

function showPage(index) {

    pages.forEach(page => page.classList.remove("active"));

    pageButtons.forEach(button => {
        button.classList.remove("current");
        button.removeAttribute("aria-current");
    });

    pages[index].classList.add("active");

    pageButtons[index].classList.add("current");
    pageButtons[index].setAttribute("aria-current", "page");

    prevButton.disabled = index === 0;
    nextButton.disabled = index === pages.length - 1;

    currentPage = index;
}

pageButtons.forEach((button, index) => {
    button.addEventListener("click", () => showPage(index));
});

prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }
});

showPage(0);
