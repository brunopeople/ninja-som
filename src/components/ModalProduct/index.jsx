// ANCHOR Imports
import {
  // useState,
  useEffect,
  useContext,
} from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store";

// ANCHOR Component
export default function ModalProduct(props) {
  const { product } = props;
  const { state } = useContext(AppContext);
  // const [price, setPrice] = useState(0);

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
  }

  useEffect(() => {
    console.log(state);
  }, [product, state]);

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
