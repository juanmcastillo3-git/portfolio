import "./Intro.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondLine(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <section className="intro">
      <div className="intro-text">
        <h1>Hello,</h1>

        {/* Línea 1 - Aparece con typing manual */}
        <h2>
          I'm <span className="highlight-purple">Juan Manuel Castillo</span>
        </h2>

        {/* Línea 2 - Aparece luego con loop de frases */}
        {showSecondLine && (
          <h2 className="loop-typewriter">
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
          </h2>
        )}

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
          <button className="btn btn-outline">CONTACT ME 👤</button>
          <button className="btn btn-filled">GET RESUME ⬇</button>
        </div>
      </div>

      <div className="intro-code">
        <pre>
          {`const coder = {
  name: 'Juan Manuel Castillo',
  skills: ['Javascript', 'React', 'Node Js', 'Java', 'C#',
           'HTML', 'CSS', 'MySQL', 'Kotlin', 'AWS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
        </pre>
      </div>
    </section>
  );
}
