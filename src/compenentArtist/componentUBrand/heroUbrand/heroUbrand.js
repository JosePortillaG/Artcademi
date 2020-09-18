import React from "react";
import bulletJunior from "../../../componentHome/images/artcademi-bulletjunior.png";
import iconBe from "../../../componentHome/images/icon-be.png";
import iconIn from "../../../componentHome/images/icon-linkedin.png";
import "./heroUbrand.css";
import UHero from "../../contentArtist/Uhero";

export const HeroUBrand = () => {
  return (
    <section className="container-hero-ubrand u-wrapper">
      <div className="container-ubrand-all">
        <UHero
          title="Diseño"
          subtitle="Marca"
          textcontent="Hola, soy Junior Portilla y esta es mi Marca personal, soy
            profesional en esto y puedo asesorarte diseñando tu marca
            profesional, o el logo para tu empresa, o la imagen para tu proyecto
            artístico."
        />
        <div className="brand-container-img">
          <img src={bulletJunior} alt="diseño rectangulo de junior portilla" />
        </div>
        <div className="brand-container-icon">
          <a href="https://www.behance.net/artcademi">
            <img src={iconBe} alt="icono behance" />
          </a>
          <a href="https://www.linkedin.com/in/juniorportilla/">
            <img src={iconIn} alt="icono linkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};
