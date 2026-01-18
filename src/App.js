import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
