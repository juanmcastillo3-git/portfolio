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

export default function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-title">
        Experiences<span className="jp-kicker" aria-hidden="true">経験</span>
      </h2>

      <div className="experience-grid">
        <div className="experience-left">
          <img
            src="/coder-night.svg"
            alt="Ilustración animada: perfil nocturno de developer frente al código, con mate"
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
