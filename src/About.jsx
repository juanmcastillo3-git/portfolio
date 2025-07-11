import "./About.css";
import profileImg from "./assets/profile.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h3 className="about-title">WHO I AM?</h3>
        <p>
          👋🏼 Hello! I am Juan. Functional analyst and Full-Stack developer in
          progress. 🎓 In my academic stage, I am not only solidifying knowledge
          and experience, but I am also taking courses parallelly with the
          desire to integrate projects and incorporate different work tools. 💡
          I am passionate about the study of systems, not just programming. How
          to organize an environment from its data, and the methodologies to
          carry out a project. 💼 I am currently working as a Functional Analyst
          in the Systems area at the Argentine Chamber of Commerce and Services.
          My functions include: Gathering, analyzing, and documenting
          comprehensive processes, technical requirements, business
          requirements, etc. Validating/Obtaining user definition approvals.
          Verifying compliance with requirements from the user's perspective.
          Generating progress reports. Coordinating and preparing user tests,
          test cases. Addressing business requirements: gathering, analysis,
          design, and scope specifications. Analyzing and implementing new
          requirements. Actively participating in the implementation of ERP
          systems, managing and monitoring their use. 🎯 My goal is to continue
          developing in the Systems area. I consider myself passionate about
          technology, challenges, and problem-solving both in teams and
          individually.
        </p>
      </div>

      <div className="about-image-container">
        <img src={profileImg} alt="Profile" className="about-image" />
        <div className="about-label">ABOUT ME</div>
      </div>
    </section>
  );
}
