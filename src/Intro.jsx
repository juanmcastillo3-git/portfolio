import "./Intro.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [visibleLines, setVisibleLines] = useState(0);
  const codeBodyRef = useRef(null);

  /* Se renderizan las líneas una sola vez y el typing solo las revela,
     así no se re-tokeniza en cada tick. */
  const allCodeLines = useMemo(() => renderCode(CODE), []);
  const totalLines = allCodeLines.length;
  const lastLineLen = useMemo(() => {
    if (visibleLines <= 0) return 0;
    return CODE.split("\n")[visibleLines - 1]?.length ?? 0;
  }, [visibleLines]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondLine(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  /* Efecto “se va escribiendo”: revela una línea cada ~22ms y acompaña
     el scroll hasta el fondo de la ventana, como si el coder estuviera
     tipeando en vivo. */
  useEffect(() => {
    if (visibleLines >= totalLines) return undefined;
    const interval = setInterval(() => {
      setVisibleLines((n) => Math.min(n + 1, totalLines));
    }, 22);
    return () => clearInterval(interval);
  }, [visibleLines, totalLines]);

  useEffect(() => {
    const el = codeBodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibleLines]);

  /* Al terminar de tipear, vuelve suavemente de abajo hacia arriba
     hasta la primera línea (efecto “rewind” del editor). */
  useEffect(() => {
    if (visibleLines < totalLines) return undefined;
    const el = codeBodyRef.current;
    if (!el) return undefined;
    const timer = setTimeout(() => {
      el.scrollTo({ top: 0, behavior: "smooth" });
    }, 450);
    return () => clearTimeout(timer);
  }, [visibleLines, totalLines]);

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
            href="https://github.com/juanmcastillo3-git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — juanmcastillo3-git"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-m-castillo-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — Juan M Castillo"
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
          <span className="dot dot--green dot--active" />
          <span className="file-tab">coder.js</span>
        </div>
        <div className="code-body" ref={codeBodyRef}>
          {allCodeLines.slice(0, visibleLines)}
          {visibleLines < totalLines && (
            <span className="code-cursor" aria-hidden="true" />
          )}
        </div>
        {/* Barra de estado tipo VS Code: Ln/Col en vivo */}
        <div className="code-statusbar" aria-hidden="true">
          <span className="status-item">⎇ main</span>
          <span className="status-item status-item--sync">
            {visibleLines < totalLines ? "● typing…" : "✓ saved"}
          </span>
          <span className="status-spacer" />
          <span className="status-item">
            Ln {visibleLines || 1}, Col {lastLineLen + 1}
          </span>
          <span className="status-item">Spaces: 2</span>
          <span className="status-item">UTF-8</span>
          <span className="status-item status-item--ok">
            ✓ 0 errors · 0 warnings
          </span>
        </div>
      </div>
    </section>
  );
}
