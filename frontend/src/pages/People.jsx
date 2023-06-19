import { AddPerson } from "../People/AddPerson";
import { PeopleTable } from "../People/PeopleTable";

export const People = ({ people, loadPeople }) => {
  return (
    <div>
      <PeopleTable people={people} loadPeople={loadPeople} />
      <AddPerson loadPeople={loadPeople} />
    </div>
  );
};
