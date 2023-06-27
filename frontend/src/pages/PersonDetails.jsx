import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../App.css";
import EditUser from "../People/EditUser";
import { EditQuantityPersonal } from "../Orders/EditQuantityPersonal";

export const PersonDetails = ({
  loadOrderDetails,
  orderDetails,
  orders,
  loadOrders,
}) => {
  const [filteredDetailsArray, setFilteredDetailsArray] = useState([]);
  const [filteredOrdersArray, setFilteredOrdersArray] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //Table Content start
  //Reconstruct Arrays for ease of use
  // const restructureDetailsdArray = orderDetails.map((obj) => {
  //   return {
  //     personId: obj.order.people.personId,
  //     orderId: obj.order.orderId,
  //     orderDetailsId: obj.orderDetailsId,
  //     itemId: obj.item.itemId,
  //     itemName: obj.item.itemName,
  //     quantity: obj.quantity,
  //   };
  // });
  // const restructureOrdersdArray = orders.map((obj) => {
  //   return {
  //     personId: obj.people.personId,
  //     orderId: obj.orderId,
  //     orderDate: obj.orderDate,
  //   };
  // });
  // Table content End

  const [openEdit, setOpenEdit] = useState(false);

  const { firstName, lastName, email } = person;
  const { id } = useParams();

  useEffect(() => {
    loadPerson(id);
  }, [id]);

  const loadPerson = async (id) => {
    const result = await axios.get(
      `http://${window.location.hostname}:8080/people/${id}`
    );
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
      arr.filter((obj) => obj.order.orderId === Number(orderid))
    );
  };
  const filterOrdersByPersonId = (arr, personid) => {
    setFilteredOrdersArray(
      arr.filter((obj) => obj.people.personId === Number(personid))
    );
  };
  // end of functions and data for tables

  //Delete function for Orders
  const deleteOrder = async (arr, id) => {
    await axios.delete(`http://${window.location.hostname}:8080/orders/${id}`);
    loadOrders();
    setFilteredOrdersArray(arr.filter((obj) => obj.orderId !== id));
    setFilteredDetailsArray([]);
  };

  //Delete function for Order Details
  const deleteOrderDetails = async (arr, id) => {
    await axios.delete(
      `http://${window.location.hostname}:8080/orderdetails/${id}`
    );
    //loadOrderDetails();
    setFilteredDetailsArray(arr.filter((obj) => obj.orderDetailsId !== id));
    loadOrderDetails();
  };
  //
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
            onClick={() => filterOrdersByPersonId(orders, id)}
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
                <td className="td-input-display">
                  {order.people.personId}-{order.orderId}
                </td>
                <td className="td-input-display">{order.orderDate}</td>

                <td className="action-column">
                  <button
                    className="details-button"
                    onClick={() =>
                      filterOrderDetailsByOrderId(orderDetails, order.orderId)
                    }
                  >
                    Details
                  </button>
                  <button
                    onClick={() =>
                      deleteOrder(filteredOrdersArray, order.orderId)
                    }
                    className="delete-button"
                  >
                    Delete
                  </button>
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
            {filteredDetailsArray.map((orderDetails) => (
              <tr key={orderDetails.orderDetailsId}>
                <td className="td-input-display">
                  {orderDetails.order.people.personId}-
                  {orderDetails.order.orderId}-{orderDetails.orderDetailsId}
                </td>
                <td className="td-input-display">
                  {orderDetails.item.itemName}
                  <svg
                    style={{ color: orderDetails.item.itemName }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="tag"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
                <EditQuantityPersonal
                  orderDetails={orderDetails}
                  filteredDetailsArray={filteredDetailsArray}
                  deleteOrderDetails={deleteOrderDetails}
                  loadOrderDetails={loadOrderDetails}
                  setFilteredDetailsArray={setFilteredDetailsArray}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          *Edit works but it doesn't refresh automatically yet, click on the
          Details btn on the table on the left
        </p>
      </div>
    </div>
  );
};
