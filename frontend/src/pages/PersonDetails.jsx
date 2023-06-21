import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./PersonDetails.css";
import EditUser from "../People/EditUser";

export const PersonDetails = ({ loadPeople, orderDetails, orders }) => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //Table Content start
  const restructuredArray = orderDetails.map((obj) => {
    return {
      personId: obj.order.people.personId,
      orderId: obj.order.orderId,
      orderDetailsId: obj.orderDetailsId,
      itemId: obj.item.itemId,
      itemName: obj.item.itemName,
      quantity: obj.quantity,
    };
  });
  // Table content End

  const [openEdit, setOpenEdit] = useState(false);

  const { firstName, lastName, email } = person;
  const { id } = useParams();

  useEffect(() => {
    loadPerson(id);
    filterByPersonId(restructuredArray, id);
  }, []);

  const loadPerson = async (id) => {
    const result = await axios.get(`http://localhost:8080/people/${id}`);
    setPerson(result.data);
  };

  // Start of functions and data for tables
  //Function to reconstruct OrderDetails array
  //const tryThis = (num) => {};
  //const filteredArray = restructuredArray.filter((obj) => obj.personId === id);
  // id from useParam is a string, needs to be transformed in to a number
  const filterByPersonId = (arr, personid) => {
    setFilteredArray(arr.filter((obj) => obj.personId === Number(personid)));
  };

  console.log(restructuredArray);
  console.log(filteredArray);
  // end of functions and data for tables

  return (
    <div>
      <div className="card">
        <h2 className="card-title">User Information</h2>
        <div className="card-content">
          <div className="field">
            <label htmlFor="first-name">First Name:</label>
            <span className="field-value">{firstName}</span>
          </div>
          <div className="field">
            <label htmlFor="last-name">Last Name:</label>
            <span className="field-value">{lastName}</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <span className="field-value">{email}</span>
          </div>
        </div>
        <div className="card-actions">
          <button
            className="edit-button"
            onClick={() => {
              setOpenEdit(true);
            }}
          >
            Edit
          </button>
          <button>Click me</button>
        </div>
      </div>
      <div className="grid-item-ordersTable">
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Contact</th>

              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.orderId}</td>
                <td>{order.orderId}</td>
                <td>
                  <button>Delete</button>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openEdit && (
        <EditUser
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          id={id}
          loadPerson={loadPerson}
        />
      )}
    </div>
  );
};
