import React from "react";
import ImgHero from "../images/landing-jdilla.png";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero-main u-wrapper">
      <div className="hero-768">
        <div className="hero-container">
          <img
            className="hero-img"
            src={ImgHero}
            alt="Jdilla haceindo musica"
          />
        </div>
        <div className="hero-768-2">
          <h1 className="hero-text-uniendo">
            <span className="text-1">Uniendo </span>
            <span className="text-2">puntos,</span>
            <br />
            <span className="text-3">conectando</span>
            <span className="text-4"> ideas.</span>
          </h1>
          <p className="hero-text-creativo">
            Proponemos un entorno creativo,para personas que piensen en la
            educación como la herramienta para comenzar la construccion de sus
            seños.
          </p>
          <div className="hero-container-button">
            <button className="hero-button">
              <a href="#">¡Recibe nuestro regalo de bienvenida!</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
