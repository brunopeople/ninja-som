// ANCHOR Imports
import { Link } from "react-router-dom";

// ANCHOR Component
export default function NavLink() {
  // Component
  return (
    <nav className="navLink">
      <div className="componentNav container">
        <Link className="itemNav" to="/categorias">
          TODAS AS CATEGORIAS
        </Link>

        <button className="itemNav" type="button">
          <span>SOM PROFISSIOAL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="3"
            viewBox="0 0 5 3"
          >
            <path
              id="Polígono_3"
              data-name="Polígono 3"
              d="M2.5,0,5,3H0Z"
              transform="translate(5 3) rotate(180)"
              fill="#041e50"
            />
          </svg>
        </button>

        <button className="itemNav" type="button">
          <span>INSTRUMENTOS MUSICAIS</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="3"
            viewBox="0 0 5 3"
          >
            <path
              id="Polígono_3"
              data-name="Polígono 3"
              d="M2.5,0,5,3H0Z"
              transform="translate(5 3) rotate(180)"
              fill="#041e50"
            />
          </svg>
        </button>

        <Link className="itemNav" to="/promocoes">
          PROMOÇÕES
        </Link>

        <Link className="itemNav" to="/contato">
          CONTATO
        </Link>
      </div>
    </nav>
  );
}
