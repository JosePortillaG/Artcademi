import React from "react";
import { HeroKnowUs } from "./heroKnowUs/heroKnowUs";
import { MainKnowUs } from "./mainKnowUs/mainKnowUs";
import { TeamKnowUS } from "./teamKnowUs/teamKnowUs";
import { ContactTeam } from "./contactTeam/ContactTeam";
import { Footer } from "../componentHome/Footer";

export const KnowUs = () => {
  return (
    <>
      <HeroKnowUs />
      <MainKnowUs />
      <TeamKnowUS />
      <ContactTeam />
      <Footer />
    </>
  );
};
