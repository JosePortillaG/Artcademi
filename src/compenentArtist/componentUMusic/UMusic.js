import React from "react";
import { HeroUMusic } from "./heroUmusic/heroUMusic";
import { MainUMusic } from "./mainUmusic/MainUMusic";
import { PaymentUMusic } from "./paymentUmusic/paymentUmusic";
import { Footer } from "../../component/Footer";

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
