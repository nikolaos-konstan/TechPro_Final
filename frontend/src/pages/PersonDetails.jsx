import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../App.css";
import EditUser from "../People/EditUser";

export const PersonDetails = ({ loadPeople, orderDetails, orders }) => {
  const [filteredDetailsArray, setFilteredDetailsArray] = useState([]);
  const [filteredOrdersArray, setFilteredOrdersArray] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //Table Content start
  //Reconstruct Arrays for ease of use
  const restructureDetailsdArray = orderDetails.map((obj) => {
    return {
      personId: obj.order.people.personId,
      orderId: obj.order.orderId,
      orderDetailsId: obj.orderDetailsId,
      itemId: obj.item.itemId,
      itemName: obj.item.itemName,
      quantity: obj.quantity,
    };
  });
  const restructureOrdersdArray = orders.map((obj) => {
    return {
      personId: obj.people.personId,
      orderId: obj.orderId,
      orderDate: obj.orderDate,
    };
  });
  // Table content End

  const [openEdit, setOpenEdit] = useState(false);

  const { firstName, lastName, email } = person;
  const { id } = useParams();

  useEffect(() => {
    loadPerson(id);
  }, []);

  const loadPerson = async (id) => {
    const result = await axios.get(`http://localhost:8080/people/${id}`);
    setPerson(result.data);
  };

  // Start of functions and data for tables
  // id from useParam is a string, needs to be transformed in to a number
  // const filterOrderDetailsByPersonId = (arr, personid) => {
  //   setFilteredDetailsArray(
  //     arr.filter((obj) => obj.personId === Number(personid))
  //   );
  // };
  const filterOrderDetailsByOrderId = (arr, orderid) => {
    setFilteredDetailsArray(
      arr.filter((obj) => obj.orderId === Number(orderid))
    );
  };
  const filterOrdersByPersonId = (arr, personid) => {
    setFilteredOrdersArray(
      arr.filter((obj) => obj.personId === Number(personid))
    );
  };
  // end of functions and data for tables

  return (
    <div className="pd-container">
      <div className="card">
        <h2>User Information</h2>

        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <span className="field-value">{firstName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <span className="field-value">{lastName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <span className="field-value">{email}</span>
        </div>

        <div className="form-buttons-container">
          <button
            className="form-submit-button"
            onClick={() => {
              setOpenEdit(true);
            }}
          >
            Edit
          </button>

          <button
            className="form-submit-button"
            onClick={() => filterOrdersByPersonId(restructureOrdersdArray, id)}
          >
            Orders
          </button>
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
      <div className="grid-item-pd-ordersTable">
        <table>
          <thead>
            <tr>
              <th>Order Number</th>

              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrdersArray.map((order, index) => (
              <tr key={index}>
                <td className="td-input-display">{order.orderId}</td>
                <td className="td-input-display">{order.orderDate}</td>

                <td className="action-column">
                  <button
                    className="details-button"
                    onClick={() =>
                      filterOrderDetailsByOrderId(
                        restructureDetailsdArray,
                        order.orderId
                      )
                    }
                  >
                    Details
                  </button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid-item-pd-orderDetailsTable">
        <table>
          <thead>
            <tr>
              <th>Order Details Number</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetailsArray.map((order, index) => (
              <tr key={index}>
                <td className="td-input-display">{order.orderDetailsId}</td>
                <td className="td-input-display">{order.itemName}</td>
                <td className="td-input-display">{order.quantity}</td>
                <td className="action-column">
                  <button className="details-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
