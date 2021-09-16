// ANCHOR Imports
import React from "react";
import InfoHeader from "../InfoHeader";
import Navbar from "../Navbar";

// ANCHOR Component
export default function Header() {
  return (
    <header className="headerNavbar">
      <InfoHeader />
      <Navbar />
    </header>
  );
}
