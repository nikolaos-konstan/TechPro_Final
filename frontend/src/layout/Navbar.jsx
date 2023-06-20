import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="section">
            <Link to="/">Home</Link>
          </li>
          <li className="section">
            <Link to="/people">People</Link>
            <Link to="/allorders">All Orders</Link>
            <Link to="/items">All Items</Link>
          </li>
          <li className="section">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
