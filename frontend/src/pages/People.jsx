import { useEffect, useState } from "react";

import { PeopleTable } from "../People/PeopleTable";
import axios from "axios";

export const People = () => {
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
      <PeopleTable people={people} loadPeople={loadPeople} />
    </div>
  );
};
