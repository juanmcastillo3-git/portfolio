import React, { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
  {
    name: "CAC Events Platform",
    url: "https://www.council.ar",
    kanji: "祭",
    jp: "イベント",
    accent: "#ffb84d",
    accent2: "#b6422a",
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
    kanji: "予約",
    jp: "ブッキング",
    accent: "#4db7d6",
    accent2: "#1f4c60",
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

const Projects = () => {
  const [selected, setSelected] = useState(null);

  /* Cerrar con Escape + bloquear el fondo mientras el modal vive */
  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  const handleCardClick = (project) => {
    /* Siempre al modal — el link externo vive adentro (sin redirección
       directa que deje las cards como estaban). */
    setSelected(project);
  };

  const handleCardKeyDown = (e, project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(project);
    }
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">
        PROJECTS<span className="jp-kicker" aria-hidden="true">作品</span>
      </h2>
      <p className="projects-hint" aria-hidden="true">
        ✶ Tocá o hacé click en una carta para ver el detalle ✶
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <article
            key={index}
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(project)}
            onKeyDown={(e) => handleCardKeyDown(e, project)}
            aria-label={`${project.name} — ver detalle`}
            aria-haspopup="dialog"
          >
            {/* Carta anime — vista única (desktop + mobile), sin editor viejo */}
            <div
              className="anime-card"
              aria-hidden="true"
              style={{ "--acc": project.accent, "--acc2": project.accent2 }}
            >
              <div className="anime-top">
                <span className="anime-rarity">★★★★★ SSR</span>
                <span className="anime-no">
                  No. {String(index + 1).padStart(3, "0")}
                </span>
              </div>
              <div className="anime-art">
                <span className="anime-art-kanji">{project.kanji}</span>
                <span className="anime-art-jp">{project.jp}</span>
                <span className="anime-art-role">{project.myRole}</span>
                <span className="anime-art-stars">✶ ✦ ✶</span>
              </div>
              <p className="anime-name">{project.name}</p>
              <div className="anime-tools">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="anime-chip">
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="anime-chip anime-chip--more">
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>
              <span className="anime-tap">VER DETALLE →</span>
            </div>
          </article>
        ))}
      </div>

      {/* Modal con el contenido completo de la carta */}
      {selected && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-desc"
            onClick={(e) => e.stopPropagation()}
            style={{
              "--acc": selected.accent,
              "--acc2": selected.accent2,
            }}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Cerrar detalle del proyecto"
            >
              ✕
            </button>

            <div className="project-modal-hero">
              <span className="project-modal-kanji" aria-hidden="true">
                {selected.kanji}
              </span>
              <p className="project-modal-jp">{selected.jp} ✶ SSR</p>
              <h3 id="project-modal-title" className="project-modal-name">
                {selected.name}
              </h3>
              <p className="project-modal-role">
                <span aria-hidden="true">⚔ </span>
                {selected.myRole}
              </p>
            </div>

            <div className="project-modal-body">
              <p id="project-modal-desc" className="project-modal-desc">
                {selected.description}
              </p>

              <h4 className="project-modal-sub">Tools / Stack</h4>
              <ul className="project-modal-tools">
                {selected.tools.map((tool) => (
                  <li key={tool} className="project-modal-chip">
                    {tool}
                  </li>
                ))}
              </ul>

              {selected.url ? (
                <a
                  className="project-modal-link"
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site ↗
                </a>
              ) : (
                <p className="project-modal-note">
                  ✶ Proyecto privado — demo a pedido
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
