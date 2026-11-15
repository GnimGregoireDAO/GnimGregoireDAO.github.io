import React from "react";
import { entries, lines, projects } from "./data.jsx";

export function CvDownload({ className, children }) {
  return <a className={className} href="assets/docs/cv.pdf" download="CV-Gnim-Gregoire-DAO.pdf"
    aria-label="Télécharger mon CV (PDF)">{children}</a>;
}

export function ProjectEntry({ id }) {
  const index = projects.findIndex((project) => project.id === id);
  const previous = projects[index - 1];
  const next = projects[index + 1];
  return React.cloneElement(entries[id], {}, <>
    {entries[id].props.children}
    <nav className="project-nav" aria-label={`Navigation depuis la fiche ${projects[index].name}`}>
      {previous && <a href={`#${previous.id}`}>← {previous.name}</a>}
      {next && <a href={`#${next.id}`}>{next.name} →</a>}
    </nav>
  </>);
}

export function StarList({ variant, interaction, current }) {
  return (
    <ol className={variant === "hero" ? "chart-key" : "finder-list"}
      aria-label={variant === "hero" ? "Étoiles de la carte" : undefined}>
      {projects.map(({ id, greek, name }) => (
        <li key={id}>
          <a href={`#${id}`} aria-current={variant === "finder" && current === id ? "true" : undefined}
            {...interaction.handlers(id)}>
            <span className="greek">{greek}</span>{" "}{name}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function StarMap({ variant, interaction, current }) {
  const decorative = variant !== "hero";
  const hot = interaction?.hot;
  return (
    <svg id={decorative ? undefined : "sky-map"} className={`map map--${variant}`}
      viewBox="0 90 1000 590" role={decorative ? undefined : "group"}
      aria-label={decorative ? undefined : "Carte des projets : six étoiles reliées en constellation"}
      aria-hidden={decorative ? "true" : undefined} focusable={decorative ? "false" : undefined}>
      <g className="c-lines" aria-hidden="true">
        {lines.map((line, i) => (
          <line key={`${line["data-a"]}-${line["data-b"]}`}
            className={`c-line${hot && (line["data-a"] === hot || line["data-b"] === hot) ? " is-lit" : ""}${current && (line["data-a"] === current || line["data-b"] === current) ? " is-path" : ""}`}
            data-a={line["data-a"]} data-b={line["data-b"]}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            pathLength="1" style={{ "--i": i }} />
        ))}
      </g>
      {projects.map(({ id, className, transform, label, glyph }) => (
        <a key={id} className={`${className}${hot === id ? " is-hot" : ""}${current === id ? " is-current" : ""}`}
          data-id={id} href={`#${id}`} transform={transform}
          aria-label={decorative ? undefined : label} tabIndex={decorative ? -1 : undefined}
          {...(interaction ? interaction.handlers(id) : {})}>
          {glyph}
        </a>
      ))}
    </svg>
  );
}
