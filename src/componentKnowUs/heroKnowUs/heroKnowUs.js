import React from "react";
import logoArtCademi from "../../component/images/artcademi-logo.svg";
import "./heroKnowUs.css";

export const HeroKnowUs = () => {
  return (
    <section className="u-wrapper">
      <h1 className="hero-know-title">
        <span className="text-education">Educación</span>
        <span className="text-creative"> creativa</span>
        <span className="text-through"> a travez</span>
        <span className="text-art"> del arte</span>
      </h1>
      <p className="hero-know-text">
        Somos la primera plataforma social de educación a través del arte,
        queremos genererar un contexto creativo y abierto. Está orientada para
        que personas con diferentes habilidades, (que tenga ganas de aprender
        cosas nuevas), puedan intercambiar sus conocimientos libremente con
        otros.
      </p>
      <div className="container-hero-know-logo">
        <img src={logoArtCademi} alt="logo artcademi" />
      </div>
    </section>
  );
};
