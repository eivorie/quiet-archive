const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

let current = 0;

function updateCarousel() {

    const card = cards[current];

    track.style.transform =
        `translateX(calc(-${current} * (${card.offsetWidth + 24}px)))`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });

}

document.querySelector(".next").addEventListener("click", () => {

    if (current < cards.length - 1) {
        current++;
        updateCarousel();
    }

});

document.querySelector(".prev").addEventListener("click", () => {

    if (current > 0) {
        current--;
        updateCarousel();
    }

});

window.addEventListener("resize", updateCarousel);

updateCarousel();
