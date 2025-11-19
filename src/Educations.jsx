import React from "react";
import "./educations.css";

const Educations = () => {
  return (
    <section className="educations-section">
      <h2 className="educations-title">Educations</h2>

      <div className="educations-grid">
        <div className="educations-image">
          <div className="educations-light"></div>
          <img src="/laptop.png" alt="Laptop" />
        </div>

        <div className="education-card">
          <span className="education-date">2019 - 2024</span>
          <h3 className="education-degree">SYSTEMS ANALYST</h3>
          <p className="education-university">
            ORT Argentina - Almagro, Buenos Aires
          </p>
        </div>
      </div>
    </section>
  );
};

export default Educations;
