// ANCHOR Imports
import PropTypes from "prop-types";

// ANCHOR Component
export default function CardProduct(props) {
  const { product } = props;

  // console.log(product);

  // Component
  return (
    <div className="cardProduct">
      <div className="containerImage">
        <img src={product.photo} alt={product.descriptionShort} />
      </div>
      <div className="infoProduct">
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
};

CardProduct.defaultProps = {
  product: {},
};
