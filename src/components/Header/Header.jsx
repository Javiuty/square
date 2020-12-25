import React from "react";
import "./Header.css";
import Logo from "../../img/logo-YTS.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <h2>HD movies at the smallest file size</h2>
      </div>
      <div className="container">
        <form>
          <input type="text" name="search" />
        </form>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>Trending</li>
        <li>Browse Movies</li>
      </ul>
    </header>
  );
};

export default Header;
