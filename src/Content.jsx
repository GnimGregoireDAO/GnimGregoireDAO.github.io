import React from "react";
import { StarMap, StarList, ProjectEntry } from "./components.jsx";
export default function Content({ scrolled, heroInteraction, finderInteraction, currentStar, currentSection }) {
  return <>
  <a className={"skip"} href={"#projets"}>Aller aux projets</a>

  <header className={scrolled ? "topbar is-scrolled" : "topbar"}>
    <a className={"brand"} href={"#carte"}>
      <svg className={"brand-mark"} viewBox={"-16 -16 32 32"} aria-hidden={"true"}><circle r={"11"} className={"brand-ring"}></circle><circle r={"5"} className={"brand-core"}></circle></svg>
      <span>G. G. DAO</span>
    </a>
    <nav className={"nav"} aria-label={"Navigation principale"}>
      <ul>
        <li><a href={"#projets"} aria-current={currentSection === "projets" ? "true" : undefined}>Projets</a></li>
        <li><a href={"#competences"} aria-current={currentSection === "competences" ? "true" : undefined}>Compétences</a></li>
        <li><a href={"#parcours"} aria-current={currentSection === "parcours" ? "true" : undefined}>Parcours</a></li>
        <li><a className={"nav-contact"} href={"#contact"} aria-current={currentSection === "contact" ? "true" : undefined}>Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id={"carte"} className={"chart"} aria-labelledby={"hero-title"}>
      <canvas className={"sky"} aria-hidden={"true"}></canvas>
      <div className={"frame"} aria-hidden={"true"}></div>

      <div className={"hero-copy"}>
        <h1 id={"hero-title"}><span>Gnim</span> <span>Grégoire</span> <span className={"h1-last"}>DAO</span></h1>
        <p className={"hero-role"}><span>Développeur <span className={"nowrap"}>full-stack junior</span></span> <span>Web&nbsp;· Mobile&nbsp;· DevOps</span></p>
        <p className={"hero-lead"}>J'analyse les besoins, je conçois des solutions performantes et j'accompagne les personnes qui les utilisent. De l'interface au pipeline de déploiement, j'aime comprendre toute la chaîne.</p>
        <p className={"hero-meta"}>Terrebonne (QC)&nbsp;· Étudiant au Cégep de Rosemont&nbsp;· Fondateur de <a href={"https://gdgproductions.ca"} target={"_blank"} rel={"noopener"}>GDG&nbsp;Productions<span className={"sr-only"}> (nouvel onglet)</span></a></p>
        <div className={"hero-actions"}>
          <a className={"btn btn-primary"} href={"#projets"}>Explorer les projets</a>
          <a className={"btn btn-ghost"} href={"#contact"}>Me contacter</a>
        </div>
      </div>

      <figure className={"constellation"}>
        <StarMap variant="hero" interaction={heroInteraction} />
        <figcaption className={"chart-title"}>Constellation DAO&nbsp;· carte des projets<span className={"chart-hint"}>Sélectionnez une étoile pour ouvrir sa fiche</span></figcaption>
      </figure>

      <StarList variant="hero" interaction={heroInteraction} current={currentStar} />

      <aside className={"legend"} aria-labelledby={"legend-title"}>
        <h2 id={"legend-title"} className={"legend-title"}>Légende</h2>
        <ul>
          <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core"} r={"6"}></circle></svg>Projet solo</li>
          <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><line className={"bar"} x1={"-15"} x2={"15"}></line><circle className={"core"} r={"6"}></circle></svg>Étoile multiple : projet d'équipe</li>
          <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"ring"} r={"10"}></circle><circle className={"core"} r={"5"}></circle></svg>Étoile variable : en cours</li>
          <li><svg viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core core--gold"} r={"7"}></circle></svg>Mon studio</li>
        </ul>
      </aside>
    </section>

    <section id={"projets"} className={"atlas"} aria-labelledby={"projets-title"}>
      <div className={"wrap"}>
        <div className={"atlas-head"}>
          <h2 id={"projets-title"}>Fiches d'étoiles</h2>
          <p className={"section-lead"}>Six projets, du produit que je construis seul aux applications réalisées en équipe. Pour chacun : le contexte, mon rôle, ce que j'ai fait et où en est le projet.</p>
        </div>

        <div className={"atlas-body"}>
          <aside className={"finder"} aria-label={"Repérage dans les fiches"}>
            <div className="finder-map"><StarMap variant="finder" interaction={finderInteraction} current={currentStar} /></div>
            <StarList variant="finder" interaction={finderInteraction} current={currentStar} />
          </aside>

          <div className={"entries"}>
            <ProjectEntry id="bimy" />

            <ProjectEntry id="gdg" />

            <ProjectEntry id="iga" />

            <section className={"multiples"} aria-labelledby={"multiples-title"}>
              <svg className={"multiples-mark"} viewBox={"-30 -18 60 36"} aria-hidden={"true"}><line className={"bar"} x1={"-26"} x2={"26"}></line><circle className={"core"} r={"10"}></circle></svg>
              <div>
                <h3 id={"multiples-title"}>Étoiles multiples</h3>
                <p>Sur une carte du ciel, une étoile multiple est un système de plusieurs astres. Voici trois projets réalisés en équipe, avec ce qui était ma part.</p>
              </div>
            </section>

            <ProjectEntry id="kaypic" />

            <ProjectEntry id="manara" />

            <ProjectEntry id="invite-me" />
          </div>
        </div>
      </div>
    </section>

    <section id={"competences"} className={"catalog-sec"} aria-labelledby={"competences-title"}>
      <div className={"wrap"}>
        <h2 id={"competences-title"}>Catalogue des compétences</h2>
        <p className={"section-lead"}>Les langages, outils et méthodes que j'utilise dans mes projets et mes cours.</p>
        <table className={"catalog"}>
          <caption className={"sr-only"}>Compétences techniques par domaine</caption>
          <thead><tr><th scope={"col"}>Domaine</th><th scope={"col"}>Outils et notions</th></tr></thead>
          <tbody>
            <tr><th scope={"row"}>Langages</th><td><ul className={"tokens"}><li>Java</li><li>Kotlin</li><li>C#</li><li>TypeScript</li><li>JavaScript</li><li>Python</li><li>SQL</li></ul></td></tr>
            <tr><th scope={"row"}>Frameworks</th><td><ul className={"tokens"}><li>ASP.NET Core</li><li>Spring Boot</li><li>Angular</li><li>React</li><li>Astro</li><li>Bootstrap</li><li>GSAP</li></ul></td></tr>
            <tr><th scope={"row"}>Mobile</th><td><ul className={"tokens"}><li>Android SDK</li><li>Android Studio</li><li>MVVM</li><li>Room (SQLite)</li><li>Navigation Component</li><li>Material Design</li><li>Coroutines</li></ul></td></tr>
            <tr><th scope={"row"}>Web</th><td><ul className={"tokens"}><li>HTML</li><li>CSS</li><li>JavaScript</li><li>PHP</li><li>Node.js serverless</li></ul></td></tr>
            <tr><th scope={"row"}>Bases de données</th><td><ul className={"tokens"}><li>SQL Server</li><li>MySQL</li><li>PostgreSQL</li><li>SQLite</li></ul></td></tr>
            <tr><th scope={"row"}>DevOps</th><td><ul className={"tokens"}><li>Git</li><li>GitLab CI/CD</li><li>Docker</li><li>Vercel</li><li>Firebase Hosting</li><li>pnpm</li></ul></td></tr>
            <tr><th scope={"row"}>Sécurité</th><td><ul className={"tokens"}><li>ASP.NET Core Identity</li><li>Spring Security</li><li>OAuth2</li><li>JWT</li><li>RBAC</li></ul></td></tr>
            <tr><th scope={"row"}>Méthodes</th><td><ul className={"tokens"}><li>Agile</li><li>MVC</li><li>REST</li><li>CI/CD</li></ul></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id={"parcours"} className={"journey"} aria-labelledby={"parcours-title"}>
      <div className={"wrap"}>
        <h2 id={"parcours-title"}>Trajectoire</h2>
        <p className={"section-lead"}>Du secondaire au Togo à la technique en informatique à Montréal.</p>
        <div className={"arc"}>
          <svg className={"arc-path"} viewBox={"0 0 1000 200"} preserveAspectRatio={"none"} aria-hidden={"true"}>
            <path d={"M 0 200 Q 500 -60 1000 200"} pathLength={"1"}></path>
          </svg>
          <ol className={"arc-stops"}>
            <li className={"stop"}>
              <svg className={"stop-mark"} viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"core"} r={"6"}></circle></svg>
              <h3>Collège EPL Le Stimulus</h3>
              <p className={"stop-place"}>Togo</p>
              <p>Diplôme d'études secondaires (DES)</p>
            </li>
            <li className={"stop stop--now"}>
              <svg className={"stop-mark"} viewBox={"-20 -12 40 24"} aria-hidden={"true"}><circle className={"ring"} r={"10"}></circle><circle className={"core"} r={"5"}></circle></svg>
              <h3>Cégep de Rosemont</h3>
              <p className={"stop-place"}>Montréal (QC)&nbsp;· en cours</p>
              <p>Techniques de l'informatique, profil Développement Web et Applications</p>
            </li>
          </ol>
        </div>

        <div className={"journey-notes"}>
          <div>
            <h3>Langues</h3>
            <dl className={"langs"}>
              <div><dt>Français</dt><dd>Maîtrisé</dd></div>
              <div><dt>Anglais</dt><dd>Débutant</dd></div>
            </dl>
          </div>
          <div>
            <h3>Ce qui m'attire</h3>
            <ul className={"tokens"}>
              <li>Développement mobile</li><li>DevOps</li><li>Intelligence artificielle</li><li>Design web</li><li>Animation GSAP</li><li>Entrepreneuriat numérique</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id={"contact"} className={"signal"} aria-labelledby={"contact-title"}>
      <div className="signal-sky" aria-hidden="true"><StarMap variant="watermark" /></div>
      <div className={"wrap signal-inner"}>
        <h2 id={"contact-title"}>Établir le contact</h2>
        <p className={"signal-lead"}>Vous cherchez un développeur junior qui aime autant l'interface que le pipeline de déploiement ? Écrivez-moi.</p>
        <a className={"signal-mail"} href={"mailto:gnimdaoqc@gmail.com"}>gnimdaoqc@gmail.com</a>
        <ul className={"signal-links"}>
          <li><a className={"ext"} href={"https://github.com/GnimGregoireDAO"} target={"_blank"} rel={"noopener me"}>GitHub<span className={"sr-only"}> (nouvel onglet)</span></a></li>
          <li><a className={"ext"} href={"https://www.linkedin.com/in/gnim-gregoire-dao-40285432a"} target={"_blank"} rel={"noopener me"}>LinkedIn<span className={"sr-only"}> (nouvel onglet)</span></a></li>
          <li><a className={"ext"} href={"https://gdgproductions.ca"} target={"_blank"} rel={"noopener"}>GDG Productions<span className={"sr-only"}> (nouvel onglet)</span></a></li>
        </ul>
      </div>
    </section>
  </main>

  <footer className={"site-foot"}>
    <div className={"wrap foot-inner"}>
      <p>© 2026 Gnim Grégoire DAO&nbsp;· Site statique publié avec GitHub Pages</p>
      <a href={"#carte"}>Retour à la carte</a>
    </div>
  </footer>
</>;
}
