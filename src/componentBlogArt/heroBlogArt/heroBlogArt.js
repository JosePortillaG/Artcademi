import React from "react";
import joseFoto from "../../componentHome/images/artcademi-joseefoto.png";
import jdilla from "../../componentHome/images/landing-jdilla.png";
import "./heroBlogArt.css";

export const HeroBlogArt = () => {
  return (
    <section className="container-hero-blog-all u-wrapper">
      <div className="container-hero-blog-title">
        <h1 className="hero-blog-title">
          <span className="blog-title-jdilla">J Dilla :</span>
          <br />
          <span className="blog-title-hands">Manos doradas</span>
        </h1>
        <p className="blog-text">
          No hay un proceso mágico para crear algo de magnitud.
        </p>
      </div>
      <div className="container-author">
        <img className="blog-img-author" src={joseFoto} alt="foto de autor" />
        <div>
          <p>
            Por <span className="blog-name-author">Jose Portilla</span>
          </p>
          <p>9 de Mayo 2020</p>
        </div>
      </div>
      <div className="container-blog-jdilla">
        <img className="blog-img-jdilla" src={jdilla} alt="imagen jdilla" />
        <p className="blog-illustrator-author">Ilustración Junior Portilla</p>
      </div>
    </section>
  );
};
