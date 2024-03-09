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

function User() {
  const userName = useContext(UserContext);
  console.log('userName',userName)
  
  return (
    <div>
      User Component
      <div>{userName}</div>
      {/* <UserContext.Consumer>
        {
          (values) => {
            return <div>{values}</div>
          }
        }
      </UserContext.Consumer> */}
      
    </div>
  );
}
function App() {
  const userName = "John";
  
  return (
    <div>
      App
      <UserContext.Provider value={userName} >
        <User />
      </UserContext.Provider>
    </div>
  );
}

export default App;
