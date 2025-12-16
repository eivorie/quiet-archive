const memories = [
  {
    text: "Hi my dear ! How have you been ? ♥",
    author: "you",
    note: "first message you sent me"
  },
  {
    text: "Can I just \"hear\" you say Je t'aime one more time ? I just want to keep that in my memory",
    author: "you",
    note: "september 19th"
  },
  {
    text: "If I stop replying that means the texas chainsaw massacre just showed up here, so yeah, start worrying",
    author: "you",
    note: "in the park close to a barn because you don't like carrying water"
  },
  {
    text: "There's nothing such as too much of you, you know",
    author: "me"
  },
  {
    text: "We passed that tree 3 days ago, we're lost\n— Why do you always have to be so annoying, I have the map\n— Just admit it\n— Fuck you!",
    author: "us",
    note: "Amazonia, possibly"
  },
  {
    text: "Can you send me a red heart ? Not that dark thing. That one is your stone heart, I know",
    author: "you"
  },
  {
    text: "Thank you ~ gives a damn light kiss. Now sleep.\n— You forgot to put exactly where\n— I didn't, now sleep.",
    author: "us"
  },
  {
    text: "Love me for a long time too?\n— Forever is good?\n— It's a nice start yes",
    author: "us"
  },
  {
    text: "You can't be cute after spitting on my cookies",
    author: "me"
  },
  {
    text: "Esse demônio vai sair nem que se for afogado, MAS HOJE SAI",
    author: "you",
    note: "childhood adventures, narrated dramatically"
  }
];

const button = document.getElementById("generate");
const result = document.getElementById("result");

if (button && result) {
  button.addEventListener("click", () => {
    const memory = memories[Math.floor(Math.random() * memories.length)];

    result.innerHTML = `
      <p class="memory-text">${memory.text.replace(/\n/g, "<br>")}</p>
      <p class="memory-author">${formatAuthor(memory.author)}</p>
      ${memory.note ? `<p class="memory-note">${memory.note}</p>` : ""}
    `;
  });
}

function formatAuthor(author) {
  switch (author) {
    case "you": return "— you";
    case "me": return "— me";
    case "us": return "— us";
    default: return "";
  }
}
