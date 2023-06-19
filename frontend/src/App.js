import "./App.css";

import { Navbar } from "./layout/Navbar";
import { People } from "./pages/People";

function App() {
  return (
    <div className="App">
      <Navbar />
      <People />
    </div>
  );
}

export default App;
