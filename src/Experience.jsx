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
  },
  {
    role: "Functional Analyst",
    company: "Argentine Chamber of Commerce and Services",
    date: "Apr 2023 - Present",
  },
];

export default function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-title">Experiences</h2>

      <div className="experience-grid">
        <div className="experience-left">
          <img
            src="/animated-laptop.gif"
            alt="Animated Laptop"
            className="experience-image"
          />
        </div>

        <div className="experience-right">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="experience-date">({exp.date})</p>
              <div className="experience-role-icon">
                <FaUser className="experience-icon" />
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
