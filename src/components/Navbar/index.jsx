// ANCHOR Imports
import Cart from "../Cart";

// ANCHOR Component
export default function Navbar() {
  // Component
  return (
    <nav className="container">
      <div>
        <div className="componentNav" />
        <div className="componentNav" />
      </div>
      <Cart />
    </nav>
  );
}
