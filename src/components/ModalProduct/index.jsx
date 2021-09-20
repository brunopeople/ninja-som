// ANCHOR Imports
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// ANCHOR Component
export default function ModalProduct(props) {
  const { product } = props;
  // const [price, setPrice] = useState(0);
  const [closeModalProduct, setCloseModalProduct] = useState(false);

  // Formatando preço
  // function formatPrice(priceValue) {
  //   const priceString = priceValue.toString();
  //   const formatedPrice = `${priceString.slice(0, -2)},${priceString.slice(
  //     -2
  //   )}`;
  //   setPrice(formatedPrice);
  // }

  // Fechando o modal do produto
  function closeModal(e) {
    e.preventDefault();
    setCloseModalProduct(true);
  }

  useEffect(() => {
    console.log(product);
    if (closeModalProduct) {
      console.log("fexo");
    }
  }, [product, closeModalProduct]);

  // console.log(product);

  // Component
  return (
    <div className="modalProduct">
      {/* <p>{formatPrice(product.price)}</p> */}
      <button
        type="button"
        className="buttonClose"
        onClick={(e) => {
          closeModal(e);
        }}
      >
        X
      </button>
    </div>
  );
}

ModalProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
};

ModalProduct.defaultProps = {
  product: {},
};