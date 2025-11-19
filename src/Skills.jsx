import React from "react";
import "./Skills.css";

const skills = [
  { name: "C#", icon: "/icons/csharp-purple.png" },
  { name: "Blazor", icon: "/icons/blazor-purple.svg" },
  { name: "Java", icon: "/icons/java.png" },
  { name: ".NET", icon: "/icons/net.png" },
  { name: "MySQL", icon: "/icons/MySQL.png" },
  { name: "Mongo DB", icon: "/icons/MongoDB.png" },
  { name: "JavaScript", icon: "/icons/JavaScript.png" },
  { name: "CSS", icon: "/icons/CSS3.png" },
  { name: "HTML", icon: "/icons/HTML5.svg" },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {[...skills, ...skills].map((skill, i) => (
            <div className="skill-card" key={i}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}