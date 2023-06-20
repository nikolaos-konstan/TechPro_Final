import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { People } from "./pages/People";
import { PersonDetails } from "./pages/PersonDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { Orders } from "./pages/Orders";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople();
  }, []);
  const loadPeople = async () => {
    const result = await axios.get("http://localhost:8080/people/");
    setPeople(result.data);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/people"
            element={<People people={people} loadPeople={loadPeople} />}
          />
          <Route
            exact
            path="/allorders"
            element={<Orders people={people} loadPeople={loadPeople} />}
          />
          <Route exact path="/persondetails/:id" element={<PersonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
