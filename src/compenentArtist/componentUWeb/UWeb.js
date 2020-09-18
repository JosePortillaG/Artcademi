import React from "react";
import { HeroUWeb } from "./heroUweb/heroUweb";
import { Footer } from "../../componentHome/Footer";
import { MainUWeb } from "./mainUweb/mainUweb";
import { PaymentUWeb } from "./paymentUweb/paymentUweb";

export const UWeb = () => {
  return (
    <>
      <HeroUWeb />
      <MainUWeb />
      <PaymentUWeb />
      <Footer />
    </>
  );
};
