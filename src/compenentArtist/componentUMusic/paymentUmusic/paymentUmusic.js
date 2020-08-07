import React from "react";
import "./paymentUmusic.css";
import ButtonContact from "../../contentArtist/ButtonContact";

export const PaymentUMusic = () => {
  return (
    <>
      <section className=" u-wrapper">
        <div className="container-payment-umusic-methods-all">
          <div className="container-payment-umusic-methods">
            <h2 className="main-ubrand-profile">
              Tu perfil de Artista en este espacio?
            </h2>
            <div className="payment-umusic-price">
              <p>
                Precio y formas de pago El costo del taller incluye apunte en
                formato digital con instrucciones y teoría de lo que veremos en
                cada clase. Valor promocional en JULIO con descuento del 30% del
                valor real.
              </p>
              Solo pagas:
              <p>México $600 pesos Mexicanos. (CLAbE).</p>
              <p>
                Colombia $108.000 pesos colombianos (PAYPAL o MERCADO PAGO).
              </p>
              <p>Perú $115 Soles. (PAYPAL o MERCADO PAGO).</p>
              <p>Bolivia $195 pesos Bolivianos. (PAYPAL o MERCADO PAGO).</p>
              <p>Argentina $1700 pesos Argentinos. (CBU).</p>
              <p>USA u$s 28 (PAYPAL o MERCADO PAGO).</p>
              <p>Europa €25 (PAYPAL)</p>
            </div>
            <div className="payment-umusic-methods">
              <p>PAGOS</p>
              <p>ARGENTINA</p>
              <p>
                Transferencia bancaria Marcelo Pellizo | DNI 22474053 - CBU
                2850301940017094947205 Caja de ahorro en pesos: 430101709494720
                ALIAS RUINA.SUELO.MARINO Banco MACRO
              </p>
              <p>
                Para Mercado Pago solicitar LINK de pago, se lo puede hacer con
                tarjeta de crédito o débito.
              </p>
              el precio es de 26 dólares.
              <p>MÉXICO</p>
              <p>
                Transferencia bancaria al número CLABE 646180157031860161 Banco
                STP a nombre de Marcelo Adrián Pellizo También puedes depositar
                en cualquier 7eleven para lo cual debes solicitarme el código de
                barras.
              </p>
              <p>RESTO DEL MUNDO</p>
              <p>
                Transferencia PAYPAL con el recargo de la comisión que el
                sistema Paypal cobra. www.paypal.me/pellizo
              </p>
              <p>
                el usuario de paypal a quien deben girar es pellizo@gmail.com
              </p>
              <p>¿QUIERES MAS INFO O INSCRIBIRTE?</p>
            </div>
          </div>
        </div>
        <ButtonContact />
        <p className="text-video-logo">Proceso de mi logo en video!</p>
      </section>
      <div className="carrusel-blog"></div>
    </>
  );
};
