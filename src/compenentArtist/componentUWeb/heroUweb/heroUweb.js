import React from "react";
import bulletCom from "../../../componentHome/images/artcademi-bulletcom.png";
import icondFhilo from "../../../componentHome/images/icon-dfhilo.png";
import iconBe from "../../../componentHome/images/icon-be.png";
import iconIn from "../../../componentHome/images/icon-linkedin.png";
import "./heroUweb.css";
import UHero from "../../contentArtist/Uhero";

export const HeroUWeb = () => {
  return (
    <section className="container-hero-uweb u-wrapper">
      <div className="container-uweb-all">
        <UHero
          title="Diseñamos"
          subtitle="Web"
          textcontent="Hola, soy Junior Portilla y junto a mi hermano Josee y nuestro equipo de expertos, construiremos tu sitio web soñado, que se ajuste a lo que necesitas en este nuevo mercado electrónico, y estar en el mapa del mundo de hoy."
        />
        <div className="web-container-img">
          <img src={bulletCom} alt="dibujo computador artcademi" />
        </div>
        <div className="web-container-icon">
          <a href="https://www.behance.net/artcademi">
            <img src={iconBe} alt="icono behance" />
          </a>
          <a href="https://www.behance.net/artcademi">
            <img src={iconIn} alt="icono linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/juniorportilla/">
            <img src={icondFhilo} alt="icono dfhilo" />
          </a>
        </div>
      </div>
    </section>
  );
};
