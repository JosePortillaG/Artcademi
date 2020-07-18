import React from "react";
import fondopatreon from "../images/fondo-patreon.png";
import patreon from "../images/logo-patreon.svg";
import memberorange from "../images/artcademi-naranja.png";
import memberblue from "../images/artcademi-azul.png";
import memberpurple from "../images/artcademi-purpura.png";
import "./members.css";

export const Members = () => {
  return (
    <section className="contact u-wrapper">
      <div className="known-container-main">
        <div className="container-text-known">
          <p className="known-text-main">
            <span className="known-text-1">Conoce</span>
            <span className="known-text-2"> nuestras</span>
            <span className="known-text-3"> membresías.</span>
          </p>
        </div>
        <div className="container-button-knowUs">
          <img
            className="fondo-patreon"
            src={fondopatreon}
            alt="img de fondo de patreon"
          />
          <button className="button-knowUs">
            <a href="#">
              <img
                className="logo-patreon-known"
                src={patreon}
                art="logo patreon"
              />
            </a>
          </button>
        </div>
        <div className="container-contact-text">
          <p className="contact-text-content">
            Si quieres apoyarnos para seguir creando contenido y mejorar
            Artcademi para beneficio de todos, puedes donar en nuestro Patreon y
            conseguir recompensas exclusivas.
          </p>
        </div>
      </div>
      <div className="container-contact-member">
        <img
          className="member-orange"
          src={memberorange}
          alt="membresia naranja"
        />
        <img className="member-blue" src={memberblue} alt="membresia azul" />
        <img
          className="member-purple"
          src={memberpurple}
          alt="membresia purpura"
        />
      </div>
    </section>
  );
};
