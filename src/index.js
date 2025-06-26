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

