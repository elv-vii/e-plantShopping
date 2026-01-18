import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import "../App.css";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (items.length === 0) {
    return (
      <div className="page">
        <h2 className="page-title">Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/plants" className="btn-link">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h2 className="page-title">Shopping Cart</h2>

      <div className="cart-summary">
        <div>
          <b>Total Plants:</b> {totalQty}
        </div>
        <div>
          <b>Total Cost:</b> Rp {totalCost.toLocaleString("id-ID")}
        </div>
      </div>

      <div className="cart-list">
        {items.map((item) => {
          const itemTotal = item.quantity * item.price;

          return (
            <div key={item.id} className="cart-card">
              <img
  src={item.thumbnail}
  alt={item.name}
  className="cart-thumb"
  onError={(e) => {
    e.currentTarget.src =
      "https://via.placeholder.com/600x400.png?text=Plant";
  }}
/>


              <div className="cart-info">
                <h4 className="cart-name">{item.name}</h4>

                <div className="cart-price">
                  Unit: Rp {item.price.toLocaleString("id-ID")}
                </div>

                <div className="cart-price">
                  Item Total: Rp {itemTotal.toLocaleString("id-ID")}
                </div>

                <div className="cart-actions">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>

                  <span className="qty">{item.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-footer">
        <Link to="/plants" className="btn-link">
          Continue Shopping
        </Link>

        <button className="checkout-btn" onClick={() => alert("Coming Soon")}>
          Checkout
        </button>
      </div>
    </div>
  );
}
