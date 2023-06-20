import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="section">
            <a href="/">Home</a>
          </li>
          <li className="section">
            <Link to="/people">People</Link>
            <a href="/allorders">All Orders</a>
            <a href="/items">All Items</a>
          </li>
          <li className="section">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
