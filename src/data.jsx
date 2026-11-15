import React from "react";
export const projects = [
  { id: "bimy", greek: "α", name: "Bimy", className: "star star--variable", transform: "translate(720 150)", label: "Alpha, Bimy : projet solo en cours. Ouvrir la fiche", glyph: <>
            <circle className={"hit"} r={"44"}></circle>
            <circle className={"focus-ring"} r={"26"}></circle>
            <g className={"glyph"}><circle className={"ring"} r={"13"}></circle><circle className={"core"} r={"6.5"}></circle></g>
            <text className={"lbl-full"} x={"26"} y={"-14"}><tspan className={"greek"}>α</tspan> Bimy</text>
            <text className={"sub"} x={"26"} y={"8"}>Voyageurs · en cours</text>
            <text className={"lbl-short"} x={"30"} y={"-12"}><tspan className={"greek"}>α</tspan></text>
          </> },
  { id: "gdg", greek: "β", name: "GDG Productions", className: "star star--gold", transform: "translate(480 300)", label: "Bêta, GDG Productions : mon studio, projet solo. Ouvrir la fiche", glyph: <>
            <circle className={"hit"} r={"44"}></circle>
            <circle className={"focus-ring"} r={"26"}></circle>
            <g className={"glyph"}><circle className={"core"} r={"8"}></circle></g>
            <text className={"lbl-full"} x={"-24"} y={"-6"} textAnchor={"end"}><tspan className={"greek"}>β</tspan> GDG Productions</text>
            <text className={"sub"} x={"-24"} y={"16"} textAnchor={"end"}>Mon studio web</text>
            <text className={"lbl-short"} x={"-30"} y={"14"} textAnchor={"end"}><tspan className={"greek"}>β</tspan></text>
          </> },
  { id: "iga", greek: "γ", name: "IGA", className: "star star--variable", transform: "translate(860 400)", label: "Gamma, IGA : projet solo en cours. Ouvrir la fiche", glyph: <>
            <circle className={"hit"} r={"44"}></circle>
            <circle className={"focus-ring"} r={"26"}></circle>
            <g className={"glyph"}><circle className={"ring"} r={"13"}></circle><circle className={"core"} r={"6.5"}></circle></g>
            <text className={"lbl-full"} x={"0"} y={"42"} textAnchor={"middle"}><tspan className={"greek"}>γ</tspan> IGA</text>
            <text className={"sub"} x={"0"} y={"64"} textAnchor={"middle"}>Hydrogéologie · en cours</text>
            <text className={"lbl-short"} x={"0"} y={"66"} textAnchor={"middle"}><tspan className={"greek"}>γ</tspan></text>
          </> },
  { id: "kaypic", greek: "δ", name: "KayPic", className: "star star--double", transform: "translate(330 600)", label: "Delta, KayPic : projet d'équipe. Ouvrir la fiche", glyph: <>
            <circle className={"hit"} r={"44"}></circle>
            <circle className={"focus-ring"} r={"26"}></circle>
            <g className={"glyph"}><line className={"bar"} x1={"-16"} x2={"16"} y1={"0"} y2={"0"}></line><circle className={"core"} r={"6.5"}></circle></g>
            <text className={"lbl-full"} x={"0"} y={"40"} textAnchor={"middle"}><tspan className={"greek"}>δ</tspan> KayPic</text>
            <text className={"sub"} x={"0"} y={"62"} textAnchor={"middle"}>Gestion d'équipes · ASP.NET</text>
            <text className={"lbl-short"} x={"0"} y={"62"} textAnchor={"middle"}><tspan className={"greek"}>δ</tspan></text>
          </> },
  { id: "manara", greek: "ε", name: "CRM Manara", className: "star star--double", transform: "translate(560 500)", label: "Epsilon, CRM Manara : projet d'équipe. Ouvrir la fiche", glyph: <>
            <circle className={"hit"} r={"44"}></circle>
            <circle className={"focus-ring"} r={"26"}></circle>
            <g className={"glyph"}><line className={"bar"} x1={"-16"} x2={"16"} y1={"0"} y2={"0"}></line><circle className={"core"} r={"6.5"}></circle></g>
            <text className={"lbl-full"} x={"16"} y={"40"}><tspan className={"greek"}>ε</tspan> CRM Manara</text>
            <text className={"sub"} x={"16"} y={"62"}>CI/CD et contrôle d'accès</text>
            <text className={"lbl-short"} x={"18"} y={"62"}><tspan className={"greek"}>ε</tspan></text>
          </> },
  { id: "invite-me", greek: "ζ", name: "Invite-Me", className: "star star--double", transform: "translate(120 560)", label: "Zêta, Invite-Me : projet d'équipe. Ouvrir la fiche", glyph: <>
            <circle className={"hit"} r={"44"}></circle>
            <circle className={"focus-ring"} r={"26"}></circle>
            <g className={"glyph"}><line className={"bar"} x1={"-16"} x2={"16"} y1={"0"} y2={"0"}></line><circle className={"core"} r={"6.5"}></circle></g>
            <text className={"lbl-full"} x={"0"} y={"-48"} textAnchor={"middle"}><tspan className={"greek"}>ζ</tspan> Invite-Me</text>
            <text className={"sub"} x={"0"} y={"-26"} textAnchor={"middle"}>Événements · Android</text>
            <text className={"lbl-short"} x={"0"} y={"-34"} textAnchor={"middle"}><tspan className={"greek"}>ζ</tspan></text>
          </> },
];
export const lines = [
  {
    "class": "c-line",
    "data-a": "invite-me",
    "data-b": "kaypic",
    "x1": "120",
    "y1": "560",
    "x2": "330",
    "y2": "600",
    "pathlength": "1",
    "style": "--i:0"
  },
  {
    "class": "c-line",
    "data-a": "kaypic",
    "data-b": "manara",
    "x1": "330",
    "y1": "600",
    "x2": "560",
    "y2": "500",
    "pathlength": "1",
    "style": "--i:1"
  },
  {
    "class": "c-line",
    "data-a": "manara",
    "data-b": "gdg",
    "x1": "560",
    "y1": "500",
    "x2": "480",
    "y2": "300",
    "pathlength": "1",
    "style": "--i:2"
  },
  {
    "class": "c-line",
    "data-a": "gdg",
    "data-b": "bimy",
    "x1": "480",
    "y1": "300",
    "x2": "720",
    "y2": "150",
    "pathlength": "1",
    "style": "--i:3"
  },
  {
    "class": "c-line",
    "data-a": "bimy",
    "data-b": "iga",
    "x1": "720",
    "y1": "150",
    "x2": "860",
    "y2": "400",
    "pathlength": "1",
    "style": "--i:4"
  },
  {
    "class": "c-line",
    "data-a": "iga",
    "data-b": "manara",
    "x1": "860",
    "y1": "400",
    "x2": "560",
    "y2": "500",
    "pathlength": "1",
    "style": "--i:5"
  }
];
export const entries = {
  "bimy": (<article id={"bimy"} className={"entry entry--feature"} data-star={"bimy"} aria-labelledby={"bimy-title"}>
              <header className={"entry-head"}>
                <h3 id={"bimy-title"}><span className={"greek"}>α</span> Bimy</h3>
                <p className={"entry-tagline"}>Une communauté où voyageurs, expatriés, étudiants et nomades partagent ce qu'ils ont appris sur le terrain.</p>
                <ul className={"marks"} aria-label={"Repères du projet"}>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core"} r={"6"}></circle></svg>Solo</li>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"ring"} r={"10"}></circle><circle className={"core"} r={"5"}></circle></svg>En cours</li>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core core--gold"} r={"7"}></circle></svg>Produit GDG Productions</li>
                </ul>
              </header>

              <dl className={"facts"}>
                <dt>Contexte</dt>
                <dd>Visas, loyers, transport, erreurs de première semaine : quand on s'installe ailleurs, les meilleures réponses viennent de ceux qui sont passés avant. Bimy rassemble ces notes pour que le prochain départ commence avec des conseils concrets.</dd>
                <dt>Mon rôle</dt>
                <dd>Seul sur le projet : produit, design, frontend, backend et infrastructure. Bimy est développé sous la bannière de GDG Productions.</dd>
                <dt>Ce que j'ai fait</dt>
                <dd>
                  <ul className={"dots"}>
                    <li>Frontend en Astro 6 avec rendu serveur (SSR), préparé pour Cloudflare Pages, et proxy d'API vers le backend.</li>
                    <li>API REST en Spring Boot 4 et Java 21 avec PostgreSQL et JPA, organisée en monolithe modulaire MVC (modules auth, post, user et webhook).</li>
                    <li>Fil de notes avec étiquettes, votes (« sparks ») et commentaires, pages de destinations et rédaction de notes.</li>
                    <li>Refonte complète de l'interface en cours : accueil, destinations et page À propos.</li>
                  </ul>
                </dd>
                <dt>Technologies</dt>
                <dd className={"stack"}>Astro&nbsp;· TypeScript&nbsp;· Spring&nbsp;Boot&nbsp;· Java&nbsp;21&nbsp;· PostgreSQL&nbsp;· JPA&nbsp;· Cloudflare&nbsp;Pages</dd>
              </dl>

              <div className={"plates plates--bimy"}>
                <figure className={"plate plate--lead"}>
                  <a href={"assets/img/projects/bimy-home.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/bimy-home.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Accueil de Bimy : le titre « The pages no guidebook writes. » à côté d'une illustration de voyageurs penchés sur une carte."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. I</span> Accueil</figcaption>
                </figure>
                <figure className={"plate"}>
                  <a href={"assets/img/projects/bimy-destinations.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/bimy-destinations.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Section des destinations de Bimy : une carte postale illustrée de Paris et la liste des pays avec leur nombre de notes."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. II</span> Destinations</figcaption>
                </figure>
                <figure className={"plate"}>
                  <a href={"assets/img/projects/bimy-atlas.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/bimy-atlas.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Section « One notebook, every border. » de Bimy avec une carte du monde épinglée, puis les notes les plus utiles de la semaine."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. III</span> Carte et notes</figcaption>
                </figure>
                <figure className={"plate"}>
                  <a href={"assets/img/projects/bimy-about.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/bimy-about.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Page À propos de Bimy : « Move smarter. Ask someone who already did it. » au-dessus d'une illustration de carnet de voyage."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. IV</span> À propos</figcaption>
                </figure>
                <p className={"plates-note"}>Interface en développement local. Les contenus et les chiffres affichés sont des données de démonstration.</p>
              </div>

              <section className={"cap"} aria-labelledby={"bimy-cap"}>
                <h4 id={"bimy-cap"}>Aujourd'hui et cap</h4>
                <ol className={"orbit"}>
                  <li className={"orbit-now"}><span className={"orbit-when"}>Aujourd'hui</span><p>Prototype fonctionnel en développement, nouvelle interface en cours.</p></li>
                  <li><span className={"orbit-when"}>17 décembre 2026</span><p>Déploiement.</p></li>
                  <li><span className={"orbit-when"}>Prévu</span><p>Architecture frontend-first avec Astro et Supabase : base de données et routes protégées par rôle (RBAC).</p></li>
                  <li><span className={"orbit-when"}>Prévu</span><p>Publicités, et abonnement à 1 $ CA pour les retirer.</p></li>
                  <li><span className={"orbit-when"}>Ensuite</span><p>Une IA réservée aux abonnés pour poser des questions sur les publications.</p></li>
                </ol>
              </section>
            </article>),
  "gdg": (<article id={"gdg"} className={"entry entry--gdg"} data-star={"gdg"} aria-labelledby={"gdg-title"}>
              <header className={"entry-head"}>
                <img className={"gdg-logo"} src={"assets/img/gdg-logo.webp"} width={"128"} height={"192"} alt={"Logo de GDG Productions"} />
                <h3 id={"gdg-title"}><span className={"greek"}>β</span> GDG Productions</h3>
                <p className={"entry-tagline"}>Le studio web indépendant que j'ai fondé à Montréal.</p>
                <ul className={"marks"} aria-label={"Repères du projet"}>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core core--gold"} r={"7"}></circle></svg>Fondateur</li>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core"} r={"6"}></circle></svg>Solo</li>
                  <li>En ligne</li>
                </ul>
              </header>

              <blockquote className={"gdg-quote"}><p>Du charbon brut au diamant stellaire.</p><footer>Le récit de marque de GDG Productions, sous le signe d'Orion</footer></blockquote>

              <dl className={"facts"}>
                <dt>Contexte</dt>
                <dd>Le site du studio devait présenter l'offre de GDG Productions, porter son récit de marque et rester conforme aux règles québécoises sur les renseignements personnels.</dd>
                <dt>Mon rôle</dt>
                <dd>Fondateur. Conception, design et développement du site.</dd>
                <dt>Ce que j'ai fait</dt>
                <dd>
                  <ul className={"dots"}>
                    <li>Site en Astro 5 et TypeScript, animé au défilement avec GSAP et ScrollTrigger.</li>
                    <li>Formulaire de contact relié à une fonction serverless (Nodemailer) hébergée sur Vercel.</li>
                    <li>Gestionnaire de consentement aux témoins conforme à la Loi 25.</li>
                    <li>Référencement technique : données structurées JSON-LD, Open Graph et sitemap.</li>
                  </ul>
                </dd>
                <dt>État</dt>
                <dd>En ligne sur gdgproductions.ca.</dd>
                <dt>Technologies</dt>
                <dd className={"stack"}>Astro&nbsp;· TypeScript&nbsp;· GSAP&nbsp;· Node.js&nbsp;serverless&nbsp;· Nodemailer&nbsp;· Vercel</dd>
              </dl>

              <p className={"links"}><a className={"ext"} href={"https://gdgproductions.ca"} target={"_blank"} rel={"noopener"}>Visiter gdgproductions.ca<span className={"sr-only"}> (nouvel onglet)</span></a></p>

              <div className={"plates plates--single"}>
                <figure className={"plate"}>
                  <a href={"assets/img/projects/gdg-home.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/gdg-home.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Accueil de gdgproductions.ca : « Votre entreprise mérite sa place au premier plan. » en crème et or sur fond brun sombre, à côté d'une illustration de diamant brut."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. V</span> gdgproductions.ca</figcaption>
                </figure>
              </div>
            </article>),
  "iga": (<article id={"iga"} className={"entry"} data-star={"iga"} aria-labelledby={"iga-title"}>
              <header className={"entry-head"}>
                <h3 id={"iga-title"}><span className={"greek"}>γ</span> IGA</h3>
                <p className={"entry-tagline"}>Site vitrine et interface d'administration pour une firme de conseil en hydrogéologie.</p>
                <ul className={"marks"} aria-label={"Repères du projet"}>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core"} r={"6"}></circle></svg>Solo</li>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"ring"} r={"10"}></circle><circle className={"core"} r={"5"}></circle></svg>En cours</li>
                  <li>Version actuelle en ligne</li>
                </ul>
              </header>

              <dl className={"facts"}>
                <dt>Contexte</dt>
                <dd>Le site présente les expertises et les projets d'une firme de conseil en hydrogéologie. Une interface d'administration permet de gérer ces projets sans toucher au code.</dd>
                <dt>Mon rôle</dt>
                <dd>Développement complet, frontend et backend, seul.</dd>
                <dt>Ce que j'ai fait</dt>
                <dd>
                  <ul className={"dots"}>
                    <li>Frontend Angular 16 en composants standalone, publié sur Firebase Hosting.</li>
                    <li>API Spring Boot 3.1 sécurisée avec Spring Security et JWT, base H2 et PostgreSQL.</li>
                    <li>Interface d'administration avec connexion pour gérer les projets et leur statut : Planification, En cours, Terminé.</li>
                  </ul>
                </dd>
                <dt>État</dt>
                <dd>En cours de développement. La version actuelle est en ligne. Les chiffres affichés sur le site sont ceux du client.</dd>
                <dt>Technologies</dt>
                <dd className={"stack"}>Angular&nbsp;16&nbsp;· TypeScript&nbsp;· Spring&nbsp;Boot&nbsp;3.1&nbsp;· Spring&nbsp;Security&nbsp;· JWT&nbsp;· PostgreSQL&nbsp;· Firebase</dd>
              </dl>

              <p className={"links"}>
                <a className={"ext"} href={"https://frontentiga.web.app/"} target={"_blank"} rel={"noopener"}>Voir la version en ligne<span className={"sr-only"}> (nouvel onglet)</span></a>
                <a className={"ext"} href={"https://github.com/GnimGregoireDAO/IGA"} target={"_blank"} rel={"noopener"}>Code source sur GitHub<span className={"sr-only"}> (nouvel onglet)</span></a>
              </p>

              <div className={"plates plates--pair"}>
                <figure className={"plate"}>
                  <a href={"assets/img/projects/iga-home.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/iga-home.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Accueil du site IGA : « Experts en hydrogéologie depuis 15 ans » sur un dégradé bleu et vert."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. VI</span> Accueil</figcaption>
                </figure>
                <figure className={"plate"}>
                  <a href={"assets/img/projects/iga-expertises.webp"} target={"_blank"} rel={"noopener"}><img src={"assets/img/projects/iga-expertises.webp"} width={"1440"} height={"900"} loading={"lazy"} decoding={"async"} alt={"Section « Nos domaines d'expertise » du site IGA : hydrogéologie, forages et captages, analyses et contrôles."} /><span className={"sr-only"}> (agrandir dans un nouvel onglet)</span></a>
                  <figcaption><span className={"plate-no"}>Pl. VII</span> Expertises</figcaption>
                </figure>
              </div>
            </article>),
  "kaypic": (<article id={"kaypic"} className={"entry entry--team"} data-star={"kaypic"} aria-labelledby={"kaypic-title"}>
              <header className={"entry-head"}>
                <h4 id={"kaypic-title"}><span className={"greek"}>δ</span> KayPic</h4>
                <p className={"entry-tagline"}>Plateforme web de gestion d'équipes, avec un espace pour chaque rôle : parent, joueur et gérant d'équipe.</p>
                <ul className={"marks"} aria-label={"Repères du projet"}>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><line className={"bar"} x1={"-15"} x2={"15"}></line><circle className={"core"} r={"6"}></circle></svg>Équipe de 3</li>
                  <li>Cégep de Rosemont</li>
                </ul>
              </header>
              <dl className={"facts"}>
                <dt>Équipe</dt>
                <dd>Grégoire (moi), Emmanuel et Sami.</dd>
                <dt>Mon rôle</dt>
                <dd>J'ai touché à toutes les couches du projet : architecture, authentification, page d'accueil et intégration continue.</dd>
                <dt>Ce que j'ai fait</dt>
                <dd>
                  <ul className={"dots"}>
                    <li>Architecture en monolithe modulaire MVC.</li>
                    <li>ASP.NET Core Identity : courriel confirmé obligatoire, double authentification par application, verrouillage après 5 essais et connexion Google.</li>
                    <li>Page d'accueil de l'application.</li>
                    <li>Pipeline CI/CD sur le GitLab du Cégep.</li>
                  </ul>
                </dd>
                <dt>L'application</dt>
                <dd>Communication en temps réel avec SignalR, envoi de courriels avec SendGrid, tableaux de bord selon le rôle et interface en français canadien.</dd>
                <dt>Technologies</dt>
                <dd className={"stack"}>ASP.NET&nbsp;Core&nbsp;9&nbsp;· C#&nbsp;· Entity&nbsp;Framework&nbsp;Core&nbsp;· SQL&nbsp;Server&nbsp;· SignalR&nbsp;· SendGrid</dd>
              </dl>
              <p className={"links"}><a className={"ext"} href={"https://github.com/GnimGregoireDAO/Kaypic-Gregoire-Emmanuel-Sami"} target={"_blank"} rel={"noopener"}>Code source sur GitHub<span className={"sr-only"}> (nouvel onglet)</span></a></p>
            </article>),
  "manara": (<article id={"manara"} className={"entry entry--team"} data-star={"manara"} aria-labelledby={"manara-title"}>
              <header className={"entry-head"}>
                <h4 id={"manara-title"}><span className={"greek"}>ε</span> CRM Manara</h4>
                <p className={"entry-tagline"}>Un CRM réalisé en équipe, avec des accès distincts pour les administrateurs, les parents et les animateurs.</p>
                <ul className={"marks"} aria-label={"Repères du projet"}>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><line className={"bar"} x1={"-15"} x2={"15"}></line><circle className={"core"} r={"6"}></circle></svg>Équipe de 4</li>
                </ul>
              </header>
              <dl className={"facts"}>
                <dt>Équipe</dt>
                <dd>Tristan, Kenny, Emmanuel et moi. Les fonctionnalités métier ont surtout été développées par mes coéquipiers.</dd>
                <dt>Mon rôle</dt>
                <dd>Intégration continue, authentification et contrôle d'accès par rôle.</dd>
                <dt>Ce que j'ai fait</dt>
                <dd>
                  <ul className={"dots"}>
                    <li>Pipeline GitLab CI/CD : analyse SAST, détection de secrets, <code>mvn verify</code> avec rapports JUnit, construction du JAR, puis image Docker étiquetée (SHA du commit et <code>latest</code>) poussée vers le registre GitLab à chaque push sur <code>main</code>.</li>
                    <li>Authentification avec Spring Security et connexion OAuth2.</li>
                    <li>RBAC avec les rôles ADMIN, PARENT et ANIMATEUR, appliqué dans l'API et par un guard Angular sur les routes.</li>
                  </ul>
                </dd>
                <dt>Technologies</dt>
                <dd className={"stack"}>Angular&nbsp;21&nbsp;· Spring&nbsp;Boot&nbsp;4&nbsp;· Java&nbsp;21&nbsp;· Spring&nbsp;Security&nbsp;· OAuth2&nbsp;· MySQL&nbsp;· Docker&nbsp;· GitLab&nbsp;CI/CD</dd>
              </dl>
              <p className={"links"}><a className={"ext"} href={"https://github.com/GnimGregoireDAO/CRM-Manara"} target={"_blank"} rel={"noopener"}>Code source sur GitHub<span className={"sr-only"}> (nouvel onglet)</span></a></p>
            </article>),
  "invite-me": (<article id={"invite-me"} className={"entry entry--team"} data-star={"invite-me"} aria-labelledby={"invite-title"}>
              <header className={"entry-head"}>
                <h4 id={"invite-title"}><span className={"greek"}>ζ</span> Invite-Me</h4>
                <p className={"entry-tagline"}>Application Android pour organiser des événements, aussi appelée GetTogether.</p>
                <ul className={"marks"} aria-label={"Repères du projet"}>
                  <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><line className={"bar"} x1={"-15"} x2={"15"}></line><circle className={"core"} r={"6"}></circle></svg>Équipe de 3</li>
                  <li>Android</li>
                </ul>
              </header>
              <dl className={"facts"}>
                <dt>Équipe</dt>
                <dd>L'équipe « Geai Bleu » : Tsafack Joël Bertrand, Niko Daryl Lucienne et moi.</dd>
                <dt>Mon rôle</dt>
                <dd>Les écrans de consultation et de modification des événements.</dd>
                <dt>Ce que j'ai fait</dt>
                <dd>
                  <ul className={"dots"}>
                    <li>Vue détaillée et modification d'un événement.</li>
                    <li>Désabonnement d'un événement.</li>
                    <li>Page « Liste des événements » : fragment avec RecyclerView.</li>
                    <li>Modèle de données Lieu.</li>
                  </ul>
                </dd>
                <dt>L'application</dt>
                <dd>Création, consultation, modification et suppression d'événements, authentification locale, interface en français, anglais et espagnol, mode sombre.</dd>
                <dt>Technologies</dt>
                <dd className={"stack"}>Kotlin&nbsp;· Android&nbsp;SDK&nbsp;35&nbsp;· MVVM&nbsp;· Room&nbsp;· Coroutines</dd>
              </dl>
              <p className={"links"}><a className={"ext"} href={"https://github.com/GnimGregoireDAO/Invite-Me"} target={"_blank"} rel={"noopener"}>Code source sur GitHub<span className={"sr-only"}> (nouvel onglet)</span></a></p>
            </article>),
};
