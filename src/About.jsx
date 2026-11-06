import "./About.css";
import profileImg from "./assets/profile.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h3 className="about-title">WHO I AM?<span className="jp-kicker" aria-hidden="true">私について</span></h3>
        <p>
👋🏼 Hi, I'm Juan — Functional Analyst & Full-Stack Developer.

💼 I currently work as an Operations Functional Analyst at Open Pass, actively involved in analyzing, troubleshooting, implementing, and monitoring operational and production issues. My profile combines functional and business analysis with a strong technical focus, allowing me to understand solutions from an end-to-end perspective: from gathering requirements and analyzing business processes to implementation, validation, and ongoing support.

🔎 My main responsibilities include:

Analyzing operational and production issues, identifying deviations and opportunities for improvement.

Performing functional and technical troubleshooting through log, metrics, and dashboard analysis.

Writing and executing SQL queries for incident analysis and resolution.

Executing and validating services and APIs using Postman.

Managing and monitoring production incidents and problems.

Creating and managing tickets through Jira.

Coordinating incident resolution and implementations with Development, Product, Delivery, Data, and Operations teams.

Participating in meetings and collaborative sessions with clients.

Creating, updating, and maintaining functional and operational documentation.

🎓 In parallel, I continue to strengthen my technical skills through ongoing training in Full-Stack development, programming, databases, and emerging technologies. My goal is to complement my functional experience with technical expertise that allows me to actively contribute throughout the entire software development lifecycle.

💡 I am particularly interested in understanding how technology can transform processes, solve problems, and create value for organizations. I believe that IT professionals need more than just technical knowledge: they must also understand the business, its processes, and the needs of the people who use the solutions.

🚀 My professional goal is to continue growing in the IT field, take on new challenges, and bring both functional and technical perspectives to projects where technology serves as a tool for building practical solutions and delivering real business value.

🤝 I am always open to connecting, sharing knowledge, learning, and exploring new professional opportunities.
        </p>
      </div>

      <div className="about-image-container">
        <img src={profileImg} alt="Profile" className="about-image" />
        <div className="about-label">ABOUT ME</div>
      </div>
    </section>
  );
}
