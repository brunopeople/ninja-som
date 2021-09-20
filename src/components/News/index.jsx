// ANCHOR Imports

// ANCHOR Component
export default function News() {
  // Component
  return (
    <section className="news">
      <div className="containerNews">
        <div className="imageContainer">
          <img
            src="/images/pessoa_mexendo_em_uma_mesa_de_som.png"
            alt="Pessoa mexendo em uma mesa de som"
          />
        </div>
        <div className="infoContainer container">
          <h3>NOVIDADES</h3>
          <h2>
            <strong>ÁUDIO</strong> <br /> PROFISSIONAL
          </h2>
          <button type="button" className="btn newBtn">
            CONFIRA
          </button>
        </div>
      </div>
      <div className="containerNews">
        <div className="imageContainer">
          <img
            src="/images/homem_segurando_uma_guitarra_lg.png"
            alt="Pessoa mexendo em uma mesa de som"
          />
        </div>
        <div className="infoContainer container">
          <h3>NOVIDADES</h3>
          <h2>
            <strong>INSTRUMENTOS</strong> <br /> MUSICAIS
          </h2>
          <button type="button" className="btn newBtn">
            CONFIRA
          </button>
        </div>
      </div>
    </section>
  );
}
