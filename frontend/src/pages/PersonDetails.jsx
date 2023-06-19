import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./PersonDetails.css";

export const PersonDetails = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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
        <div class="card-actions">
          <button class="edit-button">Edit</button>
        </div>
      </div>
    </div>
  );
};
