import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { People } from "./pages/People";
import { useEffect, useState } from "react";
import axios from "axios";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
