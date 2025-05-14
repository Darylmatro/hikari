# Hikari 🎵

**Hikari** est une application web dédiée à la promotion des artistes et festivals de la région bretonne. Elle met en avant les talents locaux, les événements musicaux et permet aux utilisateurs de découvrir et réserver facilement.

## 🌟 Fonctionnalités

- 🎤 Affichage des artistes bretons avec description, chansons populaires et dates de concerts.
- 🎪 Présentation détaillée des festivals de musique en Bretagne.
- 🌙 Interface en **mode sombre** pour un meilleur confort visuel.
- 🧭 Navigation fluide entre les pages (`Accueil`, `Artistes`, `Événements`).

## 📁 Structure du projet

hikari/
├── public/
│ └── images/ # Images des artistes et événements
├── src/
│ ├── components/
│ │ └── Navbar.jsx # Barre de navigation
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Artists.jsx
│ │ └── Events.jsx
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── README.md

bash
Copier
Modifier

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/marya213/hikari.git
cd hikari
2. Installer les dépendances
bash
Copier
Modifier
npm install
3. Lancer l’application
bash
Copier
Modifier
npm run dev
Accède ensuite à l’interface via http://localhost:5173.

🛠️ Technologies utilisées
React (Vite)

React Router DOM

Tailwind CSS

JavaScript (ES6+)
