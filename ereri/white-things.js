document.addEventListener("DOMContentLoaded", () => {
  const threads = document.querySelectorAll(".text-thread");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startThread(entry.target);
          observer.unobserve(entry.target); // une seule fois
        }
      });
    },
    {
      threshold: 0.35 // 35% visible = lecture confortable
    }
  );

  threads.forEach(thread => observer.observe(thread));

  function startThread(thread) {
    const messages = Array.from(thread.querySelectorAll(".text"));
    let index = 0;

    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.style.fontSize = "0.75rem";
    typingIndicator.style.fontStyle = "italic";
    typingIndicator.style.letterSpacing = "0.04em";
    typingIndicator.style.marginBottom = "6px";
    typingIndicator.style.color = "rgba(200,215,210,0.45)";
    typingIndicator.style.opacity = "0";
    typingIndicator.style.transition = "opacity 0.4s ease";

    thread.prepend(typingIndicator);

    function showTyping(author) {
      typingIndicator.textContent =
        author === "eren"
          ? "Eren ♥ is typing…"
          : "Levi is typing…";
      typingIndicator.style.opacity = "1";
    }

    function hideTyping() {
      typingIndicator.style.opacity = "0";
    }

    function showMessage(msg) {
      msg.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      msg.style.opacity = "1";
      msg.style.transform = "translateY(0)";
      msg.style.pointerEvents = "auto";
    }

    function nextMessage() {
      if (index >= messages.length) {
        hideTyping();
        return;
      }

      const msg = messages[index];
      const author = msg.dataset.author;

      showTyping(author);

      const typingDuration =
        author === "levi"
          ? 2200 + Math.random() * 1600
          : 1400 + Math.random() * 1000;

      setTimeout(() => {
        hideTyping();

        setTimeout(() => {
          showMessage(msg);
          index++;
          setTimeout(nextMessage, 900);
        }, 400);
      }, typingDuration);
    }

    // petit temps de respiration après l’arrivée à l’écran
    setTimeout(nextMessage, 600);
  }
});
