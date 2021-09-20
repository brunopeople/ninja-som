// ANCHOR Imports
import Hero from "../../components/Hero";
import Instruments from "../../components/Instruments";
import News from "../../components/News";
import InstrumentsMain from "../../components/InstrumentsMain";

// ANCHOR Page
export default function Home() {
  return (
    <>
      <Hero />
      <Instruments />
      <News />
      <InstrumentsMain />
    </>
  );
}
