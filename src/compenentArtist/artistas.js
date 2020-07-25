import React from "react";
import { HeroArtist } from "./heroArtist/HeroArtist";
import { MainArtist } from "./mainArtist/MainArtist";
import { Dfhilo } from "./dFhilo/dFhilo";

export const Artistas = () => {
  return (
    <>
      <HeroArtist />
      <MainArtist />
      <Dfhilo />
    </>
  );
};
