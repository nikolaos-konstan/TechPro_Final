import axios from "axios";
import { useEffect, useState } from "react";

export const GeneratePeople = ({ loadPeople }) => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/generatedpeople.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const generate = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/people", data[counter]);
    counter === data.length - 1
      ? setCounter((prev) => 0)
      : setCounter((prev) => prev + 1);
    loadPeople();
  };
  //const generate = () => console.log(data);
  return (
    <div className="grid-item-3-people">
      <button className="generate-people-button" onClick={generate}>
        Generate people
      </button>
    </div>
  );
};
