import logo from "../../img/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="starwars logo"/>
      </div>
      <div>
        <h1>Powered by Mateus Cesar</h1>
      </div>
    </footer>
  );
};

export default Footer;
