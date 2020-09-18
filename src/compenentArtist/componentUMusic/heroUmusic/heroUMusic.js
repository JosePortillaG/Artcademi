import React from "react";
import UHero from "../../contentArtist/Uhero";
import logodFhilo from "../../../componentHome/images/artcademi-logodfhilo.png";
import icondFhilo from "../../../componentHome/images/icon-dfhilo.png";
import iconYoutube from "../../../componentHome/images/icon-youtube.png";
import iconInstagram from "../../../componentHome/images/icon-instagram.png";
import "./heroUMusic.css";
export const HeroUMusic = () => {
  return (
    <section className="container-hero-umusic u-wrapper">
      <div className="container-umusic-all">
        <UHero
          title="Diseñemos"
          subtitle="Musica"
          textcontent="Hola, soy dFhilo y esta es mi imagen de artista, investigo mucho y puedo asesorarte diseñando tu flujo de trabajo musical, combino diseño gráfico con producción musical y tecnología móvil para crear mi música, quieres que te enseñe?."
        />
        <div className="music-container-img">
          <img src={logodFhilo} alt="diseño rectangulo de junior portilla" />
        </div>
        <div className="music-container-icon">
          <a href="https://www.behance.net/artcademi">
            <img src={iconYoutube} alt="icono behance" />
          </a>
          <a href="https://www.linkedin.com/in/juniorportilla/">
            <img src={iconInstagram} alt="icono linkedIn" />
          </a>
          <a href="https://www.linkedin.com/in/juniorportilla/">
            <img src={icondFhilo} alt="icono linkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};
