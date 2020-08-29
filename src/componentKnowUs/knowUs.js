import React from "react";
import { HeroKnowUs } from "./heroKnowUs/heroKnowUs";
import { MainKnowUs } from "./mainKnowUs/mainKnowUs";
import { TeamKnowUS } from "./teamKnowUs/teamKnowUs";

export const KnowUs = () => {
  return (
    <>
      <HeroKnowUs />
      <MainKnowUs />
      <TeamKnowUS />
    </>
  );
};
