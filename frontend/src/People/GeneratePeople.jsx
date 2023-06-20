import axios from "axios";
import { useEffect, useState } from "react";

export const GeneratePeople = () => {
  const [data, setData] = useState([]);

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
    await axios.post("http://localhost:8080/people", data);
  };
  //const generate = () => console.log(data);
  return (
    <div className="grid-item-3">
      <button onClick={generate}>Generate people</button>
    </div>
  );
};
