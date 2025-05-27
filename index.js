const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bienvenue sur WebUnity App migrée sur Azure ! 🚀</h1>');
});

app.listen(port, () => {
  console.log(`App lancée sur http://localhost:${port}`);
});
