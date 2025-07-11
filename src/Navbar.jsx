import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" className="logo">
          <img src="./logo_gaucho_web.png" alt="Logo" className="logo-img" />
        </a>
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>

      <ul className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            EXPERIENCE
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            SKILLS
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            EDUCATION
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </a>
        </li>
      </ul>
    </nav>
  );
}
