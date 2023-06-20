import { AddPerson } from "../People/AddPerson";
import { GeneratePeople } from "../People/GeneratePeople";
import { PeopleTable } from "../People/PeopleTable";
import "./People.css";

export const People = ({ people, loadPeople }) => {
  return (
    <div className="container">
      <PeopleTable people={people} loadPeople={loadPeople} />
      <AddPerson loadPeople={loadPeople} />
      <GeneratePeople />
    </div>
  );
};
