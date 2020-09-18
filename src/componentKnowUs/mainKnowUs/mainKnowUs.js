import React from "react";
import "./mainKnowUs.css";
import { ArtLogo } from "../../componentGlb/Artlogo/ArtLogo";
import imgArt from "../../componentHome/images/artcademi-logo.svg";
import { PhotoCard } from "../contentTeam/photocard";
import CardDesign from "../contentTeam/CardDesign";

const cardListData = [
  {
    id: 1,
    title: "creamos la imagen de tu marca",
    // subtitle: "Desarrollemos juntos tu marca.",
    textcontent: `Desarrollemos juntos tu marca. El diseño de la imagen, es una parte esencial
    para cualquier proyecto. Diseñemos juntos tu logo desde cero,
    para que tu marca se diferencie del resto, transmita
    personalidad y tenga un propósito claro.`,
  },
  {
    id: 2,
    title: "planeamos tu campaña digital",
    // subtitle: "¿Quieres crear tu propia música?",
    textcontent: `¿Quieres crear tu propia música? La música siempre ha estado a mi lado, por eso desde hace 4 años,
    vengo desarrollando mi propio método para crear beats. En mis clases
    ONLINE te muesto todo lo que se y te dejo listo para que empieces con
    el pie derecho en este hermoso arte del beatmaking.`,
  },
  {
    id: 3,
    title: "diseñamos tu web",
    // subtitle: "¿Te gusta el diseño de Artcademi.com?",
    textcontent: `¿Te gusta el diseño de Artcademi.com? Junto a mi hermano josee y nuestro equipo de expertos, construiremos
    tu sitio web soñado, que se ajuste a lo que necesitas en este nuevo
    mercado electrónico, y estar en el mapa del mundo de hoy.`,
  },
];
export const MainKnowUs = () => {
  return (
    <>
      <div className="container-logo-main">
        <ArtLogo Logo={imgArt} subtitle={"Equipo"} />
      </div>
      <section className="u-wrapper">
        <div className="container-main-photo-card">
          <PhotoCard
            name="junior portilla"
            position="CEO y Executive Producer"
          />
          <PhotoCard name="paula camona" position="Creative Producer" />
          <PhotoCard name="jose portilla" position="Programador Web" />
          <PhotoCard name="negrito" position="Gato Ninja" />
        </div>
        <div className="container-card">
          {cardListData.map(({ id, title, subtitle, textcontent }) => (
            <CardDesign
              key={id}
              title={title}
              subtitle={subtitle}
              textcontent={textcontent}
            />
          ))}
        </div>
      </section>
    </>
  );
};
