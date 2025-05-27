const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>WebUnity App</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1f4037, #99f2c8);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          text-align: center;
          animation: fadeIn 2s ease-in;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 0.2rem;
        }

        p {
          font-size: 1.2rem;
          margin: 0.5rem 0;
        }

        .badge {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          padding: 10px 25px;
          margin-top: 20px;
          font-weight: bold;
        }

        .dark-toggle {
          margin-top: 30px;
          padding: 10px 20px;
          font-weight: bold;
          background-color: white;
          color: black;
          border-radius: 8px;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <h1>🚀 WebUnity sur Azure</h1>
      <p>Bienvenue, je mérite 20/20 non ?!</p>
      <p><strong>Heure actuelle :</strong> <span id="clock"></span></p>
      <div class="badge">Node.js + Express + JS temps réel</div>
      <button class="dark-toggle" onclick="toggleDark()">🎨 Activer le mode sombre</button>

      <script>
        function updateClock() {
          const now = new Date();
          const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
          document.getElementById('clock').textContent = now.toLocaleTimeString('fr-FR', options);
        }
        setInterval(updateClock, 1000);
        updateClock();

        function toggleDark() {
          const isDark = document.body.style.background.includes('black');
          document.body.style.background = isDark
            ? "linear-gradient(135deg, #1f4037, #99f2c8)"
            : "black";
          document.body.style.color = isDark ? "white" : "lightgreen";
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App lancée sur http://localhost:${port}`);
});
