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
  },
  {
    text: "Under this constant longing for you, beneath this unwavering love, there are these sudden waves of yearning that almost break me",
    author: "me"
  },
  {
    text: "You are everything I didn’t know I was allowed to hope for. And I love you more than I know how to say",
    author: "me"
  },

  /* ---------------------------
     Nouveaux souvenirs
  --------------------------- */

  {
    text: "I like every single thing and every single mood to be honest:\ncute — heart racing,\nLovely — wanna bite you,\nSerious — sexy,\nSmiling — feeling hypnotized,\nAnnoying — intrigued,\nRomantic — I lose myself completely.\nSo my situation isn't easy.",
    author: "you"
  },
  {
    text: "Well, maybe when you come back if you aren't tired you can have a drink with me ~ who knows.\n— You're asking me on a date?\n— Exactly.",
    author: "us",
    note: "second official date"
  },
  {
    text: "Damn you, if you live again as a rat in your next life, I swear to god I'll eat you",
    author: "me"
  },
  {
    text: "Fuck... eu não consigo ...eu",
    author: "you",
    note: "I hope you remember that one as vividly as I do"
  },
  {
    text: "Okay, so I'm waiting for the \"I love you\" part here so I can go",
    author: "you"
  },
  {
    text: "Today when I was working out I noticed I was smiling while lifting weights because I was imagining us going out together and having fun talking about random things",
    author: "you"
  },
  {
    text: "This is me trying to temper the flame but blowing on it won't work",
    author: "me"
  },
  {
    text: "I want you to focus on me from now on, nothing else",
    author: "you"
  },
  {
    text: "I love how obedient you are sometimes but ironically it only makes me want to make you suffer a little more, meu amor",
    author: "you"
  },
  {
    text: "I wanna go live in Juuland",
    author: "me",
    note: "You made fun of me, but my suitcase is ready~"
  },
  {
    text: "You're so cute, thinking there's a comeback now that i know you exist",
    author: "me"
  },
  {
    text: "I'm picturing a lot marrying you",
    author: "you",
    note: "So do I, amor da minha vida."
  },
  {
    text: "What I like about you is that you never pressure us here. I don't feel like rushing with you and that means a lot to me",
    author: "you"
  },
  {
    text: "You make my heart beat so damn fast",
    author: "me"
  },
  {
    text: "You won't let me go then?\n— I won't\nGood.",
    author: "us",
    note: "I love you."
  },
  {
    text: "You never judge me for telling you things, no matter how stupid they sound. I feel good with you. Safe. Trusted.",
    author: "me"
  },
  {
    text: "I'll fight for you anytime",
    author: "me"
  },
  {
    text: "First vibration delivered",
    author: "you",
    note: "a kiss under my eye"
  },
  {
    text: "You look way more than just gostoso. Every time I discover a new detail that haunts me all day long",
    author: "me"
  },
  {
    text: "I'll never say it enough but I love you and you're not allowed to ever leave me",
    author: "me",
    note: "It's very true everyday, good luck babe."
  },
  {
    text: "I'm madly in love with you",
    author: "you"
  },
  {
    text: "I think you fell asleep and forgot to wait for me at the door~",
    author: "you",
    note: "It was worth it though, you came to bed to wake me up, and you even changed before sitting on the covers. You're perfect."
  },
  {
    text: "Poor babe, where's your boy to warm you up?",
    author: "you",
    note: "talking about himself, presently reading that I believe."
  },
  {
    text: "I play with my car keys every time and I hurt my hand every time I do that",
    author: "you"
  },
  {
    text: "You gotta understand that although I love you more intensely every day, it always feels like the first time we noticed something was going on here",
    author: "you"
  },
  {
    text: "You are my crush, the love of my life, my soulmate",
    author: "you"
  },
  {
    text: "I never imagined that in thirty years of living, I would ever cross paths with someone like you. Someone who touches me this deeply, this violently, this gently all at once. I wish I could open myself completely and let you see every feeling I have for you — every corner, every shade — but the truth is that I don’t even understand them all myself.",
    author: "me"
  },
  {
    text: "I am in love with you. Deeply, hopelessly, fiercely. And even that feels too small.",
    author: "me"
  },
  {
    text: "You make me lose my balance in the most beautiful way. And every day I realize a little more how much you mean to me.\nYou are everything I didn’t know I had the right to hope for.",
    author: "me"
  },
  {
    text: "I love you. More than these words can carry, more than I know how to say.",
    author: "me"
  },
  {
    text: "I love your kindness, the gentleness in you that disarms me. Your honesty, your strength, the way I trust you without even thinking. I love your eyes, your voice, your smile — the things that pull me under a little more each time.",
    author: "me"
  }
];

let shuffledMemories = [];
let score = 0;
let round = 0;
const totalRounds = 10;

const result = document.getElementById("result");
const container = document.querySelector(".container");

const lastScore = localStorage.getItem("memoriesLastScore");

/* -----------------------------------------------------
   Écran d’entrée
----------------------------------------------------- */

showIntro();

function showIntro() {
  result.innerHTML = `
    <p class="memory-text">
      Who said that?
    </p>

    <button id="start-quiz">Remember</button>
  `;

  /* afficher le dernier score si présent */
  const existing = document.querySelector(".last-score");
  if (existing) existing.remove();

  if (lastScore) {
    const p = document.createElement("p");
    p.className = "last-score";
    p.textContent = `Last time, you remembered ${lastScore}.`;
    container.insertBefore(p, result);
  }

  document
    .getElementById("start-quiz")
    .addEventListener("click", startQuiz);
}

/* -----------------------------------------------------
   Quiz lifecycle
----------------------------------------------------- */

function startQuiz() {
  score = 0;
  round = 0;

  /* mélange + tirage sans remise */
  shuffledMemories = [...memories]
    .sort(() => Math.random() - 0.5)
    .slice(0, totalRounds);

  nextMemory();
}

function nextMemory() {
  if (round >= shuffledMemories.length) {
    endQuiz();
    return;
  }

  const memory = shuffledMemories[round];
  round++;

  result.innerHTML = `
    <p class="memory-text">
      “${memory.text.replace(/\n/g, "<br>")}”
    </p>

    <div class="choices">
      <button data-choice="me">L.</button>
      <button data-choice="you">J.</button>
      <button data-choice="us">Us</button>
    </div>

    <p class="progress">Memory ${round} / ${totalRounds}</p>
  `;

  document.querySelectorAll(".choices button").forEach(btn => {
    btn.addEventListener("click", () => {
      handleAnswer(btn, memory.author);
    });
  });
}

/* -----------------------------------------------------
   Answer handling
----------------------------------------------------- */

function handleAnswer(button, correctAuthor) {
  const choice = button.dataset.choice;
  const isCorrect = choice === correctAuthor;

  if (isCorrect) score++;

  /* feedback visuel */
  result.classList.add(isCorrect ? "correct" : "wrong");

  /* désactivation + révélation bonne réponse */
  document.querySelectorAll(".choices button").forEach(b => {
    b.disabled = true;

    if (b.dataset.choice === correctAuthor) {
      b.classList.add("right-answer");
    }
  });

  setTimeout(() => {
    result.classList.remove("correct", "wrong");
    nextMemory();
  }, 900);
}

/* -----------------------------------------------------
   Fin de quiz
----------------------------------------------------- */

function endQuiz() {
  const finalScore = `${score} / ${totalRounds}`;
  localStorage.setItem("memoriesLastScore", finalScore);

  result.innerHTML = `
    <p class="final-score">
      You remembered <strong>${score}</strong> out of ${totalRounds}.
    </p>

    <button id="restart">Back to memories</button>
  `;

  document
    .getElementById("restart")
    .addEventListener("click", showIntro);
}
