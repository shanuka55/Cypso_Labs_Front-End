import React, { useState } from "react";
import "../Components/Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change nav colour when scroling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //close menu on click
  // const closeMenu = () => setClick(false)

  return (
    <header className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo"></a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Customer
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="breeds"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Product
            </Link>
          </li>
          <button className="signin-btn">
            {" "}
            <span>Sign In</span>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
