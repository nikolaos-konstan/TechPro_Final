import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="section">
            <a href="#">Home</a>
          </li>
          <li className="section">
            <a href="#">People</a>
            <a href="#">Orders</a>
            <a href="#">Items</a>
          </li>
          <li className="section">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
