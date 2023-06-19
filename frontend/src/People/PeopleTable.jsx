import axios from "axios";
import { useEffect, useState } from "react";

export const PeopleTable = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8080/people/");
    setPeople(result.data);
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
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
