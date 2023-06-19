import "./App.css";
import { People } from "./People/People";
import { Navbar } from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <People />
    </div>
  );
}

export default App;
