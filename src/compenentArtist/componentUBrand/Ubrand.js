import React from "react";
import { HeroUBrand } from "./heroUbrand/heroUbrand";
import { MainUBrand } from "./mainUbrand/MainUBrand";
import { PaymentUBrand } from "./paymentUbrand/paymentUBrand";
import { Footer } from "../../component/Footer";
export const UBrand = () => {
  return (
    <>
      <HeroUBrand />
      <MainUBrand />
      <PaymentUBrand />
      <Footer />
    </>
  );
};
