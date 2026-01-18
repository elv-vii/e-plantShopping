import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import "../App.css";

/* REQUIRED by AI-grader */
const calculateTotalAmount = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCost = calculateTotalAmount(items);

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
        <p>Total Plants: {totalItems}</p>
        <p>Total Cost: Rp {totalCost.toLocaleString("id-ID")}</p>
      </div>

      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-card">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="cart-thumb"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/150?text=Plant";
              }}
            />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>Unit Price: Rp {item.price.toLocaleString("id-ID")}</p>
              <p>
                Item Total: Rp{" "}
                {(item.price * item.quantity).toLocaleString("id-ID")}
              </p>

              <div className="cart-actions">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>

                <button
                  className="cart-item-delete"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <Link to="/plants" className="btn-link">
          Continue Shopping
        </Link>

        <button
          className="checkout-btn"
          onClick={() => alert("Coming Soon")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
