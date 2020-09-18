import React from "react";
import { HeroUMusic } from "./heroUmusic/heroUMusic";
import { MainUMusic } from "./mainUmusic/MainUMusic";
import { PaymentUMusic } from "./paymentUmusic/paymentUmusic";
import { Footer } from "../../componentHome/Footer";

export const UMusic = () => {
  return (
    <>
      <HeroUMusic />
      <MainUMusic />
      <PaymentUMusic />
      <Footer />
    </>
  );
};
