import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./Routes";
import Store from "./store";
import Header from "./components/Header";
import "./styles/SCSS/mainUseful.css";

export default function App() {
  return (
    <Store>
      <Router>
        <Header />
        <main>
          <Route />
        </main>
      </Router>
    </Store>
  );
}
