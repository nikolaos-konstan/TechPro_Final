import "./Home.css";

export const Home = ({ people, orders, items }) => {
  return (
    <div className="container-cards">
      <div className="card">
        <h1 className="number">{people.length}</h1>
        <p className="word">People Registered</p>
      </div>
      <div className="card">
        <h1 className="number">{orders.length}</h1>
        <p className="word">Orders Made</p>
      </div>
      <div className="card">
        <h1 className="number">{items.length}</h1>
        <p className="word">Items in Storage</p>
      </div>
    </div>
  );
};
