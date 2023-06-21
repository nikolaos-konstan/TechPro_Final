import axios from "axios";
import "../pages/People.css";
import { Link } from "react-router-dom";

export const PeopleTable = ({ people, loadPeople }) => {
  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:8080/people/${id}`);
    loadPeople();
  };
  return (
    <div className="grid-item-1">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={person.personId}>
              <td>{index + 1}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>
                <Link to={`/persondetails/${person.personId}`}>Details</Link>
                <button onClick={() => deletePerson(person.personId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
