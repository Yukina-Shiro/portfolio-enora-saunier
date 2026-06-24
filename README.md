# Portfolio - Enora Saunier

Bienvenue sur le dépôt GitHub de mon portfolio personnel. Ce site vitrine présente mon parcours, mes compétences techniques et les projets réalisés durant mon **BUT Informatique** à l'IUT Nice Côte d'Azur.

🔗 **Voir le site en ligne :** [https://portfolio-enora-saunier.vercel.app/](https://portfolio-enora-saunier.vercel.app/)

---

## 🛠 Technologies Utilisées

Ce projet a été conçu sans framework lourd afin de maîtriser les fondamentaux du développement web et d'assurer une performance optimale.

- **HTML5** : Structure sémantique et accessible.
- **CSS3** :
  - Utilisation des variables CSS (`:root`).
  - Mise en page moderne avec **Flexbox** et **Grid**.
  - Design **Responsive** (Mobile First & Desktop).
  - Effets visuels modernes (dégradés dynamiques sur texte et SVG, animations de survol).
- **JavaScript (Vanilla)** : Gestion du menu de navigation mobile (Burger Menu) et **système de filtrage dynamique** des projets.
- **SVG** : Icônes vectorielles intégrées directement dans le code pour la légèreté.

---

## 📂 Architecture du Projet

Le site est structuré de manière modulaire pour faciliter la maintenance et l'ajout de nouvelles pages.

```text
/ (Racine)
│
├── index.html           # Page d'accueil (Hero section)
├── about.html           # À propos (Parcours, Timeline)
├── skills.html          # Compétences techniques (Badges)
├── projects.html        # Galerie principale des projets
├── hobbies.html         # Sommaire des passions
├── contact.html         # Page de contact
├── cv.html              # Affichage du CV PDF
│
├── assets/              # Ressources statiques
│   ├── img/             # Images, photos et bannières
│   └── docs/            # CV au format PDF
│
├── css/
│   ├── style.css        # Feuille de style centralisée
│   └── cv.css           # Feuille de style dédiée à la page CV
│
├── js/
│   └── script.js        # Scripts d'interactivité (Menu et Filtrage)
│
├── projects/            # Pages détaillées des projets
│   ├── minecraft.html
│   ├── mediatheque.html
│   ├── game-of-life.html
│   ├── gamehub.html
│   ├── phoeneuf.html
│   ├── fut_anime.html
│   ├── edt.html
│   ├── vm-linux.html
│   └── bitcoin.html
│
└── hobbies/             # Pages détaillées des passions
    ├── japon.html
    ├── arts.html
    ├── jeux-video.html
    └── nature.html
```

## ✨ Fonctionnalités Clés

1. Filtrage Dynamique : Tri interactif des projets par catégories (Java, Web, C, etc.) avec animations de transition fluides.

2. **Navigation Fluide** : Menu "Sticky" (fixe en haut) avec indicateurs visuels de la page active et menu burger animé pour les écrans mobiles.

3. **Mise en page Adaptative** : Le site s'adapte à toutes les tailles d'écran (Smartphone, Tablette, Desktop) grâce à CSS Grid et Flexbox.

4. **Galeries Interactives** :
   - Système de cartes pour les projets et passions avec effets d'élévation au survol.
   - Gestion des images avec placeholders (fallback) en cas d'erreur de chargement.

5. **Code Propre** : Séparation stricte du contenu (HTML), du style (CSS) et de l'interactivité (JS).

## 🚀 Installation Locale

Si vous souhaitez cloner ce projet pour le tester localement :

1. **Cloner le dépôt :**

```
git clone https://github.com/Yukina-Shiro/portfolio-enora-saunier.git
```

2. Ouvrir le dossier :

```
cd portfolio-enora-saunier
```

3. Lancer le site :

Ouvrez simplement le fichier `index.html` dans votre navigateur préféré.

## 👤 Auteur

Enora Saunier Étudiante en BUT Informatique (2e année) - IUT Nice Côte d'Azur.

- **GitHub** : [@Yukina-Shiro](https://github.com/Yukina-Shiro/)
- **LinkedIn** : [Enora Saunier](https://www.linkedin.com/in/enora-saunier/)

---

_Dernière mise à jour : Juin 2026_
