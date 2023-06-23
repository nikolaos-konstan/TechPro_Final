import { AddPerson } from "../People/AddPerson";
import { GeneratePeople } from "../People/GeneratePeople";
import { PeopleTable } from "../People/PeopleTable";
import "../App.css";

export const People = ({ people, loadPeople }) => {
  return (
    <div className="container-people">
      <PeopleTable people={people} loadPeople={loadPeople} />
      <AddPerson loadPeople={loadPeople} />
      <GeneratePeople loadPeople={loadPeople} />
    </div>
  );
};
