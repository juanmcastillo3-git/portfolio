import { useState } from "react";
import "./Skills.css";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

/* ── El mazo del gaucho: cada skill es una carta de personaje ──
   rarity: SSR (oro) / SR (celeste) / R (cobre)
   element: kanji japonés que personifica la habilidad */
const skills = [
  { name: "Java", icon: "/icons/java.png", rarity: "SSR", element: "雷", alias: "Paladín del Backend", pwr: 950 },
  { name: "JavaScript", icon: "/icons/JavaScript.png", rarity: "SSR", element: "影", alias: "Ninja del Frontend", pwr: 940 },
  { name: ".NET", icon: "/icons/net.png", rarity: "SR", element: "光", alias: "Caballero Full Stack", pwr: 910 },
  { name: "React", icon: "/icons/React.svg", rarity: "SR", element: "星", alias: "Maestro de Componentes", pwr: 900 },
  { name: "Node JS", icon: "/icons/NodeJS.svg", rarity: "SR", element: "風", alias: "Samurái Runtime", pwr: 890 },
  { name: "Spring", icon: "/icons/Spring.svg", rarity: "SR", element: "花", alias: "Guardia de Servicios", pwr: 880 },
  { name: "CSS", icon: "/icons/CSS3.png", rarity: "SR", element: "水", alias: "Estilista del Píxel", pwr: 860 },
  { name: "IA", icon: "/icons/IA.svg", rarity: "SR", element: "月", alias: "Oráculo Digital", pwr: "∞" },
  { name: "C#", icon: "/icons/csharp-purple.png", rarity: "R", element: "火", alias: "Espada Poliglota", pwr: 820 },
  { name: "Linux", icon: "/icons/Linux.svg", rarity: "R", element: "竜", alias: "Domador de Terminales", pwr: 810 },
  { name: "Blazor", icon: "/icons/blazor-purple.svg", rarity: "R", element: "金", alias: "Hechicero WebAssembly", pwr: 800 },
  { name: "Mongo DB", icon: "/icons/MongoDB.png", rarity: "R", element: "空", alias: "Nómada NoSQL", pwr: 790 },
  { name: "MySQL", icon: "/icons/MySQL.png", rarity: "R", element: "土", alias: "Alquimista de Datos", pwr: 780 },
  { name: "SAP", icon: "/icons/SAP.svg", rarity: "R", element: "帝", alias: "Comandante ERP", pwr: 770 },
  { name: "HubSpot", icon: "/icons/HubSpot.svg", rarity: "R", element: "恋", alias: "Encantador de Leads", pwr: 760 },
  { name: "Jira", icon: "/icons/Jira.svg", rarity: "R", element: "策", alias: "Estratega de Sprints", pwr: 740 },
  { name: "HTML", icon: "/icons/HTML5.svg", rarity: "R", element: "木", alias: "Arquitecto del Web", pwr: 730 },
];

const STARS = { SSR: 5, SR: 4, R: 3 };

/* Una carta: latigazo 3D que sigue el mouse + holo que viaja con el cursor */
function SkillCard({ skill, index }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [holo, setHolo] = useState({ x: 50, y: 50 });
  const isBooster = skill.rarity.toLowerCase();

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({ rx: (0.5 - y) * 16, ry: (x - 0.5) * 18 });
    setHolo({ x: Math.round(x * 100), y: Math.round(y * 100) });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setHolo({ x: 50, y: 50 });
  };

  return (
    <motion.article
      className={`mythic-card mythic-card--${isBooster}`}
      initial={{ opacity: 0, y: 28, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: tilt.rx, rotateY: tilt.ry }}
      whileHover={{ scale: 1.07 }}
      style={{ transformPerspective: 900 }}
      transition={{
        opacity: { duration: 0.4, delay: index * 0.05 },
        y: { type: "spring", stiffness: 300, damping: 22, delay: index * 0.05 },
        scale: { type: "spring", stiffness: 320, damping: 20 },
        rotateX: { type: "spring", stiffness: 260, damping: 16 },
        rotateY: { type: "spring", stiffness: 260, damping: 16 },
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="mythic-rarity" aria-hidden="true">
        {skill.rarity}
      </span>
      <span className="mythic-element" aria-hidden="true">
        {skill.element}
      </span>

      <span className="mythic-stars" aria-hidden="true">
        {"✦".repeat(STARS[skill.rarity])}
      </span>

      <div
        className="mythic-medal"
        style={{ animationDelay: `${(index % 5) * 0.4}s` }}
      >
        <img src={skill.icon} alt={skill.name} loading="lazy" />
      </div>

      <h3 className="mythic-name">{skill.name}</h3>
      <p className="mythic-alias">{skill.alias}</p>
      <p className="mythic-pwr">
        PWR <strong>{skill.pwr}</strong>
      </p>

      {/* Velo holográfico que viaja con el mouse */}
      <div
        className="mythic-holo"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at ${holo.x}% ${holo.y}%, rgba(255, 240, 205, 0.55), transparent 58%)`,
        }}
      />
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        Skills
        <span className="jp-kicker" aria-hidden="true">
          技
        </span>
      </h2>
      <p className="skills-sub" aria-hidden="true">
        ✶ EL MAZO DEL GAUCHO ✶ 17 CARTAS ✶ COLECCIONALAS TODAS ✶
      </p>

      <div className="cards-grid">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
