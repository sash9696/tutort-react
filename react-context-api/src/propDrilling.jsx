import React, { useEffect, useState } from "react";

//each and every component has its own data
//state and props
//props or properties are used to pass data from
//parent component to child component

//prop drilling
//passing down props from top level component tthrough multiple layers
//of nested component
//for big apps it can become vumbersome lead to code maintenance issues


//Solutions
//React Context API
//it provides a way to share data across compoennts without passing props manually at every component

//State Management Libraries like Redux, MobX. Flux, Recoil, Zudstand
//it provides a way to share data across compoennts without passing props manually at every component
//it can help centralize and manage appl state in more organized way

//Higher Order Components (HOCs)
//HOC are functions that takes a component as input and return a new
//component with enhanced functionality

//Render props
//component's prop is a function that basically tells component what to render

//Component Composition
//break down UI into smaller reusable componens that combines
//together to create more complex components



function User4(props) {


  return (
    <div
      style={{
        width: 50,
        height: 50,
        border: "1px solid black",
      }}
    >
      <div>User4</div>
      <div>
        is : {props.userName}
      </div>
      
    </div>
  );
}
function User3(props) {


  return (
    <div
      style={{
        width: 80,
        height: 80,
        border: "1px solid black",
      }}
    >
      <div>User2</div>
      <User4 userName={props.userName} />
    </div>
  );
}
function User2(props) {


  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: "1px solid black",
      }}
    >
      <div>User2</div>
      <User3 userName={props.userName} />
    </div>
  );
}
function User1(props) {

  return (
    <div
      style={{
        width: 200,
        height: 200,
        border: "1px solid black",
      }}
    >
      <div>User1</div>
      <User2 userName={props.userName} />
    </div>
  );
}
function User(props) {
  // console.log(`User rendered`)

  // useEffect(() => {
  //   console.log(`User useEffect rendered`)

  // }, [])

  return (
    <div
      style={{
        width: 300,
        height: 300,
        border: "1px solid black",
      }}
    >
      <div>User</div>
      <User1 userName={props.userName} />
    </div>
  );
}
function App() {
  // const [show, setShow] = useState(false)
  // console.log(`App rendered`)

  const userName = "John";
  return (
    <div
      style={{
        width: 400,
        height: 400,
        border: "1px solid black",
        display: "grid",
        placeItems: "center",
      }}
    >
      App
      {/* <button onClick={() => setShow(!show)} >SHow</button> */}
      <User userName={userName} />
    </div>
  );
}

export default App;
