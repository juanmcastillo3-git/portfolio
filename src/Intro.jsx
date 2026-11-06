import "./Intro.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

/* ── El expediente del coder: se renderiza como un editor en tema oscuro ── */
const CODE = `const coder = {
  // Personal information
  name: 'Juan Manuel Castillo',
  nickname: 'Gaucho',
  title: 'Operations Functional Analyst & Full Stack Developer',
  location: 'Buenos Aires, Argentina',

  // Professional roles
  roles: [
    'Operations Functional Analyst',
    'Full Stack Developer',
    'Functional Analyst',
    'Software Developer'
  ],

  // Programming languages
  languages: [
    'JavaScript',
    'Java',
    'C#',
    'PHP',
    'Kotlin',
    'SQL',
    'HTML5',
    'CSS3'
  ],

  // Frontend development
  frontend: [
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'Responsive Design',
    'Vite'
  ],

  // Backend development
  backend: [
    'Node.js',
    'PHP',
    'Symfony',
    '.NET',
    'REST API',
    'API Integration'
  ],

  // Databases
  databases: [
    'MySQL',
    'SQL',
    'Database Management',
    'Data Analysis',
    'Queries Optimization'
  ],

  // Tools & Technologies
  tools: [
    'Git',
    'GitHub',
    'Postman',
    'Jira',
    'DBeaver',
    'AWS',
    'SAP Integration Suite',
    'HubSpot',
    'Webflow'
  ],

  // Functional analysis
  functionalAnalysis: [
    'Requirements Gathering',
    'Business Process Analysis',
    'Requirements Documentation',
    'Functional Specifications',
    'Process Improvement',
    'Stakeholder Management',
    'Business Rules Definition'
  ],

  // Operations & Production
  operations: [
    'Production Monitoring',
    'Incident Management',
    'Problem Management',
    'Troubleshooting',
    'Root Cause Analysis',
    'Logs Analysis',
    'Metrics Monitoring',
    'Operational Dashboards',
    'Continuous Improvement'
  ],

  // QA & Testing
  testing: [
    'Manual Testing',
    'Functional Testing',
    'API Testing',
    'UAT',
    'Test Cases',
    'Regression Testing',
    'Implementation Validation'
  ],

  // Software development practices
  methodologies: [
    'Agile',
    'Scrum',
    'SDLC',
    'Clean Code',
    'Problem Solving',
    'Continuous Learning'
  ],

  // Professional strengths
  softSkills: [
    'Analytical Thinking',
    'Critical Thinking',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Time Management',
    'Quick Learning',
    'Decision Making'
  ],

  // Personal attributes
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  teamPlayer: true,
  detailOriented: true,
  businessMinded: true,
  techEnthusiast: true,

  // Professional mindset
  mindset: [
    'Understand the Problem',
    'Analyze the Root Cause',
    'Design the Solution',
    'Build and Implement',
    'Test and Validate',
    'Monitor and Improve'
  ],

  // Career goals
  interests: [
    'Full Stack Development',
    'Software Architecture',
    'Backend Development',
    'API Development',
    'System Integration',
    'Automation',
    'Cloud Computing',
    'Artificial Intelligence'
  ],

  hireable: function() {
    return (
      this.hardWorker &&
      this.quickLearner &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

/* Mini-resaltador de sintaxis, paleta VS Code Dark+ */
const TOKEN_RE =
  /(\/\/.*)|('(?:[^'\\]|\\.)*')|\b(const|function|return|this|true|false|if|else|null)\b|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*:)|([A-Za-z_$][\w$]*)(?=\s*\()|([{}()[\],;:=+\-*.<>&|])/g;

const TOKEN_CLASS = {
  1: "tok-cmt",
  2: "tok-str",
  3: "tok-kw",
  4: "tok-num",
  5: "tok-prop",
  6: "tok-fn",
  7: "tok-punct",
};

function renderCode(code) {
  return code.split("\n").map((line, i) => {
    const tokens = [];
    let last = 0;
    let m;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(line)) !== null) {
      if (m.index > last) {
        tokens.push(<span key={`t${last}`}>{line.slice(last, m.index)}</span>);
      }
      const cls = TOKEN_CLASS[m.slice(1).findIndex((g) => g !== undefined) + 1];
      tokens.push(
        <span key={`s${m.index}`} className={cls}>
          {m[0]}
        </span>
      );
      last = m.index + m[0].length;
    }
    if (last < line.length) {
      tokens.push(<span key={`t${last}`}>{line.slice(last)}</span>);
    }
    return (
      <span className="code-line" key={i}>
        <span className="code-ln" aria-hidden="true">
          {i + 1}
        </span>
        <span className="code-src">{tokens.length ? tokens : "\u00A0"}</span>
      </span>
    );
  });
}

const EMAIL = "juanmcastillo3@gmail.com";
const CV_URL = "/CV_Juan_Manuel_Castillo_2026.pdf";

export default function Intro() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondLine(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="intro">
      <div className="intro-text">
        <p className="jp-kicker" aria-hidden="true">
          ようこそ ✧ 宇宙のパンパ
        </p>
        <h1>Hello,</h1>

        {/* Línea 1 - Aparece con typing manual */}
        <h2>
          I'm <span className="highlight-purple">Juan Manuel Castillo</span>
        </h2>

        {/* Línea 2 - Aparece luego con loop de frases (el renglón siempre
            existe para reservar su lugar, sin saltos de layout) */}
        <h2 className="loop-typewriter">
          {showSecondLine && (
            <>
              I'm a{" "}
              <span className="highlight-green">
                <Typewriter
                  words={["Functional Analyst", "Full Stack Developer"]}
                  loop={0} // 0 = infinito
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </>
          )}
        </h2>

        <div className="social-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="intro-buttons">
          <a
            className="btn btn-outline"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(
              "Contacto desde el portfolio"
            )}`}
          >
            CONTACT ME 👤
          </a>
          <a
            className="btn btn-filled"
            href={CV_URL}
            download="CV_Juan_Manuel_Castillo_2026.pdf"
          >
            GET RESUME ⬇
          </a>
        </div>
      </div>

      {/* Ventana de editor en Theme Dark, como VS Code */}
      <div className="intro-code" aria-label="Expediente del coder en código">
        <div className="code-editor-bar" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="file-tab">coder.js</span>
        </div>
        <div className="code-body">{renderCode(CODE)}</div>
      </div>
    </section>
  );
}
