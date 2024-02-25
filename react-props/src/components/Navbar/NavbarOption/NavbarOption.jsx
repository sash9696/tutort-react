
import './NavbarOption.css';

export default function NavbarOption(props) {
    //   console.log(props);
    return (
      <li className="navbar__option">
        <a href={props.link}>{props.text}</a>{" "}
      </li>
    );
  }

