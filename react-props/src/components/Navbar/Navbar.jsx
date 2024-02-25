
  import './Navbar.css';
  import NavbarOption from './NavbarOption/NavbarOption';

  function Navbar(props) {
    console.log(props);
  
  
    const navItems = props.navOptions.map(function (option, index) {
      return (
        <NavbarOption key={index} link={option.link} text={option.text} />
      );
    })
  
    return (
      <nav className="navbar">
        <div className="navbar__logo">{props.logoName}</div>
        <ul className="navbar__options">
          {/* navigation options */}
          {/* {props.navOptions.map(function (option, index) {
            return (
              <NavbarOption key={index} link={option.link} text={option.text} />
            );
          })} */}
  
          {navItems}
        </ul>
      </nav>
    );
  }

export default Navbar