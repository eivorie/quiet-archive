function updateClocks() {
  const now = new Date();

  const paris = now.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit"
  });

  const ny = now.toLocaleTimeString("en-GB", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit"
  });

  const parisEl = document.getElementById("clock-paris");
  const nyEl = document.getElementById("clock-ny");

  if (parisEl) parisEl.textContent = `Paris ${paris}`;
  if (nyEl) nyEl.textContent = `New York ${ny}`;
}

updateClocks();
setInterval(updateClocks, 60000);
