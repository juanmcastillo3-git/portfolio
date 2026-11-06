import React, { useState } from "react";
import "./contact.css";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

/* ── Contacto: mensajería a caballo hacia la casilla real ── */
const EMAIL = "juanmcastillo3@gmail.com";
const MAX_MSG = 1000; // límite del mensaje: entre 500 y 1000 → usamos 1000

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", asunto: "", mensaje: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  /* Plan B: si el servicio falla, abrimos el correo del visitante
     con la carta ya armada y dirigida a la casilla */
  const mailtoHref = () =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(
      form.asunto || "Contacto desde el portfolio"
    )}&body=${encodeURIComponent(
      `Nombre: ${form.nombre}\n\n${form.mensaje}`
    )}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      /* FormSubmit despacha el correo hasta la casilla sin backend propio.
          ⚠ El primer envío manda un mail de activación a la casilla:
          hay que confirmarlo UNA vez y de ahí en adelante todo llega solo. */
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: form.nombre,
          Mensaje: form.mensaje,
          _subject: `Portfolio ✶ ${form.nombre}: ${form.asunto}`,
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if (data.success !== "true" && data.success !== true) {
        throw new Error("El servicio no aceptó la carta");
      }

      setStatus("sent");
      setForm({ nombre: "", asunto: "", mensaje: "" });
    } catch {
      setStatus("error");
      setError(
        "El mensajero perdió el rastro (¿sin conexión?). Podés enviar la carta igual:"
      );
    }
  };

  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">
        Contact<span className="jp-kicker" aria-hidden="true">連絡</span>
      </h2>

      <div className="contact-content">
        <div className="contact-side">
          <img
            src="/contact-illustration.svg"
            alt="Sobre postal vintage volando bajo el cielo estelar de la pampa"
            className="contact-image"
          />

          <div className="contact-info">
            <a
              className="contact-item"
              href="https://w.app/cgt5jw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>Tocá acá y hablamos ✓</p>
              </div>
            </a>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Formulario de carta sellada, ocupa su propia columna ── */}
        <form className="contact-form" onSubmit={onSubmit}>
            <label className="contact-label">
              Nombre
              <input
                type="text"
                name="nombre"
                required
                maxLength={80}
                placeholder="¿Quién escribe?"
                value={form.nombre}
                onChange={set("nombre")}
              />
            </label>

            <label className="contact-label">
              Asunto
              <input
                type="text"
                name="asunto"
                required
                maxLength={120}
                placeholder="Motivo"
                value={form.asunto}
                onChange={set("asunto")}
              />
            </label>

            <label className="contact-label">
              Mensaje
              <textarea
                name="mensaje"
                required
                maxLength={MAX_MSG}
                rows={6}
                placeholder="Escribí tu mensaje…"
                value={form.mensaje}
                onChange={set("mensaje")}
              />
            </label>
            <div className="contact-counter" aria-live="polite">
              {form.mensaje.length} / {MAX_MSG} ✶ máx. {MAX_MSG}
            </div>

            <button
              type="submit"
              className="contact-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Despachando…✓" : "Enviar mensaje ✈"}
            </button>

            {status === "sent" && (
              <p className="contact-success">
                ¡Carta despachada! 📬 Te respondo a la brevedad.
              </p>
            )}

            {status === "error" && (
              <p className="contact-error">
                {error}{" "}
                <a href={mailtoHref()}>
                  <strong>abrir tu correo con la carta ya armada</strong>
                </a>
              </p>
            )}
          </form>
      </div>
    </section>
  );
}
