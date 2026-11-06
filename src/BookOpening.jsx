import { useMemo } from "react";
import "./BookOpening.css";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

/* ── Cinemática: el libro se abre y traga la pantalla ──
     0.0→0.9s: el tomo voltiado queda grande en el centro
     1.0→1.8s: la tapa vira sobre el lomo (-167°)
     1.25s: se asoma la HOJA 1 + chispazo dorado
     1.5s→2.4s: hojas que revolotean
     1.2s→3.2s: brasas y estrellitas que suben
     2.6s→3.2s: la escena se desvanece hacia la primera hoja */

const FLUTTER = [0, 1, 2, 3];

export default function BookOpening() {
  const sparks = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        char: i % 3 === 0 ? "✶" : "✦",
        left: `${6 + ((i * 47) % 88)}%`,
        size: 11 + ((i * 23) % 20),
        delay: 1.15 + ((i * 149) % 1100) / 1000,
        dur: 1.7 + ((i * 59) % 90) / 100,
        gold: i % 2 === 0,
      })),
    []
  );

  return (
    <motion.div
      className="book-opening"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 3.2, times: [0, 0.08, 0.8, 1], ease: "linear" }}
      role="presentation"
      aria-hidden="true"
    >
      <div className="bo-sky" />
      <div className="bo-fireglow" />

      {/* brasas que suben durante la apertura */}
      {sparks.map((s, i) => (
        <span
          key={i}
          className={s.gold ? "bo-spark bo-spark--gold" : "bo-spark"}
          style={{
            left: s.left,
            fontSize: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        >
          {s.char}
        </span>
      ))}

      <motion.div
        className="bo-stage"
        initial={{ scale: 0.55, y: 240, opacity: 0 }}
        animate={{ scale: [0.55, 1.02, 1], y: [240, -8, 0], opacity: 1 }}
        transition={{
          duration: 1.0,
          times: [0, 0.85, 1],
          ease: [0.22, 1.3, 0.36, 1],
        }}
        style={{ transformPerspective: 1400 }}
      >
        <motion.div
          className="bo-book"
          initial={{ rotateX: 46 }}
          animate={{ rotateX: 22 }}
          transition={{ duration: 1.0, ease: [0.22, 1.2, 0.36, 1] }}
        >
          {/* bloque de páginas derecho (se ve al abrirse) */}
          <div className="bo-block" />

          {/* hoja 1: lo primero que revela el libro */}
          <motion.div
            className="bo-page-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.35 }}
          >
            <span className="bo-page-kicker">ご開巻 ✶ HOJA 1</span>
            <span className="bo-page-title">Bienvenido</span>
            <span className="bo-page-star" aria-hidden="true">
              ✶ ✶ ✶
            </span>
          </motion.div>

          {/* hojas que revolotean al pasar el viento de la apertura */}
          {FLUTTER.map((i) => (
            <motion.span
              key={i}
              className="bo-flutter"
              initial={{ rotateY: -6, opacity: 0.95 }}
              animate={{ rotateY: -155, opacity: 0 }}
              transition={{
                delay: 1.5 + i * 0.18,
                duration: 0.55,
                ease: "easeIn",
              }}
            />
          ))}

          {/* contrapicado: la tapa se despega sobre el lomo */}
          <motion.div
            className="bo-front"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -168 }}
            transition={{ delay: 1.0, duration: 0.85, ease: [0.6, 0, 0.3, 1] }}
          >
            <span className="bo-face">
              <span className="bo-face-ornament" aria-hidden="true">
                ❯ ✶ ✶ ✶ ❮
              </span>
              <span className="bo-face-title">GAUCHO</span>
              <span className="bo-face-kana" aria-hidden="true">
                ガウチョ
              </span>
              <span className="bo-face-ornament" aria-hidden="true">
                ❯ ✶ ✶ ✶ ❮
              </span>
            </span>
            <span className="bo-faceback" />
          </motion.div>

          {/* chispazo de luz cuando la tapa se abre */}
          <motion.span
            className="bo-burst"
            initial={{ scale: 0, opacity: 0.95 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{ delay: 1.05, duration: 0.95, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
