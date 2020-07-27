import React from "react";
import { HeroArtist } from "./heroArtist/HeroArtist";
import { MainArtist } from "./mainArtist/MainArtist";
import { Dfhilo } from "./dFhilo/dFhilo";
import { ContactArtist } from "./contactArtist/ContactArtist";
import { Footer } from "../component/Footer";

export const Artistas = () => {
  return (
    <>
      <HeroArtist />
      <MainArtist />
      <Dfhilo />
      <ContactArtist />
      <Footer />
    </>
  );
};
