import React from "react";
import fondopatreon from "../images/fondo-patreon.png";
import patreon from "../images/logo-patreon.svg";
import memberorange from "../images/artcademi-naranjaescudo.png";
import memberblue from "../images/artcademi-azulescudo.png";
import memberpurple from "../images/artcademi-purpuraescudo.png";
import "./members.css";

export const Members = () => {
  return (
    <section className="members-container-all u-wrapper">
      <div className="members-container-main">
        <div className="members-container-title">
          <p className="members-text-main">
            <span className="members-text-1">Ponte la camisa </span>
            <span className="members-text-2">
              <span className="know-a">A</span>
              <span className="know-r">r</span>
              <span className="know-t">t</span>
              cademi, Porque
            </span>
            <span className="members-text-3"> unidos</span>
            <span className="members-text-4"> podemos.</span>
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
