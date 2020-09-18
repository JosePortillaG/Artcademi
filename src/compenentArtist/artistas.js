import React from "react";
import { HeroArtist } from "./heroArtist/HeroArtist";
import { MainArtist } from "./mainArtist/MainArtist";
import { Dfhilo } from "./dFhilo/dFhilo";
import { Footer } from "../component/Footer";
import { NinjArt } from "./ninjArt/NinjArt";

export const Artistas = () => {
  return (
    <>
      <HeroArtist />
      <MainArtist />
      <NinjArt />
      <Dfhilo />
      <Footer />
    </>
  );
};
