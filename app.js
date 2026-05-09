const videos = [
  { title: "Construire une app en 15 minutes", channel: "Code Express", views: "120 k vues", date: "il y a 2 jours" },
  { title: "Les bases de JavaScript moderne", channel: "Dev Français", views: "89 k vues", date: "il y a 1 semaine" },
  { title: "Top 10 astuces CSS", channel: "FrontLab", views: "54 k vues", date: "il y a 3 jours" },
  { title: "Créer un portfolio pro", channel: "Studio Web", views: "33 k vues", date: "il y a 5 jours" },
  { title: "Node.js pour débutants", channel: "Backend Facile", views: "77 k vues", date: "il y a 9 jours" },
  { title: "Cloner YouTube (UI)", channel: "Design & Code", views: "140 k vues", date: "il y a 2 semaines" }
];

const grid = document.querySelector("#videoGrid");
const tpl = document.querySelector("#cardTemplate");
const search = document.querySelector("#search");

function render(list) {
  grid.innerHTML = "";
  for (const video of list) {
    const node = tpl.content.cloneNode(true);
    node.querySelector("h2").textContent = video.title;
    node.querySelector(".channel").textContent = video.channel;
    node.querySelector(".stats").textContent = `${video.views} • ${video.date}`;
    grid.appendChild(node);
  }
}

search.addEventListener("input", (event) => {
  const q = event.target.value.trim().toLowerCase();
  const filtered = videos.filter((video) =>
    [video.title, video.channel].some((value) => value.toLowerCase().includes(q))
  );
  render(filtered);
});

render(videos);
