import { FaHandPointer } from "react-icons/fa";
import "./Cover.css";

/* ── Escenario: el dibujo criollo nocturno de fondo
      (guitarra, fogón, parrilla, mate, vino y empanadas)
      con el libro GAUCHO apoyado en la mesa ── */
export default function Cover({ onOpen }) {
  return (
    <section className="cover" aria-label="Un libro GAUCHO sobre la mesa de la pulpería">
      <div className="cover-veil" aria-hidden="true" />

      {/* El libro: protagonista, clickeable */}
      <button
        type="button"
        className="cover-book"
        onClick={() => onOpen?.()}
        aria-label="Abrir el libro GAUCHO"
      >
        <span className="cover-book-spine" aria-hidden="true" />
        <span className="cover-book-pages" aria-hidden="true" />
        <span className="cover-book-face">
          <span className="cover-book-ornament" aria-hidden="true">
            ❯ ✶ ✶ ✶ ❮
          </span>
          <span className="cover-book-title">GAUCHO</span>
          <span className="cover-book-kana" aria-hidden="true">
            ガウチョ
          </span>
          <span
            className="cover-book-ornament cover-book-ornament--bottom"
            aria-hidden="true"
          >
            ❯ ✶ ✶ ✶ ❮
          </span>
        </span>
        <span className="cover-book-shadow" aria-hidden="true" />
      </button>

      <div className="cover-hint" aria-hidden="true">
        <FaHandPointer className="cover-hint-hand" />
        <span>tapá el libro para abrirlo</span>
      </div>
    </section>
  );
}
