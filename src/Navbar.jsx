import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isTop, setIsTop] = useState(true); // nuevo estado para controlar visibilidad del navbar

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const sections = ["about", "experience", "skills", "education", "projects"];
    const offset = 70;

    function onScroll() {
      const scrollPos = window.scrollY + 1;

      // Detectar si estamos en top (ejemplo: menos de 50px de scroll)
      setIsTop(scrollPos < 50);

      for (let i = 0; i < sections.length; i++) {
        const currentSection = document.getElementById(sections[i]);
        const nextSection = document.getElementById(sections[i + 1]);

        if (!currentSection) continue;

        const currentTop = currentSection.offsetTop - offset;
        const nextTop = nextSection ? nextSection.offsetTop - offset : Infinity;

        if (scrollPos >= currentTop && scrollPos < nextTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      {isTop && (
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
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleClick("about")}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
                onClick={() => handleClick("experience")}
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => handleClick("skills")}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={activeSection === "education" ? "active" : ""}
                onClick={() => handleClick("education")}
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => handleClick("projects")}
              >
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Botón para volver arriba */}
      {!isTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
