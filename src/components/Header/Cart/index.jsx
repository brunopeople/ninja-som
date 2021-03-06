// ANCHOR Imports
import PropTypes from "prop-types";

// ANCHOR Component
export default function Cart() {
  // const { examepleProps } = props;

  // Component
  return (
    <div className="cart">
      <svg
        id="_001-shopping-bag"
        data-name="001-shopping-bag"
        xmlns="http://www.w3.org/2000/svg"
        width="21.76"
        height="27.186"
        viewBox="0 0 21.76 27.186"
      >
        <path
          id="Caminho_1"
          data-name="Caminho 1"
          d="M70.554,23.5,69,5.971a.749.749,0,0,0-.745-.684h-3.2a5.371,5.371,0,0,0-10.741,0h-3.2a.745.745,0,0,0-.745.684L48.806,23.5c0,.022-.006.044-.006.067a3.874,3.874,0,0,0,4.081,3.619h13.6a3.874,3.874,0,0,0,4.081-3.619A.272.272,0,0,0,70.554,23.5ZM59.68,1.5a3.873,3.873,0,0,1,3.869,3.786H55.811A3.873,3.873,0,0,1,59.68,1.5Zm6.8,24.184h-13.6A2.4,2.4,0,0,1,50.3,23.6l1.49-16.806H54.3V9.073a.751.751,0,1,0,1.5,0V6.794h7.744V9.073a.751.751,0,0,0,1.5,0V6.794h2.513l1.5,16.806A2.4,2.4,0,0,1,66.479,25.685Z"
          transform="translate(-48.8 0)"
          fill="#fff"
        />
      </svg>
      <p>SEU CARRINHO</p>
      <p>{0} item (s)</p>
    </div>
  );
}

Cart.propTypes = {
  examepleProps: PropTypes.shape({
    id: PropTypes.number,
    examepleProps: PropTypes.string,
    categories: PropTypes.instanceOf(Array),
  }),
};

Cart.defaultProps = {
  examepleProps: {},
};
