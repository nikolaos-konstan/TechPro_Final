import { useState } from "react";
import "../App.css";
import axios from "axios";

export const AddPerson = ({ loadPeople }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = person;

  const onInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmitData = async (e) => {
    e.preventDefault();
    await axios.post(`http://${window.location.hostname}:8080/people`, person);
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
    });
    loadPeople();
  };

  const onClear = () => {
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  return (
    <div className="grid-item-2-addperson">
      <form onSubmit={(e) => onSubmitData(e)}>
        <h2>Add Person</h2>
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type={"text"}
            id="first-name"
            placeholder="Enter your first name"
            name="firstName"
            value={firstName}
            onChange={(e) => onInputChange(e)}
            pattern="[A-Za-z]+"
            maxLength="255"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type={"text"}
            id="last-name"
            placeholder="Enter your last name"
            name="lastName"
            value={lastName}
            onChange={(e) => onInputChange(e)}
            pattern="[A-Za-z]+"
            maxLength="255"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type={"email"}
            id="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            maxLength="255"
            required
          />
        </div>
        <div className="form-buttons-container">
          <button className="form-submit-button" type="submit">
            Submit
          </button>
          <button
            className="form-submit-button"
            onClick={onClear}
            type="submit"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
