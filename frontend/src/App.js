import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { People } from "./pages/People";
import { PersonDetails } from "./pages/PersonDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { Orders } from "./pages/Orders";
import { Home } from "./pages/Home";
import { Items } from "./pages/Items";
import { About } from "./pages/About";
import { PlaceOrder } from "./pages/PlaceOrder";

function App() {
  const [people, setPeople] = useState([]);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    loadPeople();
    loadOrders();
    loadItems();
    loadOrderDetails();
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
  const loadOrderDetails = async () => {
    const result = await axios.get("http://localhost:8080/orderdetails/");
    setOrderDetails(result.data);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path=""
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
            element={
              <Orders
                orders={orders}
                loadOrders={loadOrders}
                orderDetails={orderDetails}
                loadOrderDetails={loadOrderDetails}
              />
            }
          />
          <Route
            exact
            path="/items"
            element={<Items items={items} loadItems={loadItems} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/persondetails/:id"
            element={
              <PersonDetails
                loadPeople={loadPeople}
                orders={orders}
                loadOrders={loadOrders}
                orderDetails={orderDetails}
                loadOrderDetails={loadOrderDetails}
              />
            }
          />
          <Route
            exact
            path="/placeorder/:id"
            element={
              <PlaceOrder
                loadPeople={loadPeople}
                orders={orders}
                loadOrders={loadOrders}
                orderDetails={orderDetails}
                loadOrderDetails={loadOrderDetails}
                items={items}
                loadItems={loadItems}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
