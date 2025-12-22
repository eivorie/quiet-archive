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
  },
  {
  text: "Is there any language in which you sound bleh ? Cause I'll learn it.",
  author: "me",
  note: "No matter the language, you're talking sweet."
},
{
  text: "You hate me ? So go to jail, I don't care ~",
  author: "you"
},
{
  text: "Remember babe, on those situation, don't express 100% of your mind ok ?",
  author: "you",
  note: "I'll remember that"
},
{
  text: "I can't write poems for you because I'm not good at this, but you're a constant melody in the back of my head.",
  author: "me"
},
{
  text: "Fucking cat, seriously",
  author: "me",
  note: "Always in the middle of a fight, nice."
},
{
  text: "I like her, even though I really love panettone",
  author: "me",
  note: "Your sister when she got her bonus."
},
{
  text: "I'm gonna be 100% honest I even had a cramp in my fucking foot",
  author: "me",
  note: "You're that good."
},
{
  text: "Your funeral is gonna be tomorrow at 9:00AM",
  author: "you",
  note: "Threats, always threats."
},
{
  text: "Oi, say something please I'm sweating like a fucking pig here",
  author: "me",
  note: "First call."
},
{
  text: "Mas ela come rato ???",
  author: "you"
},
{
  text: "Go to war my love, I'll write to you and pray you get my letters. I'll send my very best pigeon up to the task.",
  author: "me",
  note: "Going to work is always a hassle."
},
{
  text: "Je n'ai jamais imaginé que c'était en étant perdu que je me trouverais",
  author: "you",
  note: "from a lifetime in France"
},
{
  text: "Peut-être que je te connais de l'époque où j'envoyais des milliers de lettres, ou alors de celle où on se retrouvait en cachette, contre la volonté de nos parents, pour être ensemble ?",
  author: "you",
  note: "You romantic little fucker."
},
{
  text: "What mercy could I have when you smell so good ?",
  author: "me",
  note: "First date."
},
{
  text: "Just holding this fucking frustration is a pain.",
  author: "you",
  note: "First date ~"
},
{
  text: "I think if you were here we'd be singing Sweater Weather together !",
  author: "you",
  note: "Yeah, we would."
},
{
  text: "Sorry, I'm taking advantage before the normal days come and I hear just a \"Oi, Thanks.\"\n— Normal days are behind now.\nUh huh, til you become cold af and I have to fight with you to get your attention.",
  author: "us",
  note: "After the big reveal that wasn't such a reveal — on my side — to be honest."
},
{
  text: "Everytime that songs pops up we are forced to kiss, right ? To honor Eren and Levi\n— Oh damn ~ *loop*",
  author: "us",
  note: "A tiny bit drunk."
},
  {
  text: "I changed the locks, you little shit !",
  author: "me"
},
{
  text: "You are being a little fucker now, you know that right ?",
  author: "you",
  note: "Surprising right ? How you get when you're hot."
},
{
  text: "But at least I said some stuff to you, right ? It was hard because I was nervous but I felt I said little things.",
  author: "you",
  note: "Making sure the call was worth it, amor ?"
},
{
  text: "BUT THAT WASN'T AN EXCUSE TO BIZARRE THINGS HAPPEN TO ME ALL THE TIME",
  author: "you",
  note: "Caps locking me now, huh?"
},
{
  text: "I'm not mad at all. I feel rejected tho. I'm being unvalidated. My membership card has been revoked.",
  author: "me",
  note: "Being dramatic can't hurt sometimes"
},
{
  text: "I AM THE ONE HERE WHO LOVE MORE, LET'S START BY THAT.",
  author: "you",
  note: "I just laughed here."
},
{
  text: "Yeah, I'm cleaning. Don't tell me you're attracted to things like that too?",
  author: "you",
  note: "Yeah, what a surprise."
},
{
  text: "Now the apartment smells like watermelon. Now it smells like a 50 yo gay man's house",
  author: "you",
  note: "I'm still laughing."
},
{
  text: "Je te amo tellement !",
  author: "you"
},
{
  text: "Que horror.",
  author: "us"
}
];

let shuffledMemories = [];
let score = 0;
let round = 0;
let lastMemory = null;
const totalRounds = 10;

const generateBtn = document.getElementById("generate");
const result = document.getElementById("result");
const container = document.querySelector(".container");

const lastScore = localStorage.getItem("memoriesLastScore");

/* ---------------------------
   ÉCRAN INITIAL
--------------------------- */

showIntro();

function showIntro() {
  result.innerHTML = "";

  // supprimer ancien score affiché
  const existing = document.querySelector(".last-score");
  if (existing) existing.remove();

  if (lastScore) {
    const p = document.createElement("p");
    p.className = "last-score";
    p.textContent = `Last time, you remembered ${lastScore}.`;
    container.insertBefore(p, result);
  }

  generateBtn.style.display = "block";
  generateBtn.textContent = "Remember";
}

/* ---------------------------
   DÉMARRAGE QUIZ
--------------------------- */

generateBtn.addEventListener("click", startQuiz);

function startQuiz() {
  score = 0;
  round = 0;

  generateBtn.style.display = "none";

  do {
    shuffledMemories = [...memories]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalRounds);
  } while (
    lastMemory &&
    shuffledMemories[0] === lastMemory
  );

  nextMemory();
}

/* ---------------------------
   QUESTIONS
--------------------------- */

function nextMemory() {
  if (round >= shuffledMemories.length) {
    endQuiz();
    return;
  }

  const memory = shuffledMemories[round];
  lastMemory = memory;
  round++;

  result.innerHTML = `
    <p class="memory-question">Who said that?</p>

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
      handleAnswer(btn, memory.author, memory.note);
    });
  });
}

/* ---------------------------
   RÉPONSE
--------------------------- */

function handleAnswer(button, correctAuthor, note) {
  const choice = button.dataset.choice;
  const isCorrect = choice === correctAuthor;

  if (isCorrect) score++;

  /* feedback visuel */
  result.classList.add(isCorrect ? "correct" : "wrong");

  /* désactiver les boutons + révéler la bonne réponse */
  document.querySelectorAll(".choices button").forEach(b => {
    b.disabled = true;

    if (b.dataset.choice === correctAuthor) {
      b.classList.add("right-answer");
    }
  });

  /* afficher la note si elle existe */
  if (note) {
    const noteEl = document.createElement("p");
    noteEl.className = "memory-note";
    noteEl.textContent = note;
    result.appendChild(noteEl);
  }

  /* timing adaptatif */
  const delay = note ? 2200 : 1200;

  setTimeout(() => {
    result.classList.remove("correct", "wrong");
    nextMemory();
  }, delay);
}

/* ---------------------------
   FIN
--------------------------- */

function endQuiz() {
  const finalScore = `${score} / ${totalRounds}`;
  localStorage.setItem("memoriesLastScore", finalScore);

  result.innerHTML = `
    <p class="final-score">
      You remembered <strong>${score}</strong> out of ${totalRounds}.
    </p>
  `;

  generateBtn.style.display = "block";
  generateBtn.textContent = "Back to memories";
}
