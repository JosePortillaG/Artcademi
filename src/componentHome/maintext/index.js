import React from "react";
import "./maintext.css";
import CuadroArt from "../images/artcademi-fondo1X2.png";
import fondoText from "../images/fondo-patreon.png";

export const MainText = () => {
  return (
    <section className="maintext-container-all u-wrapper">
      <div className="maintext-container-img-text">
        <div className="maintext-container-img">
          <img src={CuadroArt} alt="imagen de ninjito el gato ninja" />
        </div>
        <h1 className="maintext-title">
          <span className="maintext-education">Educación</span>
          <span className="maintext-creative"> creativa</span>
          <span className="maintext-through"> a través del</span>
          <span className="maintext-art"> arte</span>
        </h1>
        <p className="main-text-paragraph-one">
          Somos la plataforma social de artistas, educadores, y toda persona que
          quiera iniciar su propio camino en cualquier profesión.
          <br />
          Hemos creado un contexto creativo y abierto. Un lugar para seguir y
          apoyar a esa persona que admiramos, encontrar un maestro para aprender
          una nueva disciplina, encontrar a tus próximos estudiantes u obtener
          la ayuda de un profesional para solucionar algún problema de tu
          empresa.
        </p>
      </div>
      <div className="maintext-container-paragraph-sentence">
        <div className="maintext-container-sentence">
          <img src={fondoText} alt="fondo del texto educativo" />
          <p className="maintext-sentence-text">
            "La educación evoluciona nutrida <br />
            por la comunicación abierta <br />y la investigación de sí mismo."
          </p>
        </div>
        <p className="main-text-paragraph-two">
          Está orientada para que personas con diferentes habilidades, (que
          tengan ganas de aprender cosas nuevas), puedan intercambiar sus
          conocimientos libremente con otros. <br />
          Nuestra plataforma va a permitir el apoyo mutuo entre usuarios, un
          espacio que tenga conciencia de que las personas se pueden ayudar
          entre sí y más en este momento de cambio a nivel global, en donde se
          necesitan nuevas formas de educación. Además se apoya el trabajo de
          los artistas para darse a conocer y llegar a personas que de otra
          forma no accederán tan fácil a su contenido.
        </p>
      </div>
    </section>
  );
};
