// ANCHOR Imports
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { showModalAction } from "../../store/actions";
import { AppContext } from "../../store";
import ModalProduct from "../ModalProduct";

// ANCHOR Component
export default function CardProduct(props) {
  const { product } = props;
  const { dispatch } = useContext(AppContext);
  const [price, setPrice] = useState(0);

  // Formatando preço
  function formatPrice(priceValue) {
    const priceString = priceValue.toString();
    const formatedPrice = `${priceString.slice(0, -2)},${priceString.slice(
      -2
    )}`;
    setPrice(formatedPrice);
  }

  // Tornando o modal do componente visível
  function showModal(e) {
    e.preventDefault();
    showModalAction(dispatch, product);
  }

  useEffect(() => {
    formatPrice(product.price);
  }, [product, price]);

  // console.log(product);

  // Component
  return (
    <div className="cardProduct">
      <div
        className="containerImage"
        aria-hidden="true"
        onClick={(e) => {
          showModal(e);
        }}
      >
        <img src={product.photo} alt={product.descriptionShort} />
        <button type="button" className="btn buttonQuickView">
          <div className="containerIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.795"
              height="15.795"
              viewBox="0 0 15.795 15.795"
            >
              <g id="zoom-2" transform="translate(-0.087 -0.087)">
                <line
                  id="Linha_9"
                  data-name="Linha 9"
                  x1="3.782"
                  y1="3.782"
                  transform="translate(11.393 11.393)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <circle
                  id="Elipse_18"
                  data-name="Elipse 18"
                  cx="6"
                  cy="6"
                  r="6"
                  transform="translate(0.587 0.587)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
          <sub>Quick View</sub>
        </button>
      </div>
      <div className="infoProduct">
        <h2> {product.productName} </h2> <p> {product.descriptionShort} </p>
        <p className="price"> R$ {price} </p>
      </div>
      <ModalProduct />
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
};

CardProduct.defaultProps = {
  product: {},
};
