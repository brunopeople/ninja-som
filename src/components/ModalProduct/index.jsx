// ANCHOR Imports

import {
  // useState,
  // useEffect,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../store";
import { closeModalAction } from "../../store/actions";

// ANCHOR Component
export default function ModalProduct() {
  const { state, dispatch } = useContext(AppContext);

  // Formatando preço
  function formatPrice(priceValue) {
    const priceString = priceValue.toString();
    return `${priceString.slice(0, -2)},${priceString.slice(-2)}`;
  }

  // Fechando o modal do produto
  function closeModal(e) {
    e.preventDefault();
    closeModalAction(dispatch);
  }

  // console.log(state.modal.data);

  // Component
  return (
    <div
      className="modalProduct"
      style={{ display: state.modal.show ? "flex" : "none" }}
    >
      <div className="cardModal">
        <div className="header">
          <button
            type="button"
            className="btn closeButton"
            onClick={(e) => {
              closeModal(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.369"
              height="19.369"
              viewBox="0 0 19.369 19.369"
            >
              <g
                id="Grupo_1528"
                data-name="Grupo 1528"
                transform="translate(1020.914 -1430.086)"
              >
                <line
                  id="Linha_9"
                  data-name="Linha 9"
                  x2="16.541"
                  y2="16.541"
                  transform="translate(-1019.5 1431.5)"
                  fill="none"
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <line
                  id="Linha_10"
                  data-name="Linha 10"
                  x1="16.541"
                  y2="16.541"
                  transform="translate(-1019.5 1431.5)"
                  fill="none"
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
        </div>

        <div className="content">
          <div className="containerImageModal">
            <img src={state.modal.data.photo} alt="" />
          </div>

          <div className="infoModal">
            <h2>{state.modal.data.productName}</h2>
            <p className="price">
              R$ {formatPrice(state.modal.data.price || 0)}
            </p>
            <p>{state.modal.data.descriptionShort}</p>
            <div className="footer">
              <Link to="/produto">Veja mais detalhes do produto</Link>
              <button type="button" className="btn addCartButton">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
