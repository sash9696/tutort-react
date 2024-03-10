import React, { useState } from "react";

//render props

//toggle functionality
function Toggle(props) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return props.render({on, toggle});
}

function App() {
  return (
    <div>
      App
      <div>
        <Toggle
          render={({ on, toggle }) => (
            <button onClick={toggle}> {on ? "ON" : "OFF"}</button>
          )}
        />
      </div>
    </div>
  );
}

export default App;
