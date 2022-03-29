import { Link } from "react-router-dom";

// IMG
import logo from "../../img/logo.svg";

//CSS
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className="menu-navigation">
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
          <li>
            <Link to="/starships">Vehicles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
