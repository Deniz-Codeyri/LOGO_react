import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>LOGO</h1>

      <div className="links">
        <NavLink className="a_tags" to={"/"} >Home</NavLink>
        <NavLink className="a_tags" to={"/about-us"}>About us</NavLink>
        <NavLink className="a_tags" to={"/portfolio"}>Portfolio</NavLink>
        <NavLink className="a_tags" to={"/news"}>News</NavLink>

        <button>Contact us</button>
      </div>

    </nav>
  );
};

export default Navbar;
