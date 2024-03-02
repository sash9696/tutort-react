import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import CopyToClipBoard from "./components/CopyToClipBoard/CopyToClipBoard";


function App() {
  
  // let [count, setCount] = useState(0);
  // let count = 0;

  return (
    <div>
      <CopyToClipBoard/>
      {/* <Accordion/> */}
      {/* <div>
        Counter : {count}
      </div>
      <button onClick={() => {
        setCount(count ++);
        console.log(count);
      }} >
        Click
      </button> */}
    </div>
  );
}

export default App;
