// ANCHOR Imports
import PropTypes from "prop-types";
// import {  } from "./styled";

// ANCHOR Component
export default function Component(props) {
  const { examepleProps } = props;

  // Component
  return (
    <>
      <h1>Component</h1>
      <h1>{examepleProps.id}</h1>
    </>
  );
}

Component.propTypes = {
  examepleProps: PropTypes.shape({
    id: PropTypes.number,
    examepleProps: PropTypes.string,
    categories: PropTypes.instanceOf(Array),
  }),
};

Component.defaultProps = {
  examepleProps: {},
};
