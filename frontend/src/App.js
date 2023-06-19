import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { People } from "./pages/People";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/people" element={<People />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
