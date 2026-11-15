import React from "react";
import { CvDownload, StarMap, StarList, ProjectEntry } from "./components.jsx";
import { projects } from "./data.jsx";
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
    <CvDownload className="topbar-cv">
      <span className="cv-label-full">Télécharger mon CV (PDF)</span>
      <span className="cv-label-short" aria-hidden="true">CV (PDF)</span>
    </CvDownload>
  </header>

  <main>
    <section id={"carte"} className={"chart"} aria-labelledby={"hero-title"}>
      <canvas className={"sky"} aria-hidden={"true"}></canvas>
      <div className={"frame"} aria-hidden={"true"}></div>

      <div className={"hero-copy"}>
        <h1 id={"hero-title"}><span>Gnim</span> <span>Grégoire</span> <span className={"h1-last"}>DAO</span></h1>
        <p className={"hero-role"}><span>Développeur <span className={"nowrap"}>full-stack junior</span></span> <span>Web&nbsp;· CI/CD</span></p>
        <p className={"hero-lead"}>Je conçois des applications web, de l'interface au déploiement. J'accorde une attention particulière à la sécurité et à l'intégration continue.</p>
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
            <p className="finder-progress">Fiche {projects.findIndex((project) => project.id === currentStar) + 1} sur {projects.length}</p>
            <StarList variant="finder" interaction={finderInteraction} current={currentStar} />
          </aside>

          <div className={"entries"}>
            {projects.map(({ id }) => <ProjectEntry key={id} id={id} />)}
          </div>
        </div>
      </div>
    </section>

    <section id={"competences"} className={"catalog-sec"} aria-labelledby={"competences-title"}>
      <div className={"wrap"}>
        <h2 id={"competences-title"}>Catalogue des compétences</h2>
        <p className={"section-lead"}>Mon socle pour construire des applications web et les livrer, avec des exemples concrets.</p>
        <table className={"catalog"}>
          <caption className={"sr-only"}>Compétences techniques et projets associés</caption>
          <thead><tr><th scope={"col"}>Domaine</th><th scope={"col"}>Outils et projets</th></tr></thead>
          <tbody>
            <tr><th scope={"row"}>Stack principal</th><td>
              <ul className="stack-projects">
                <li><strong>Java · Spring Boot</strong><span><a href="#iga">IGA</a>, <a href="#manara">CRM Manara</a>, <a href="#bimy">Bimy</a></span></li>
                <li><strong>Angular · TypeScript</strong><span><a href="#iga">IGA</a>, <a href="#manara">CRM Manara</a></span></li>
                <li><strong>C# · ASP.NET Core</strong><span><a href="#kaypic">KayPic</a></span></li>
                <li><strong>Astro · TypeScript</strong><span><a href="#gdg">GDG Productions</a>, <a href="#bimy">Bimy</a></span></li>
              </ul>
            </td></tr>
            <tr><th scope={"row"}>Livraison et qualité</th><td><p>GitLab CI/CD : tests avec <code>mvn verify</code> et rapports JUnit, analyse SAST, détection de secrets et image Docker sur <a href="#manara">CRM Manara</a>. Analyse statique avec SonarQube.</p></td></tr>
            <tr><th scope={"row"}>Aussi utilisé</th><td><p>Python, PHP, React, JavaScript, SQL, Kotlin, Android, PostgreSQL, MySQL, Git et Firebase.</p></td></tr>
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
              <div><dt>Anglais</dt><dd>Fonctionnel</dd></div>
            </dl>
          </div>
          <div>
            <h3>Ce qui m'attire</h3>
            <ul className={"tokens"}>
              <li>Développement web</li><li>DevOps</li><li>Design web</li>
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
        <div className="signal-actions">
          <CvDownload className="btn signal-cv">Télécharger mon CV (PDF)</CvDownload>
        </div>
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
