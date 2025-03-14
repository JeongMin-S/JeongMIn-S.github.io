import { HashRouter, Link } from "react-router-dom";
import "../styles/Category.css";

function Category() {
  return (
    <div
      id="category"
      style={{
        border: "1px solid black",
        width: "20%",
        maxWidth: 240,

        padding: 10,
        boxSizing: "border-box",
        overflowY: "auto",
        textAlign: "center",
      }}
    >
      <HashRouter>
        <nav>
          <Link to="/" className="nav-button">
            Home
          </Link>

          <Link to="/about" className="nav-button">
            About
          </Link>
        </nav>
      </HashRouter>
    </div>
  );
}

export default Category;
