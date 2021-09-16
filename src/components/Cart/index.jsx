// ANCHOR Imports
import PropTypes from "prop-types";

// ANCHOR Component
export default function Cart() {
  // const { examepleProps } = props;

  // Component
  return <></>;
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
