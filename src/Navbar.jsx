import { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

export default function Navbar({ activeId, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pick = (id) => {
    onNavigate?.(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            pick("cover");
          }}
          aria-label="Volver a la tapa del libro"
        >
          <img src="./logo_gaucho_web.png" alt="Logo" className="logo-img" />
        </a>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>

      <ul className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
        {LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeId === link.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                pick(link.id);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
