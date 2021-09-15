// ANCHOR Imports
import { useContext } from "react";
import { AppContext } from "../../store";

// ANCHOR Page
export default function Home() {
  const { state } = useContext(AppContext);
  console.log(state);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
