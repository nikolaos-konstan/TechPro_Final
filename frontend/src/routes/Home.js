import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadPeople();
    loadOrders();
  }, []);

  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8080/people/");
    setPeople(result.data);
  };

  const loadOrders = async () => {
    const ordersResult = await axios.get("http://localhost:8080/orderdetails/");
    setOrders(ordersResult.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {people.map((people, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{people.firstName}</td>
                <td>{people.lastName}</td>
                <td>{people.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order Number</th>
              <th scope="col">Made By</th>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orders, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{orders.orderDetailsId}</td>
                <td>{orders.order.people.firstName}</td>
                <td>{orders.item.itemName}</td>
                <td>{orders.quantity}</td>
                <td>{orders.order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
