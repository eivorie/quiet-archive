const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

let current = 0;

function updateCarousel() {

    cards.forEach(card => {
        card.classList.remove("left", "active", "right");
    });

    const left =
        (current - 1 + cards.length) % cards.length;

    const right =
        (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[left].classList.add("left");
    cards[right].classList.add("right");

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });

}

document.querySelector(".next").addEventListener("click", () => {

    current++;

    if(current >= cards.length){
        current = 0;
    }

    updateCarousel();

});

document.querySelector(".prev").addEventListener("click", () => {

    current--;

    if(current < 0){
        current = cards.length - 1;
    }

    updateCarousel();

});

updateCarousel();
