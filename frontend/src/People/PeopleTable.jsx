import axios from "axios";
import "./PeopleTable.css";
import { AddPerson } from "./AddPerson";

export const PeopleTable = ({ people, loadPeople }) => {
  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:8080/people/${id}`);
    loadPeople();
  };
  return (
    <div>
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
            <tr>
              <td key={person.personId}>{index + 1}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deletePerson(person.personId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddPerson loadPeople={loadPeople} />
    </div>
  );
};
