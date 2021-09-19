// ANCHOR Imports
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// ANCHOR Component
export default function Hero() {
  const [slides, setSlides] = useState([]);
  const [slidesLenght, setSlidesLenght] = useState([]);
  const [dots, setDots] = useState([]);

  let slideIndex = 1;

  useEffect(() => {
    const elementSlides = document.getElementsByClassName("mySlides");
    const elementDots = document.getElementsByClassName("dot");

    if (elementSlides.length > 0) {
      setSlides(elementSlides);
      setSlidesLenght(elementSlides);
    }

    if (elementDots.length > 0) {
      setDots(elementDots);
    }
  }, [slides, slidesLenght]);

  function showSlides(n) {
    let i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots.length > 0) {
      dots[slideIndex - 1].className += " active";
    }
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  // Component
  return (
    <div className="carousel">
      <div className="slideshowContainer">
        <div className="slidesContainer">
          <div className="mySlides fade">
            <div className="container">
              <div className="containerInfo">
                <h2>NOVOS PRODUTOS</h2>
                <h1>
                  <strong>INSTRUMENTOS</strong>
                  <br />
                  PROFISSIONAIS
                </h1>
                <button className="btn carouselButton" type="button">
                  CONFIRA
                </button>
              </div>
            </div>
            <div className="containerImage">
              <img
                src="/images/imageBanner.png"
                style={{ width: "100%" }}
                alt="Girl in a jacket"
              />
            </div>
          </div>

          <div className="mySlides fade">
            <div className="container">
              <div className="containerInfo">
                <h2>SEGURANÇA</h2>
                <h1>
                  COMPRA
                  <br />
                  <strong>100% SEGURA</strong>
                </h1>
              </div>
            </div>
            <div className="containerImage">
              <img
                src="/images/securityStore.jpg"
                style={{ width: "100%" }}
                alt="Girl in a jacket"
              />
            </div>
          </div>

          <div className="mySlides fade">
            <div className="container">
              <div className="containerInfo">
                <h1>
                  <strong>1ª TROCA GRÁTIS</strong>
                </h1>
              </div>
            </div>
            <div className="containerImage">
              <img
                className="middleImg"
                src="/images/returnProduct.jpg"
                style={{ width: "100%" }}
                alt="Girl in a jacket"
              />
            </div>
          </div>
        </div>

        <div className="containerArrows">
          <div className="containerLg">
            <button
              className="prev"
              onClick={() => plusSlides(-1)}
              onKeyDown={plusSlides(-1)}
              type="button"
            >
              &#10094;
            </button>
            <button
              className="next"
              onClick={() => plusSlides(1)}
              onKeyDown={plusSlides(1)}
              type="button"
            >
              &#10095;
            </button>
          </div>
        </div>

        <div className="containerDot">
          <div className="container" style={{ textAlign: "center" }}>
            {/* {slides.map((element, index) => (
              <button
                className="dot"
                onClick={() => currentSlide(index + 1)}
                onKeyUp={currentSlide(index + 1)}
                type="button"
                aria-label="dot"
              />
            ))} */}
            <button
              className="dot"
              onClick={() => currentSlide(1)}
              onKeyUp={currentSlide(1)}
              type="button"
              aria-label="dot"
            />
            <button
              className="dot"
              onClick={() => currentSlide(2)}
              onKeyUp={currentSlide(2)}
              type="button"
              aria-label="dot"
            />
            <button
              className="dot"
              onClick={() => currentSlide(3)}
              onKeyUp={currentSlide(3)}
              type="button"
              aria-label="dot"
            />
            <button
              className="dot"
              onClick={() => currentSlide(4)}
              onKeyUp={currentSlide(4)}
              type="button"
              aria-label="dot"
            />
            <button
              className="dot"
              onClick={() => currentSlide(5)}
              onKeyUp={currentSlide(5)}
              type="button"
              aria-label="dot"
            />
          </div>
        </div>
      </div>
    </div>
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
