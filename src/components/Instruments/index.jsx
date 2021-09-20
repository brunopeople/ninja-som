// ANCHOR Imports
import React from "react";
import { Link } from "react-router-dom";

// ANCHOR Component
export default function Instrument() {
  return (
    <section className="instrumentsSection">
      <div className="container">
        <div className="instrumentCard">
          <Link to="/">
            <div className="containerImage">
              <img
                src="/images/homem_tocando_guitarra.png"
                alt="Homem tocando guitarra"
              />
            </div>
            <h2>GUITARRAS</h2>
          </Link>
        </div>

        <div className="instrumentCard">
          <Link to="/">
            <div className="containerImage">
              <img
                src="/images/microfone_perto_de_um_som.png"
                alt="Micrfone perto de uma caixa de som"
              />
            </div>
            <h2>MICROFONES</h2>
          </Link>
        </div>

        <div className="instrumentCard">
          <Link to="/">
            <div className="containerImage">
              <img src="/images/mesa_de_som.png" alt="Mesa de som" />
            </div>
            <h2>MESA DE SOM</h2>
          </Link>
        </div>

        <div className="instrumentCard">
          <Link to="/">
            <div className="containerImage">
              <img
                src="/images/maos_tocando_teclado.png"
                alt="Mãos tocando teclado"
              />
            </div>
            <h2>TECLADOS</h2>
          </Link>
        </div>

        <div className="instrumentCard">
          <Link to="/">
            <div className="containerImage">
              <img src="/images/violao.png" alt="Violão deitado" />
            </div>
            <h2>VIOLAO</h2>
          </Link>
        </div>

        <div className="instrumentCard">
          <Link to="/">
            <div className="containerImage">
              <img src="/images/bateria.png" alt="Bateria vermelha" />
            </div>
            <h2>BATERIAS</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
