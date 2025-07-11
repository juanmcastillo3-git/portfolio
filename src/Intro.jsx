import './Intro.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-text">
        <h1>Hello,</h1>
        <h2>
          I'm <span className="highlight-pink">Juan Manuel Castillo</span>, I'm a<br />
          <span className="highlight-green"> Full Stack Software Developer</span>.
        </h2>

        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
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
  )
}
