import React, { useState } from "react";
// import "./NavbarStyles.css"
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="text-2xl font-bold font-BlinkMacSystemFont antialiased hover:subpixel-antialiased">TECH TALK</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="text-1xl font-bold font-BlinkMacSystemFont antialiased hover:subpixel-antialiased">
          <Link to="/">Mike Santacruz</Link>
        </li>
        <li className="font-thin">
          <Link to="/singlecube">Single Cube</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        {/* <li>
                <Link to="/uverse">U VERSE</Link>
            </li> */}
      </ul>
      {/* <div className="hamburger" onClick={handleClick}>
        {click ? (
          // <FaTimes size={20} style={{ color: "gold" }} />
        ) : (
          // <FaBars size={20} style={{ color: "blue" }} />
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
