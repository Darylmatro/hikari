# Hikari 🎵

**Hikari** est une application web dédiée à la promotion des artistes et festivals de la région bretonne. Elle met en avant les talents locaux, les événements musicaux et permet aux utilisateurs de découvrir et réserver facilement.

## 🌟 Fonctionnalités

- 🎤 Affichage des artistes bretons avec description, chansons populaires et dates de concerts.
- 🎪 Présentation détaillée des festivals de musique en Bretagne.
- 🎨 Design moderne et responsive avec **mode sombre** intégré.
- 🧭 Navigation fluide entre les pages (`Accueil`, `Artistes`, `Événements`).

## 📁 Structure du projet

```bash
hikari/
├── public/
│   └── images/             # Images des artistes et événements
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Barre de navigation
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Artists.jsx
│   │   └── Events.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md

🚀 Lancer le projet localement
1. Cloner le dépôt
bash
Copier
Modifier
git clone https://github.com/marya213/hikari.git
cd hikari
2. Installer les dépendances
bash
Copier
Modifier
npm install
3. Lancer le serveur de développement
bash
Copier
Modifier
npm run dev
L'application sera disponible sur http://localhost:5173 (ou un autre port si celui-ci est déjà utilisé).

🛠️ Technologies utilisées
React (Vite)

React Router

Tailwind CSS

JavaScript (ES6+)
