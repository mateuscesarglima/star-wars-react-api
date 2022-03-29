import logo from "../../img/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="starwars logo" />
        <p> Copyright &copy;2022 StarWars React Website </p>
      </div>
    </footer>
  );
};

export default Footer;
