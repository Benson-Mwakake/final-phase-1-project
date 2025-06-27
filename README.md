# 🏁 F1 Driver Explorer

A simple Single Page Application that lets users explore Formula 1 drivers.

## 🌐 How It Works

- Uses a `db.json` file hosted on Render to serve driver data
- Frontend is built with HTML, CSS, and JavaScript
- Users can:
  - Search for drivers by name
  - Filter by team
  - Sort by wins or points
  - Click on a driver to view more info in a popup

## 🔧 Tech Used

- HTML
- CSS
- JavaScript
- JSON Server (hosted on Render)

## ▶️ Getting Started

1. Open `index.html` in your browser
2. Make sure your `index.js` fetches data from your Render URL like:
   ```js
   fetch('https://render-api-ie87.onrender.com/drivers')
📂 Files
index.html – The main webpage

style.css – The styling

index.js – JavaScript logic

db.json – F1 driver data (hosted on Render)

🪪 License
This project is open under the MIT License.

---