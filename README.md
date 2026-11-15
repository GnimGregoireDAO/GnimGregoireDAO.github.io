# GnimGregoireDAO.github.io

Portfolio de Gnim Grégoire DAO, développeur full-stack junior : https://gnimgregoiredao.github.io/

Le site est statique (HTML, CSS et JavaScript, sans étape de build) et est publié par GitHub Pages à partir de la branche `main`.

## Structure

```
index.html              Contenu de la page (héros, fiches de projets, compétences, parcours, contact)
404.html                Page « Cette étoile n'est pas sur la carte »
favicon.svg
assets/css/main.css     Styles : jetons de couleur en tête de fichier, puis une section par partie de la page
assets/js/main.js       Ciel du héros (canvas), copies de la carte, surlignage et suivi de lecture
assets/fonts/           Archivo et Noto Serif (grec), auto-hébergées, licence SIL OFL
assets/img/             Captures des projets (WebP 1440×900), logo GDG, image de partage og.png
```

## Mettre le site à jour

1. Modifier `index.html`. Chaque projet est un `<article class="entry">` dans la section `#projets`.
2. Pour ajouter une étoile à la carte, copier un `<a class="star">` dans `#sky-map` (position dans `transform="translate(x y)"`), ajouter les `<line class="c-line">` qui la relient, puis la fiche et les entrées des listes `.chart-key` et `.finder-list`.
3. Les captures vont dans `assets/img/projects/`, en WebP 1440×900, avec un texte `alt` qui décrit ce qu'on voit.
4. Tester localement : `python -m http.server 8000` dans ce dossier, puis ouvrir http://localhost:8000.
5. Faire un commit et un push sur `main`. GitHub Pages publie en une à deux minutes.
