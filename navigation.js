/*
 * Menu principal — modifier les liens uniquement ici.
 *
 * Ajouter un module : ajouter une ligne dans modules.
 * Masquer un module partout : passer visible à false.
 * Les chemins partent de la racine du site, sans « / » initial.
 *
 * Sur une nouvelle page, conserver sa balise <nav class="nav"> et placer
 * dedans <script src="CHEMIN_VERS/navigation.js"></script>.
 * Exemple depuis ereri/ : <script src="../navigation.js"></script>.
 * Ne pas ajouter async, defer ou type="module" : le menu est créé sur place.
 */
(() => {
  const modules = [
    { label: "Home", path: "index.html", visible: true },
    { label: "Memories", path: "memories.html", visible: true },
    { label: "Ereri", path: "ereri/index.html", visible: true },
    { label: "Depending on the weather", path: "depending-on-the-weather/index.html", visible: true },
    { label: "Our Archive", path: "archive.html", visible: true },
    { label: "Sun & Moon", path: "sunmoon2/index.html", visible: true },
  ];

  const script = document.currentScript;
  const nav = script && script.parentElement;
  if (!nav || !nav.matches("nav.nav")) return;

  // Le fichier reste à la racine : les liens fonctionnent aussi dans les
  // sous-dossiers et lorsque GitHub Pages héberge le site sous /quiet-archive/.
  const root = new URL(".", script.src);
  const links = document.createDocumentFragment();

  for (const module of modules) {
    if (!module.visible) continue;
    const link = document.createElement("a");
    link.href = new URL(module.path, root).href;
    link.textContent = module.label;
    links.appendChild(link);
  }

  // Conserver le <nav> existant et ses classes pour garder les styles de
  // chaque section. Le script se retire avec l'ancien contenu du menu.
  nav.replaceChildren(links);
})();
