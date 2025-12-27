document.addEventListener("DOMContentLoaded", () => {
  const threads = document.querySelectorAll(".text-thread");

  threads.forEach(thread => {
    const messages = Array.from(thread.querySelectorAll(".text"));

    // cacher tous les messages au départ
    messages.forEach(msg => {
      msg.style.opacity = "0";
      msg.style.transform = "translateY(6px)";
    });

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
}

    function nextMessage() {
      if (index >= messages.length) {
        hideTyping();
        return;
      }

      const msg = messages[index];
      const author = msg.dataset.author;

      showTyping(author);

      // durée de frappe (Levi hésite un peu plus)
      const typingDuration =
        author === "levi"
          ? 1800 + Math.random() * 1200
          : 1200 + Math.random() * 800;

      setTimeout(() => {
        hideTyping();

        setTimeout(() => {
          showMessage(msg);
          index++;

          // pause entre messages
          setTimeout(nextMessage, 900);
        }, 400);
      }, typingDuration);
    }

    // petit délai avant de commencer la conversation
    setTimeout(nextMessage, 800);
  });
});
