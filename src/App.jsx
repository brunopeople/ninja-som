import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./Routes";
import Store from "./store";
import "./styles/SCSS/mainUseful.css";

export default function App() {
  return (
    <Store>
      <Router>
        <main>
          <Route />
        </main>
      </Router>
    </Store>
  );
}
