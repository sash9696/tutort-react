// import React from "react";
// import "./App.css";

// function App() {
//   return React.createElement(
//     "div",
//     { className: "app" },
//     React.createElement("h1", null, "Hello, World!"),
//     React.createElement("p", null, "this is react program without jsx")
//   );
// }

// export default App;

// react is all about components
//components are building blocks of react

import "./App.css";

// const  Navbar = () => {

//   return (
//     <h1>Navbar Component</h1>
//   )
// }

function NavbarOption(props) {
  console.log(props);
  return (
    <li className="navbar__option">
      <a href= {props.link} >{props.text}</a>{" "}
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>
      <ul className="navbar__options">
        {/* navigation options */}
        <NavbarOption text="Home" link='/' />
        <NavbarOption text="About" link='/about'/>
        <NavbarOption text="Services" link='/services'/>
        <NavbarOption text="Contact" link='/contact'/>
      </ul>
    </nav>
  );
}

// function Navbar(){

//   return (
//     <nav className='navbar'>
//       <div className='navbar__logo'>
//         Logo
//       </div>
//       <ul className='navbar__options'>
//         {/* navigation options */}
//         <li className='navbar__option'><a href='/'>Home</a> </li>
//         <li className='navbar__option'><a href='/about'>About</a> </li>
//         <li className='navbar__option'><a href='/services'>Services</a> </li>
//         <li className='navbar__option'><a href='/contact'>Contact</a> </li>

//       </ul>
//     </nav>
//   )
// }

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
