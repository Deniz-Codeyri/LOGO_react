import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>LOGO</h1>

      <div className="links">
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/about-us"}>About us</NavLink>
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
        <NavLink to={"/news"}>News</NavLink>

        <button>Contact us</button>
      </div>

    </nav>
  );
};

export default Navbar;
