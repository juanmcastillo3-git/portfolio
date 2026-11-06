import React from "react";
import "./experience.css";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { FaUser } from "react-icons/fa";

const experiences = [
  {
    role: "Developer JR",
    company: "Binary IS",
    date: "Sep 2022 - Dec 2023",
    url: "https://www.binaryarg.com",
  },
  {
    role: "Functional Analyst",
    company: "Argentine Chamber of Commerce and Services",
    date: "Apr 2023 - Sept 2026",
    url: "https://cac.com.ar",
  },
  {
    role: "Operations Functional Analyst",
    company: "Open Pass",
    date: "Oct 2026 - Present",
    url: "https://openpass.la",
  },
];

const SPARKS = [
  { left: "8%", delay: "0s", dur: "5.5s", glyph: "✶", size: "13px", color: "#b6422a" },
  { left: "28%", delay: "1.4s", dur: "6.5s", glyph: "✦", size: "11px", color: "#c69a37" },
  { left: "52%", delay: "0.7s", dur: "6s", glyph: "✶", size: "14px", color: "#35708c" },
  { left: "74%", delay: "2.1s", dur: "5.8s", glyph: "✦", size: "10px", color: "#b6422a" },
  { left: "90%", delay: "1s", dur: "6.2s", glyph: "✶", size: "12px", color: "#c69a37" },
];

export default function Experience() {
  return (
    <section className="experience-container" id="experience">
      {/* Fondo folclórico animado: sol que gira, poncho en los bordes
          y brasas/estrellitas que suben (decorativo, no afecta lectura) */}
      <div className="experience-fx" aria-hidden="true">
        <span className="fx-sun" />
        <span className="fx-poncho fx-poncho--top" />
        <span className="fx-poncho fx-poncho--bottom" />
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="fx-spark"
            style={{
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.dur,
              fontSize: s.size,
              color: s.color,
            }}
          >
            {s.glyph}
          </span>
        ))}
      </div>

      <h2 className="experience-title">
        Experiences<span className="jp-kicker" aria-hidden="true">経験</span>
      </h2>

      <div className="experience-grid">
        <div className="experience-left">
          <img
            src="/anime-coder.svg"
            alt="Ilustración anime estilo programación: coder con capucha y auriculares entre dos monitores con código, mate y gato"
            className="experience-image"
          />
        </div>

        <div className="experience-right">
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              className="experience-card"
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              aria-label={`${exp.role} en ${exp.company} — abrir sitio web`}
            >
              <p className="experience-date">({exp.date})</p>
              <div className="experience-role-icon">
                <FaUser className="experience-icon" />
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">
                    {exp.company} <span className="experience-link-mark">↗</span>
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
