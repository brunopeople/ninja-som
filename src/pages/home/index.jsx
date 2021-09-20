// ANCHOR Imports
// import { useContext } from "react";
// import { AppContext } from "../../store";
import Hero from "../../components/Hero";
import Instruments from "../../components/Instruments";
import News from "../../components/News";

// ANCHOR Page
export default function Home() {
  // const { state } = useContext(AppContext);
  // console.log(state);

  return (
    <>
      <Hero />
      <Instruments />
      <News />
    </>
  );
}
