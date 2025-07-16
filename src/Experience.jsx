import React from "react";
import "./experience.css";
import { motion } from "framer-motion";

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
    <div className="experience-container">
      <div className="experience-grid">
        <div className="experience-left">
          <motion.div
            className="experience-image-wrapper"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/animated-laptop.gif"
              alt="Animated Laptop"
              className="experience-image"
            />
          </motion.div>
        </div>

        <div className="experience-right">
          <h2 className="experience-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                className="experience-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="experience-date">{exp.date}</p>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
