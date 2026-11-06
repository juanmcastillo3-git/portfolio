import React from "react";
import "./educations.css";

/* Cada logro académico es una carta fuerte del truco: número, palo y su lema. */
const educations = [
  {
    number: "1",
    suit: "espada",
    date: "2019 - 2024",
    degree: "SYSTEMS ANALYST",
    university: "ORT Argentina - Almagro, Buenos Aires",
    saying: "«El as de espada ataja todo.»",
  },
  {
    number: "7",
    suit: "oro",
    date: "2026 - Now",
    degree: "FULL STACK DEVELOPER",
    university: "ConquerBlocks",
    saying: "«Siete de oro: el que la tiene, manda.»",
  },
];

const SuitIcon = ({ suit }) => {
  if (suit === "espada") {
    return (
      <svg className="pip-icon" viewBox="-24 -38 48 90" aria-hidden="true">
        <path
          d="M0 -34 C4 -20 7 -6 7 12 L7 22 L-7 22 L-7 12 C-7 -6 -4 -20 0 -34 Z"
          fill="#4db7d6"
          stroke="#182f55"
          strokeWidth="2"
        />
        <rect x="-18" y="22" width="36" height="5" rx="2.5" fill="#c69a37" />
        <rect x="-3" y="27" width="6" height="11" rx="2.5" fill="#6b3d1f" />
        <circle cx="0" cy="42" r="4" fill="#c69a37" />
      </svg>
    );
  }
  return (
    <svg className="pip-icon pip-icon--oro" viewBox="-32 -32 64 64" aria-hidden="true">
      <circle r="24" fill="#e3c874" stroke="#8a6a16" strokeWidth="3" />
      <circle r="8" fill="#b6422a" />
      <g stroke="#8a6a16" strokeWidth="2.5" strokeLinecap="round">
        <line x1="0" y1="-12" x2="0" y2="-19" />
        <line x1="0" y1="12" x2="0" y2="19" />
        <line x1="-12" y1="0" x2="-19" y2="0" />
        <line x1="12" y1="0" x2="19" y2="0" />
        <line x1="-8.5" y1="-8.5" x2="-13.5" y2="-13.5" />
        <line x1="8.5" y1="-8.5" x2="13.5" y2="-13.5" />
        <line x1="-8.5" y1="8.5" x2="-13.5" y2="13.5" />
        <line x1="8.5" y1="8.5" x2="13.5" y2="13.5" />
      </g>
    </svg>
  );
};

const Educations = () => {
  return (
    <section className="educations-section" id="educations">
      <h2 className="educations-title">
        Educations<span className="jp-kicker" aria-hidden="true">教育</span>
      </h2>

      <div className="educations-grid">
        <div className="education-cards">
          {educations.map((edu, index) => (
            <div className={`education-card education-card--${edu.suit}`} key={index}>
              <span className="education-pip" aria-hidden="true">
                <span className="education-pip-num">{edu.number}</span>
                <SuitIcon suit={edu.suit} />
              </span>
              <span className="education-pip education-pip--flipped" aria-hidden="true">
                <span className="education-pip-num">{edu.number}</span>
                <SuitIcon suit={edu.suit} />
              </span>

              <span className="education-center-suit" aria-hidden="true">
                <SuitIcon suit={edu.suit} />
              </span>

              <span className="education-date">{edu.date}</span>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-university">{edu.university}</p>
              <p className="education-saying">{edu.saying}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
