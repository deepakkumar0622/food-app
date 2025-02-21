import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./navbar.css";

const Navbar = () => {
  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("item")}
          className={menu === "item" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile app
        </li>
        <li
          onClick={() => setmenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
