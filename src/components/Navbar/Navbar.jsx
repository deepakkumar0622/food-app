/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./navbar.css";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/StoreContext";

const Navbar = ({ setLogin }) => {
  const [menu, setmenu] = useState("home");
  const { totalAmount } = useContext(storeContext);
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setmenu("item")}
          className={menu === "item" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setmenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={totalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
