import React from "react";
import logoArtCademi from "../../component/images/artcademi-logo.svg";
import "./heroKnowUs.css";
import { ArtLogo } from "../../componentGlb/Artlogo/ArtLogo";

export const HeroKnowUs = () => {
  return (
    <section className="u-wrapper">
      <div className="container-logo-team">
        <ArtLogo Logo={logoArtCademi} subtitle={"Equipo"} />
      </div>
      <h1 className="hero-know-title">
        <span className="text-1">Se necesita</span>
        <span className="text-2"> un poco</span>
        <span className="text-4"> más</span>
        <span className="text-3"> de corazón</span>
        <span className="text-2"> en todo.</span>
      </h1>
      <p className="hero-know-text">
        El equipo de Artcademi de expertos en marketing digital, diseño web y
        programación, se encuentra en constante desarrollo y crecimiento para el
        desarrollo de cualquier proyecto, por eso ofrecemos nuestros servicios
        para todo el que quiera iniciar su propio camino, y así como nuestro
        equipo le pone corazón a Artcademi así le vamos a poner de ganas a tu
        proyecto!
        <br />
        Todas las acciones del equipo de trabajo de Artcademi, están encaminadas
        a beneficiar los proyectos y programas que queremos realizar en
        Latinoamérica para el desarrollo de nuestra región. Los recursos netos
        que se recauden por concepto de prestación de servicios o venta de
        productos, se destinaran a cubrir el desarrollo de los proyectos y
        beneficios de nuestra comunidad así como el mejoramiento de la
        plataforma para ir implementando comunicación entre todos.
      </p>
    </section>
  );
};
