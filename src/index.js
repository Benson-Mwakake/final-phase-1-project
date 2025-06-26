document.addEventListener('DOMContentLoaded', () => {
  fetchDrivers();

  document.getElementById('search-input').addEventListener('input', filterDrivers);
  document.getElementById('team-filter').addEventListener('change', filterDrivers);
  document.getElementById('sort-by').addEventListener('change', filterDrivers);
  document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
});

function fetchDrivers() {
  fetch('http://localhost:3000/drivers')
    .then(res => res.json())
    .then(data => {
      window.allDrivers = data;
      renderDrivers(data);
    });
}

function getTeamColor(team) {
  const teamColors = {
    "McLaren": "#ff8700",
    "Mercedes": "#00d7b6",
    "Ferrari": "#ed1131",
    "Red Bull Racing": "#2270e3",
    "Williams": "#eef1f7",
    "Haas": "#3d3e40",
    "Racing Bulls": "#2977de",
    "Alpine":"#db90b1",
    "Sauber": "#b6f3b7",
    "Aston Martin": "#229971",
  };
  return teamColors[team] || "#e10600";
}
