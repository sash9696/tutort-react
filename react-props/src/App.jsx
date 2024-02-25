import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { logoName,navOptions } from "./data.js";

function App() {
 

  return (
    <div>
      <Navbar logoName={logoName} navOptions={navOptions} />
    </div>
  );
}

export default App;
