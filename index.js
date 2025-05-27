const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>WebUnity App</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.2rem;
        }
        .badge {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 8px 20px;
          margin-top: 20px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <h1>🚀 WebUnity App déployée sur Azure</h1>
      <p>Bienvenue ! Mon application mérite 20/20.</p>
      <div class="badge">Node.js + Express + Azure</div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App lancée sur http://localhost:${port}`);
});
