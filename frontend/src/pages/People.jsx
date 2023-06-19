import { AddPerson } from "../People/AddPerson";
import { PeopleTable } from "../People/PeopleTable";

export const People = () => {
  return (
    <div>
      <PeopleTable />
      <AddPerson />
    </div>
  );
};
