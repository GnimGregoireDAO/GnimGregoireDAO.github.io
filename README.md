# Portfolio de Gnim Grégoire DAO

Portfolio React de Gnim Grégoire DAO : https://gnimgregoiredao.github.io/

## Développement

Node.js 24 et npm sont recommandés.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Le build Vite produit `dist/` et pré-rend la page en HTML : le contenu, les liens et les métadonnées restent accessibles sans JavaScript. React hydrate ensuite la page pour activer les interactions. La page `404.html`, les polices et les images sont copiées dans le build.

## Structure

- `src/Content.jsx` : structure de la page.
- `src/data.jsx` : données des étoiles, tracés et contenu des fiches de projets.
- `src/components.jsx` : carte, listes et fiches partagées.
- `src/App.jsx` et `src/sky.js` : interactions, suivi de lecture et dessin du ciel.
- `assets/css/main.css` : styles de la constellation ; `assets/fonts/` et `assets/img/` : ressources auto-hébergées.
- `index.html` : métadonnées et point d'entrée ; `404.html` : page introuvable.
- `scripts/prerender.js` : pré-rendu et copie des ressources dans `dist/`.

Pour ajouter un projet, compléter ses données dans `src/data.jsx`, ajouter sa fiche dans `src/Content.jsx`, ainsi que les tracés appropriés. Les captures restent dans `assets/img/projects/`, avec un texte alternatif descriptif.

## Publication sur GitHub Pages

Le site public utilise actuellement la publication legacy depuis la racine de `main`. **La source React ne peut pas être servie directement par ce mode.** Le workflow `.github/workflows/pages.yml` construit et publie `dist/` uniquement sur déclenchement manuel.

Après confirmation explicite de la publication :

1. Dans les paramètres Pages du dépôt, choisir **GitHub Actions** comme source avant de fusionner la source React dans `main` ; prévoir une possible interruption pendant la transition.
2. Fusionner les modifications, puis lancer manuellement le workflow **Deploy GitHub Pages** sur `main` depuis l'onglet Actions.
3. Vérifier le site, ses ressources et la page 404 après le déploiement.

Ne pas ajouter de `CNAME` : le site utilise `gnimgregoiredao.github.io`.
