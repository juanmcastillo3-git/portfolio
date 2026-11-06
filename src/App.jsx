import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion"; // eslint-disable-line no-unused-vars -- `motion` se usa como <motion.section>/<motion.div> en JSX
import { FaHandPointer } from "react-icons/fa";
import Navbar from "./Navbar";
import Cover from "./Cover";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Educations from "./Educations";
import Contact from "./Contact";
import BookOpening from "./BookOpening";
import "./App.css";

/* ── Las hojas del libro, en orden de lectura (0 = tapa) ── */
const PAGES = [
  { id: "cover", Component: Cover },
  { id: "intro", Component: Intro },
  { id: "about", Component: About },
  { id: "experience", Component: Experience },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "education", Component: Educations },
  { id: "contact", Component: Contact },
];

/* El vuelo de hojas: la primera es inmediata, las demás encadenan
   a este ritmo para que se vea pasar cada página hasta destino */
const FIRST_STEP_DELAY = 60;
const STEP_DELAY = 520;
const HAND_LIFE = 950;

/* Variantes según el sentido del paso de hoja:
   - next: la hoja actual se levanta y gira hacia la izquierda (lomo)
   - prev: la hoja golpeada vuelve desde la izquierda */
const pageVariants = {
  next: {
    enter: { rotateY: 0, opacity: 0 },
    center: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -98, opacity: 0 },
  },
  prev: {
    enter: { rotateY: -98, opacity: 0 },
    center: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 0, opacity: 0 },
  },
};

const pageForHash = () => {
  const hash = window.location.hash.replace("#", "");
  if (hash === "" || hash === "cover") return 0;
  const i = PAGES.findIndex((p) => p.id === hash);
  return i === -1 ? 0 : i;
};

export default function App() {
  const [active, setActive] = useState(pageForHash);
  const [target, setTarget] = useState(null);
  const [turn, setTurn] = useState(null); // { dir: "next"|"prev", step }
  const [opening, setOpening] = useState(false);
  const dirRef = useRef("next");
  const stepCountRef = useRef(0);

  const goTo = useCallback((index) => {
    const next = Math.min(PAGES.length - 1, Math.max(0, index));
    stepCountRef.current = 0; // nueva navegación: primer paso inmediato
    setTarget((t) => (t === next ? t : next));
  }, []);

  const goToId = useCallback(
    (id) => {
      const i = PAGES.findIndex((p) => p.id === id);
      if (i !== -1) goTo(i);
    },
    [goTo]
  );

  /* ── Apertura cinematográfica: la tapa se abre y da paso a las hojas ── */
  const openingRef = useRef(false);
  const timersRef = useRef(new Set());

  const later = useCallback((fn, ms) => {
    const id = window.setTimeout(() => {
      timersRef.current.delete(id);
      fn();
    }, ms);
    timersRef.current.add(id);
  }, []);

  useEffect(
    () => () => timersRef.current.forEach((id) => clearTimeout(id)),
    []
  );

  const openBook = useCallback(() => {
    if (openingRef.current) return; // no se puede abrir dos veces a la vez
    openingRef.current = true;
    setOpening(true);
    /* mientras la escena se desvanece, el libro real pasa de la tapa
       a la primera hoja, así el aterrizaje es con pasada de página */
    later(() => goToId("intro"), 2450);
    later(() => {
      setOpening(false);
      openingRef.current = false;
    }, 3300);
  }, [goToId, later]);

  /* El que pasa las hojas: avanza de a UNA hasta llegar al destino.
     Así, bajar varias secciones desde el menú hace pasar cada hoja. */
  useEffect(() => {
    if (target === null) return;

    if (target === active) {
      setTarget(null);
      window.history.replaceState(
        null,
        "",
        active === 0 ? "#" : `#${PAGES[active].id}`
      );
      return;
    }

    const dir = target > active ? 1 : -1;
    dirRef.current = dir === 1 ? "next" : "prev";
    setTurn({ dir: dirRef.current, step: active });

    const delay = stepCountRef.current === 0 ? FIRST_STEP_DELAY : STEP_DELAY;
    stepCountRef.current += 1;
    const t = setTimeout(() => setActive(active + dir), delay);
    return () => clearTimeout(t);
  }, [active, target]);

  /* La mano deja de barrear cuando terminó la ronda de hojas */
  useEffect(() => {
    if (!turn) return;
    const t = setTimeout(() => setTurn(null), HAND_LIFE);
    return () => clearTimeout(t);
  }, [turn]);

  /* Pasar hoja con las flechas del teclado */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(active + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(active - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const custom = dirRef.current;
  const Current = PAGES[active].Component;

  return (
    <MotionConfig reducedMotion="user">
      <Navbar activeId={PAGES[active].id} onNavigate={goToId} />

      <main className="book-stage">
        <AnimatePresence mode="wait" initial={false} custom={custom}>
          <motion.section
            key={PAGES[active].id}
            className="book-page"
            custom={custom}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.3, 0.6, 0.3, 1] }}
            style={{ transformOrigin: "left center", transformPerspective: 1500 }}
          >
            {active === 0 ? (
              <Cover onOpen={openBook} />
            ) : active === 1 ? (
              <Intro onNavigate={goToId} />
            ) : (
              <Current />
            )}
          </motion.section>
        </AnimatePresence>

        {/* La manito que barrea las hojas durante el pasaje */}
        {turn && (
          <motion.div
            key={turn.step}
            className={
              turn.dir === "prev" ? "turn-hand turn-hand--back" : "turn-hand"
            }
            initial={{
              x: turn.dir === "next" ? "16vmin" : "-48vmin",
              y: 0,
              opacity: 0,
              rotate: turn.dir === "next" ? 10 : -10,
            }}
            animate={{
              x: turn.dir === "next" ? "-48vmin" : "16vmin",
              y: [-2, 5, 3, -2],
              opacity: [0, 1, 1, 0],
              rotate: turn.dir === "next" ? -18 : 16,
            }}
            transition={{
              duration: 0.9,
              times: [0, 0.15, 0.75, 1],
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            <FaHandPointer />
          </motion.div>
        )}
      </main>

      {/* Esquinas del libro: pasar hoja */}
      <div className="book-nav book-nav--left">
        <button
          className="book-page-btn"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Página anterior"
        >
          ◀
        </button>
      </div>

      <div className="book-nav book-nav--right">
        <span className="folio" aria-hidden="true">
          {active === 0
            ? "TAPA ✶"
            : `HOJA ${active} / ${PAGES.length - 1} ✶`}
        </span>
        <button
          className="book-page-btn"
          onClick={() => goTo(active + 1)}
          disabled={active === PAGES.length - 1}
          aria-label="Página siguiente"
        >
          ▶
        </button>
      </div>

      {/* La gran apertura: el libro se abre para tragarse la pantalla */}
      {opening && <BookOpening />}
    </MotionConfig>
  );
}
