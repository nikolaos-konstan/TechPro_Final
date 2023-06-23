import axios from "axios";
import "../pages/People.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Paginate } from "../Pagination/Pagination";

export const PeopleTable = ({ people, loadPeople }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = people.slice(indexOfFirstUser, indexOfLastUser);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(people.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  // End of Pagination
  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:8080/people/${id}`);
    loadPeople();
  };
  return (
    <div className="grid-item-1">
      <Paginate previousPage={previousPage} nextPage={nextPage} />
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
          {currentUsers.map((person, index) => (
            <tr key={person.personId}>
              <td>{person.personId}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>
                <Link to={`/persondetails/${person.personId}`}>Details</Link>
                <button onClick={() => deletePerson(person.personId)}>
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/placeorder/${person.personId}`}>
                  <button>Place New Order</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
