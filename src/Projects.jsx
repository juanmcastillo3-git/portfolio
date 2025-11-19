import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Radisson Hotel Management App",
    tools: [
      "ASP.NET Core",
      "MS SQL",
      "Entity Framework",
      "Visual Studio",
      "Git",
      "Azure",
    ],
    myRole: "Backend Developer",
    description:
      "I worked as a Backend developer for this project. I implemented complex logic in the hotel management system and developed the booking system and membership features. My work focused on ensuring a seamless experience for users booking rooms and managing their memberships, leveraging the power of ASP.NET Core for robust backend processing.",
  },
  {
    name: "Team System App",
    tools: [
      "ASP.NET Core",
      "Telerik UI",
      "AngularJS",
      "Bootstrap",
      "MS SQL",
      "Visual Studio",
      "Git",
      "Jenkins",
    ],
    myRole: "Full Stack Developer",
    description:
      "As a C# Full-Stack Developer, I contributed to the development of the TeamSystem website. My role involved implementing various features using ASP.NET for the backend, ensuring a robust and scalable infrastructure. On the frontend, I utilized Telerik controls to create a rich and responsive user interface.",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.name}</h3>
              <pre className="project-code">
                <code>
                  const project = {"{\n"}
                  {"  "}name: '{project.name}',{"\n"}
                  {"  "}tools: [{project.tools.map(t => `'${t}'`).join(", ")}],{"\n"}
                  {"  "}myRole: {project.myRole},{"\n"}
                  {"  "}Description: {project.description}{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
