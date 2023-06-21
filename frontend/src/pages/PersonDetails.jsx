import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./PersonDetails.css";
import EditUser from "../People/EditUser";

export const PersonDetails = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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
        </div>
      </div>

      {openEdit && (
        <EditUser openEdit={openEdit} setOpenEdit={setOpenEdit} id={id} />
      )}
    </div>
  );
};
