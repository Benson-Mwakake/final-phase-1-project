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
  fetch('https://render-api-ie87.onrender.com/drivers')
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

function renderDrivers(drivers) {
    const container = document.getElementById("driver-container");
    container.innerHTML = '';

    drivers.forEach(driver => {
        const card = document.createElement('div');
        card.className = "driver-card";
        card.style.borderLeft = `5px solid ${getTeamColor(driver.team)}`;

        card.innerHTML = `
        <img src="${driver.image}" alt="${driver.name}">
        <div class="extra">
          <p>${driver.name}</p>
          <p><strong>Team:</strong> ${driver.team}</p>
          <p><strong>points:</strong> ${driver.points}</p>
          <p><strong>Wins:</strong> ${driver.wins}</p>
          <p><strong>Nationality:</strong> ${driver.nationality}</p>
          <button class="toggle-stats">More info</button>
        </div>
        `;

        card.querySelector('.toggle-stats').addEventListener('click', () => {
      openModal(driver);
    });

    container.appendChild(card);
  });

  function openModal(d){
    document.getElementById('modal-img').src = d.image;
    document.getElementById('modal-name').textContent = d.name;
    document.getElementById('modal-team').textContent = d.team;
    document.getElementById('modal-nationality').textContent = d.nationality;
    document.getElementById('modal-points').textContent = d.points;
    document.getElementById('modal-wins').textContent = d.wins;
    document.getElementById('modal-championships').textContent = d.championships;
    document.getElementById('modal-bio').textContent = d.bio || 'No biography available.';
    document.getElementById('modal-link').href = d.link || "#";
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal-close').onclick = () => document.getElementById('modal').classList.add('hidden');
  }
}

function filterDrivers() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const team = document.getElementById('team-filter').value;
  const sortBy = document.getElementById('sort-by').value;

  let filtered = window.allDrivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm) &&
    (team === '' || driver.team === team)
  );

  if (sortBy === "wins") {
    filtered.sort((a, b) => b.wins - a.wins);
  } else if (sortBy === "points") {
    filtered.sort((a, b) => b.points - a.points);
  }

  renderDrivers(filtered);
}