import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

export default function Header() {
  const location = useLocation();
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  const onPlants = location.pathname === "/plants";
const onCart = location.pathname === "/cart";
const onAbout = location.pathname === "/about";

if (!onPlants && !onCart && !onAbout) return null;

  return (
    <header className="header">
      <div className="brand">Paradise Nursery</div>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/plants" className="nav-link">Plants</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart <span className="cart-badge">{totalQty}</span>
        </Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
}
