import { Link } from "react-router-dom";
import "../App.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="company-name">Paradise Nursery</h1>

        <p className="company-desc">
          Paradise Nursery adalah toko tanaman hias online yang menyediakan berbagai
          pilihan tanaman untuk memperindah rumah Anda. Kami percaya tanaman dapat
          membawa ketenangan, udara lebih segar, dan suasana yang lebih nyaman.
        </p>

        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}
