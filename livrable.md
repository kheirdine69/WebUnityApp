# Rapport de TP – Migration Cloud Azure WebUnityApp

## 🚀 Objectif de la mission

Migrer une application Node.js vers Azure App Service avec :
- Déploiement automatique
- Exposition via HTTPS
- Monitoring (optionnel)
- Chiffrage estimatif

---

## 🧱 Étapes réalisées

### 1. Création d’une Web App Express

Une application minimale a été développée en Node.js + Express :

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bienvenue sur WebUnity App migrée sur Azure ! 🚀</h1>');
});

app.listen(port, () => {
  console.log(`App lancée sur http://localhost:${port}`);
});
```

---

### 2. Tests en local

- Lancement de l’app avec `npm install` + `npm start`
- Accès via : [http://localhost:3000](http://localhost:3000)

---

### 3. Déploiement sur Azure

- Création d'une App Service : `webunity-v2`
- Stack : **Node.js 18 LTS – Linux**
- Plan tarifaire : **F1 (gratuit)**
- Déploiement via **Zip Deploy**
- Lien final :  
  👉 [https://webunity-v2-exf3cubjhsdhh3hv.francecentral-01.azurewebsites.net/](https://webunity-v2-exf3cubjhsdhh3hv.francecentral-01.azurewebsites.net/)

---

### 4. HTTPS activé

- Activation automatique du certificat SSL via Azure
- Site sécurisé avec HTTPS

---

## 💰 Chiffrage estimatif (Azure Calculator)

| Ressource         | Type       | Coût mensuel | Coût annuel |
|-------------------|------------|--------------|-------------|
| App Service Plan  | F1 (gratuit) | 0 €         | 0 €         |
| Application Insights | Non utilisé ici | 0 €       | 0 €         |

**Total estimé : 0 € / an** (en plan gratuit)

---

## ✅ Conclusion

Cette migration montre la simplicité d’héberger une app Express sur Azure :
- 100% gérée dans le cloud
- Zéro maintenance physique
- HTTPS intégré
- Prêt pour CI/CD avec GitHub

https://github.com/kheirdine69/WebUnityApp
