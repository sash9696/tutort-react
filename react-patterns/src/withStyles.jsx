/* eslint-disable react/display-name */
import React from "react";

//HOC
//one way of reuseing the same logic in multiple components,
//is  by using HOC pattern

//HOC is a component that recieves another component
//HOC will contain some logic that u want to apply to the component
//that we pass as a parameter
//it returns the element with the additional logic

function withStyles(Component) {
  return (props) => {
    const style = { padding: "0.2rem", margin: "1rem" };

    return <Component style={style} {...props} />;
  };
}

// function Button(props) {
//   console.log("Button", props);
//   return <button  style={props.style} >Click Me!</button>;
// }
// function Text(props) {
//   "Text", props;
//   return <p style={props.style}>Hello World</p>;
// }
const Button = (props) => <button  style={props.style} >Click Me!</button>;
const Text = (props) => <p style={props.style}>Hello World</p>;


function App() {
  const StyledButton = withStyles(Button);
  const StyledText = withStyles(Text);

  return (
    <div>
      App
      <div>
        <StyledButton />
      </div>
      <div>
        <StyledText />
      </div>
    </div>
  );
}

export default App;
