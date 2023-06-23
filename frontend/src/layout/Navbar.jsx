import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar-header">
        <ul className="navbar">
          <li className="navbar-section">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-section">
            <Link to="/people">People</Link>
            <Link to="/allorders">All Orders</Link>
            <Link to="/items">All Items</Link>
          </li>
          <li className="navbar-section">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
