import React from "react";
import "./NavBar.css";
import gear from "../../assets/gear-solid.svg";
function NavBar(props) {
  return (
    <nav className="nav">
      <h2>Air Polution </h2>
      <img src={gear} alt="gear" className="nav-icon" />
    </nav>
  );
}

export default NavBar;
