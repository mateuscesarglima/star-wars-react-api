import { Link } from "react-router-dom";

// IMG
import logo from "../../img/logo.svg";

//CSS
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="menu-navigation">
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Species</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
          <li>
            <a href="#">Vehicles</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
