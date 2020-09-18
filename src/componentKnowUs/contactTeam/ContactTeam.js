import React from "react";
import "./contactTeam.css";
import iconWhatsapp from "../../componentHome/images/icon-whatsapp.png";
import { Link } from "react-router-dom";

export const ContactTeam = () => {
  return (
    <>
      <section className="container-contact u-wrapper">
        <p className="contact-text-communicate">Comunícate</p>
        <p className="contact-text-queries">
          Por consultas referidas a proyectos o talleres puedes escribirme a:
          <br />
          DFHILO@ARTCADEMI.COM
        </p>
        <p className="contact-text-whatsapp">o Escribeme por WhatsApp</p>
        <div className="contact-container-button">
          <button className="contact-button">
            <Link to="/">
              <img
                className="contact-icon-whatsapp"
                src={iconWhatsapp}
                alt="img icon whatsapp"
              />
              Envíanos un mensaje
            </Link>
          </button>
        </div>
        {/* <p className="contact-p-dfhilo-junior">
          <span className="contact-text-dfhilo">dFhilo -</span>
          <span className="contact-text-junior"> Junior Portilla</span>
        </p>
        <p className="contact-text-designer">Diseñador</p> */}
      </section>
      <div className="contact-container-background"></div>
      <div className="carrusel-blog"></div>
    </>
  );
};
