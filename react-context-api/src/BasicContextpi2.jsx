import { createContext, useContext } from "react";

//React Context API

//inbuilt in react
//it solves the problem of prop drilling

//react context api setup

//3 steps

//1. Create a context using createContext
//2. Use a PRovider component to make data excessilble
//3. Use consumer component or useContext hook to extract the value from context

const UserContext = createContext();

console.log("UserContext", UserContext);

function User4() {
  const data = useContext(UserContext);
  console.log("data", data);

  return <div>User Component 4{data}</div>;
}
function User3() {
  return (
    <div>
      User Component 3
      <User4 />
    </div>
  );
}

function User2() {
  return (
    <div>
      User Component 2
      <User3 />
    </div>
  );
}

function User() {
  return (
    <div>
      User Component
      <User2 />
    </div>
  );
}

function AnotherComponent() {
  // const data = useContext(UserContext);
  // console.log("data", data);
  return <h3>AnotherComponent</h3>;
}
function App() {
  const userName = "John";

  return (
    <div>
      App
      <UserContext.Provider value={userName}>
        <User />
      </UserContext.Provider>
      <AnotherComponent />
    </div>
  );
}

export default App;
