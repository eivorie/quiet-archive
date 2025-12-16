const memories = [
  "We didn’t plan this.",
  "You stayed awake with me.",
  "This is where it changed."
];

const button = document.getElementById("generate");
const result = document.getElementById("result");

if (button) {
  button.addEventListener("click", () => {
    const text = memories[Math.floor(Math.random() * memories.length)];
    result.textContent = text;
  });
}
