import React from "react";
import backArtist from "../../component/images/artcademi-bulletartista.png";
import imgHeroArtistas from "../../component/images/artcademi-artistaslogo.svg";
import "./heroArtistas.css";
import { ButtonFollow } from "../../componentGlb/ButtonFollow/ButtonFollow";

export const HeroArtist = () => {
  return (
    <section className="container-hero-artist u-wrapper">
      <div className="container-img-artist">
        <img src={backArtist} alt="img fondo con diferentes disciplinas" />
        <img
          className="img-hero-artist"
          src={imgHeroArtistas}
          alt="img artistas comunidad"
        />
      </div>
      <h1 className="hero-text-artist">
        <span className="text-artist-1">Un espacio</span>
        <span className="text-artist-2"> para </span>
        <span className="text-artist-3"> mostrar</span>
        <span className="text-artist-4"> lo que somos.</span>
      </h1>
      <p className="hero-text-artist-paragraph">
        Queremos reunir referentes en diversas áreas, en este espacio que
        llamamos Artistas, porque creemos en el potencial de Latinoamérica y lo
        vamos a mostrar al mundo.
      </p>
      <ButtonFollow />
    </section>
  );
};
