// ANCHOR Imports
import PropTypes from "prop-types";
import Carousel from "./carousel";

// ANCHOR Component
export default function Hero() {
  // const { examepleProps } = props;

  // Component
  return (
    <section className="hero">
      <Carousel />
    </section>
  );
}

Hero.propTypes = {
  examepleProps: PropTypes.shape({
    id: PropTypes.number,
    examepleProps: PropTypes.string,
    categories: PropTypes.instanceOf(Array),
  }),
};

Hero.defaultProps = {
  examepleProps: {},
};
