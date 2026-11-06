import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "CAC Events Platform",
    url: "https://www.council.ar",
    tools: [
      "Next.js",
      "React",
      "MySQL",
      "Tailwind CSS",
      "SAP",
      "HubSpot",
    ],
    myRole: "Functional Analyst",
    description:
      "I worked as a Functional Analyst on an integrated event management platform developed for the Argentine Chamber of Commerce and Services (CAC). The project involved analyzing requirements, defining business processes, and coordinating the development of the event registration website. The platform integrated registration forms with a MySQL database, SAP for automated billing processes, and HubSpot CRM for synchronizing and managing customer information. My responsibilities included ensuring seamless communication between systems, validating integrations, coordinating technical requirements, and supporting the implementation of an end-to-end solution that streamlined event registration, invoicing, and customer acquisition.",
  },
  {
    name: "Booking System",
    tools: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    myRole: "Full Stack Developer",
    description:
      "A dynamic booking application that lets different businesses manage appointments in real time: customers pick a service, choose an available slot and confirm their reservation, while each business handles its own calendar from a single dashboard. Built with Next.js on the frontend and Supabase under the hood, using PostgreSQL row-level security for safe multi-tenant data and edge functions for instant availability updates. Synchronized email notifications and automatic conflict prevention ensured that every seat counted and no double bookings slipped through.",
  },
];

/* ── Mini-resaltador de sintaxis, paleta VS Code Dark+ (igual que coder.js) ── */
const TOKEN_RE =
  /(\/\/.*)|('(?:[^'\\]|\\.)*')|\b(const|function|return|this|true|false|if|else|null)\b|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*:)|([A-Za-z_$][\w$]*)(?=\s*\()|([{}()[\],;:=+\-*.<>&|])/g;

const TOKEN_CLASS = {
  1: "tok-cmt",
  2: "tok-str",
  3: "tok-kw",
  4: "tok-num",
  5: "tok-prop",
  6: "tok-fn",
  7: "tok-punct",
};

const fileSlug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const esc = (s) => s.replace(/'/g, "\\'");

/* El proyecto redactado como código de verdad */
const buildCode = (p) =>
  [
    "const project = {",
    `  name: '${esc(p.name)}',`,
    "  tools: [",
    p.tools.map((t) => `    '${esc(t)}',`).join("\n"),
    "  ],",
    `  myRole: '${esc(p.myRole)}',`,
    `  description: '${esc(p.description)}',`,
    "};",
  ].join("\n");

function CodeLines({ code }) {
  return code.split("\n").map((line, i) => {
    const nodes = [];
    let last = 0;
    let m;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(line)) !== null) {
      if (m.index > last) {
        nodes.push(
          <span key={`t-${i}-${last}`}>{line.slice(last, m.index)}</span>
        );
      }
      const group = m.slice(1).findIndex((g) => g !== undefined) + 1;
      nodes.push(
        <span key={`s-${i}-${m.index}`} className={TOKEN_CLASS[group]}>
          {m[0]}
        </span>
      );
      last = m.index + m[0].length;
    }
    if (last < line.length) {
      nodes.push(<span key={`t-${i}-${last}`}>{line.slice(last)}</span>);
    }
    return (
      <span className="code-line" key={i}>
        <span className="code-ln" aria-hidden="true">
          {i + 1}
        </span>
        <span className="code-src">{nodes.length ? nodes : "\u00A0"}</span>
      </span>
    );
  });
}

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">PROJECTS<span className="jp-kicker" aria-hidden="true">作品</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => {
          const card = (
            <div className="project-card">
              <div className="project-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="project-file-tab">
                  {fileSlug(project.name)}.js
                  {project.url && <span className="project-file-mark"> ↗</span>}
                </span>
              </div>
              <div className="project-body project-code">
                <CodeLines code={buildCode(project)} />
              </div>
            </div>
          );

          return project.url ? (
            <a
              key={index}
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} — abrir sitio web`}
            >
              {card}
            </a>
          ) : (
            <div key={index}>{card}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
