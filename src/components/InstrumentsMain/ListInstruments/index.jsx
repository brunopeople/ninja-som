// ANCHOR Imports
import { useContext, useEffect, useState } from "react";
import CardInstrument from "../../CardInstrument";
import { AppContext } from "../../../store";

// ANCHOR Component
export default function ListInstruments() {
  const [listProducts, setListProducts] = useState([]);
  const { state } = useContext(AppContext);

  useEffect(() => {
    setListProducts(state.data.products);
  }, [state]);

  // console.log(listProducts);

  // Component
  return (
    <>
      {listProducts.map((product) => (
        <CardInstrument product={product} key={product.productName} />
      ))}
    </>
  );
}
