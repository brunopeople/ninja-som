// ANCHOR Imports
import React from "react";
import InfoHeader from "../InfoHeader";
import Navbar from "../Navbar";
import NavLinks from "../NavLinks";

// ANCHOR Component
export default function Header() {
  return (
    <header className="headerNavbar">
      <InfoHeader />
      <div className="containerNav">
        <div className="containerInside">
          <Navbar />
          <div className="navLinkContainer">
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
