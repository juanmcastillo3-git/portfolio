import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-content">
        <img
          src="/contact-illustration.png"
          alt="Contact Illustration"
          className="contact-image"
        />

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>tuemail@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+54 11 1234 5678</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

          <a href="mailto:tuemail@example.com" className="contact-button">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}
