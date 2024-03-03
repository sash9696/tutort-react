import { useEffect, useState } from "react";
import "./App.css";

//Effects => some components require to synchronize with external systems
//=> Effects allows us to run some code after rendering so that component can be in sync witht the system oustside of react
//=> Effects lets u specify side effects that are caused by rendering, rather a particular event
//useeffect =>
//1. declare an effect using useeffect hook
//2.specify the dependicies in the array
//3.Add a cleanup logic if required

//Component's lifecycle
//1. Mounting:  birth of a component, added to the screen, added to the dom (A component mounts when it is added to the screen)
//2:Updating: A component updates, when it recieves new state or props (ex in response to an interaction)
//3.Unmounting:component destroyed, a component unmounts when it is removed from the screen

//two types of logics in a react component
//Rendering => take props and state and transform them and return jsx on the screen. it just calculates

//Event handlers => They are nested functions inside the components and do much more like update an input field, submit an http post request, navigate to another screen.
//event handlers also contains side effects (they change the program state) due to user's specific action (button click)

//form and u want to submit a user's data => make a api post request on onSubmit event
//display a list of users =>  side effect cause by rendering

function App() {
  //Rules of hooks
  //that should inside top level management
  //inside a react function or component only

  // useEffect(function, dependecyArray);
  //dependecyArray is optional

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // useEffect(function () {
  //   console.log("useffect called");
  // }, []); //empty dependency array => only once after the component mounts

  // useEffect(function () {
  //   console.log("useffect called");
  // }); //empty dependency array => only once after the component mounts
  // //it will run after every render , initial render and in updates also


  // useEffect(function () {
  //   console.log("Show changed: ", show);
  // }, [show]); 

  //cleanup function inside useEffect
  //for example => connect and disconnect, subscribe and unsubscribe, making a fetch request and u need to cancel or abort request

useEffect(function(){


  return function (){
    //cleanup function
    //when the component is about the unmount
  }
}, [])
  



  console.log(`App component rendered`);

  return (
    <div>
      <h1>Count:{count} </h1>
      <div>
        <button style={{
          margin: "0 10px"
        }} onClick={() => setCount(count + 1)} >increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setShow(!show)} >Click</button>
      </div>
    </div>
  );
}

export default App;
