import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
const EditUser = ({ openEdit, setOpenEdit, id, loadPerson }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = person;

  const onInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPersonEdit(id);
  }, []);

  //Need to find a way to refresh the new content, loadPerson() is loaded from Parent
  const onSubmitData = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://${window.location.hostname}:8080/people/${id}`,
      person
    );
    loadPerson(id);
    setOpenEdit(false);
  };

  const loadPersonEdit = async () => {
    const result = await axios.get(
      `http://${window.location.hostname}:8080/people/${id}`
    );
    setPerson(result.data);
  };

  return (
    <>
      <div>
        <form className="edit-form" onSubmit={(e) => onSubmitData(e)}>
          <h2>Edit Person</h2>
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
              onClick={() => {
                setOpenEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
