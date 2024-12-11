import React from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import "../styles/navbar.css";
import you from "../assets/icons/Group.svg"
import camera from "../assets/icons/camera.svg"
import kvadrat from "../assets/icons/kvadrat.svg"
import bell from "../assets/icons/bell.svg"
import man from "../assets/icons/man.svg"
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button">☰</button>
        <img src={you} alt="" />
        <h1 className="navbar-title">Youtube</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <SearchIcon className="search-icon" />


      </div>
      <div className="Man">
      <img src={camera} alt="" />
      <img src={kvadrat} alt="" />
      <img src={bell} alt="" />
      <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
