import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { People } from "./pages/People";
import { PersonDetails } from "./pages/PersonDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { Orders } from "./pages/Orders";
import { Home } from "./pages/Home";

function App() {
  const [people, setPeople] = useState([]);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadPeople();
    loadOrders();
    loadItems();
  }, []);
  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8080/people/");
    setPeople(result.data);
  };
  const loadOrders = async () => {
    const result = await axios.get("http://localhost:8080/orders/");
    setOrders(result.data);
  };
  const loadItems = async () => {
    const result = await axios.get("http://localhost:8080/items/");
    setItems(result.data);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/home"
            element={<Home people={people} orders={orders} items={items} />}
          />
          <Route
            exact
            path="/people"
            element={<People people={people} loadPeople={loadPeople} />}
          />
          <Route
            exact
            path="/allorders"
            element={<Orders orders={orders} loadOrders={loadOrders} />}
          />
          <Route exact path="/persondetails/:id" element={<PersonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
