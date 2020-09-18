import React from "react";
import ImgHero from "../images/landing-jdilla.png";
import ImgPulgar from "../images/artcademi-manito.png";
import backgrouund from "../images/fondo-patreon.png";

import "./hero.css";
import { Link } from "react-router-dom";
import { ButtonFollow } from "../../componentGlb/ButtonFollow/ButtonFollow";

export const Hero = () => {
  return (
    <section className="hero-main">
      <div className="hero-768 u-wrapper">
        <div className="hero-container">
          <img
            className="hero-img"
            src={ImgHero}
            alt="Jdilla haceindo musica"
          />
        </div>
        <div className="hero-768-2">
          <h1 className="main-title">
            <span className="text-1">Uniendo </span>
            <span className="text-2">puntos,</span>
            <br />
            <span className="text-3">conectando</span>
            <span className="text-4"> ideas.</span>
          </h1>
          <p className="hero-text-creativo">
            Proponemos un entorno creativo, para personas que piensen en la
            educación como la herramienta para comenzar la construcción de sus
            sueños.
          </p>
          <ButtonFollow />
        </div>
      </div>
      <div className="hero-container-768">
        <div className="hero-container-thumb">
          <img className="thumb-up" src={ImgPulgar} alt="pulgar arriba" />
        </div>
        <div className="hero-tex-container">
          <p className="hero-text-connect">
            Conecta
            <span className="hero-text-point-connect"> los puntos</span>
          </p>
          <div className="hero-container-follow-button">
            <p className="hero-text-follow">
              y sigue tu corazón asi <br />
              como el beatmaker
            </p>
            <div className="hero-container-button-jdilla">
              <button className="hero-button-jdilla">
                <Link to="/blogart">J Dilla</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-container-follow">
          <img src={backgrouund} alt="fondo decorativo del texto" />
          <p className="hero-text-art">
            Seguir nuestro
            <br />
            camino es un
            <span className="arte-1"> a</span>
            <span className="arte-2">r</span>
            <span className="arte-3">t</span>
            <span className="arte-4">e.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
