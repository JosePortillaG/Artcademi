import React from "react";
import backArtist from "../../componentHome/images/artcademi-bulletartista.png";
import imgHeroArtistas from "../../componentHome/images/artcademi-artistaslogo.svg";
import "./heroArtistas.css";
import { ButtonFollow } from "../../componentGlb/ButtonFollow/ButtonFollow";

export const HeroArtist = () => {
  return (
    <section className="container-hero-artist u-wrapper">
      <div className="container-all-hero-artist">
        <div className="container-img-artist">
          <img
            className="heroartis-background"
            src={backArtist}
            alt="img fondo con diferentes disciplinas"
          />
          <div className="heroartis-container-logo-community">
            <img
              className="img-hero-artist"
              src={imgHeroArtistas}
              alt="img artistas comunidad"
            />
            <p className="hero-text-community">Comunidad</p>
          </div>
        </div>
        <div className="container-hero-artist-text">
          <h1 className="main-title">
            <span className="text-1">Un espacio</span>
            <span className="text-2"> para </span>
            <span className="text-3"> mostrar</span>
            <span className="text-4"> tu arte.</span>
          </h1>
          <p className="hero-text-artist-paragraph">
            Queremos reunir referentes en diversas áreas, en este espacio que
            llamamos Artistas, porque creemos en el potencial de Latinoamérica y
            lo vamos a mostrar al mundo.
          </p>
          <ButtonFollow />
        </div>
      </div>
    </section>
  );
};
