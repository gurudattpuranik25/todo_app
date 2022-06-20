import React from "react";
import headerImage from "../images/headerImage.png";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <img className="nav-image" src={headerImage} alt="" />
      <h1 className="heading">TODO APP</h1>
    </div>
  );
}

export default Header;
