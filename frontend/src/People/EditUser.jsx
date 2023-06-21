import axios from "axios";
import "./Modal.css";
import { useEffect, useState } from "react";
const EditUser = ({ openEdit, setOpenEdit, id }) => {
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
    loadPerson();
  }, []);

  //Need to find a way to refresh the new content, loadPerson() is not working
  const onSubmitData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/people/${id}`, person);
    //loadPerson();
  };

  const loadPerson = async () => {
    const result = await axios.get(`http://localhost:8080/people/${id}`);
    setPerson(result.data);
  };

  return (
    <>
      <div className="main-container">
        <div className="modal-container">
          <div className="grid-item-2">
            <form onSubmit={(e) => onSubmitData(e)}>
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
              <button type="submit">Submit</button>
              <button
                onClick={() => {
                  setOpenEdit(false);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
