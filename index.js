const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const currentTime = new Date().toLocaleString('fr-FR');
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
      <p>Bienvenue, est ce que je mérite 20/20 ? Je pense que oui</p>
      <p><strong>Heure serveur actuelle :</strong> ${currentTime}</p>
      <div class="badge">Node.js + Express + CSS animé</div>
      <button class="dark-toggle" onclick="toggleDark()">🎨 Activer le mode sombre</button>

      <script>
        function toggleDark() {
          document.body.style.background = document.body.style.background.includes('black')
            ? "linear-gradient(135deg, #1f4037,rgb(53, 75, 65))"
            : "black";
          document.body.style.color = document.body.style.color === 'white' ? 'lightgreen' : 'white';
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App lancée sur http://localhost:${port}`);
});
