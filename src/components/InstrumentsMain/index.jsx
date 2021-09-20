// ANCHOR Imports
import ListInstruments from "./ListInstruments";

// ANCHOR Component
export default function InstrumentsMain() {
  // Component

  return (
    <section className="InstrumentsMain">
      <div className="container">
        <div className="intro">
          <h2>
            INSTRUMENTOS <strong>DESTAQUE</strong>
          </h2>
          <p>
            it is a long established fact that a reader will be distracted by
            the readable
          </p>
        </div>
        <div className="containerInstruments">
          <ListInstruments />
        </div>
      </div>
    </section>
  );
}
