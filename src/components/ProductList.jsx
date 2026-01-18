import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import "../App.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="page">
      <h2 className="page-title">Houseplants</h2>

      {categories.map((cat) => (
        <div key={cat} className="category">
          <h3 className="category-title">{cat}</h3>

          <div className="grid">
            {plants
              .filter((p) => p.category === cat)
              .map((p) => (
                <div key={p.id} className="card">
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    className="thumb"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/600x400.png?text=Plant";
                    }}
                  />

                  <div className="card-body">
                    <h4 className="plant-name">{p.name}</h4>

                    <p className="price">
                      Rp {p.price.toLocaleString("id-ID")}
                    </p>

                    <button
                      className="btn"
                      onClick={() => dispatch(addToCart(p))}
                      disabled={isInCart(p.id)}
                      title={
                        isInCart(p.id)
                          ? "Already in cart"
                          : "Add to Cart"
                      }
                    >
                      {isInCart(p.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
