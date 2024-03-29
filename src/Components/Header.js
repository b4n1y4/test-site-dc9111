import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.getElementById("root").style.overflowY = "scroll";
    } else {
      document.getElementById("root").style.overflowY = "hidden";
    }
  };
  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
      document.getElementById("root").style.overflowY = "scroll";
    }, 100);
  };
  return (
    <header>
      <div className="header-contents">
        <a href="/" id="top">
          <img src={logo} alt="dc9111 logo" className="logo" />
        </a>
        <nav className={isMenuOpen ? "menu-open" : "menu-close"}>
          <Link to="/" className="nav-link" onClick={() => closeMenu()}>
            Home
          </Link>
          <span className="seperator">/</span>
          <Link
            to="/team"
            className="nav-link"
            onClick={() => closeMenu()}
          >
            Team
          </Link>
          <span className="seperator">/</span>
          {/* <a href="https://ctf.defcon9111.org" className="nav-link">
            CTF
          </a>
          <span className="seperator">/</span> */}
          <Link to="/faq" className="nav-link" onClick={() => closeMenu()}>
            FAQ
          </Link>
          <span className="seperator">/</span>
          <Link to="/coc" className="nav-link" onClick={() => closeMenu()}>
            Code of Conduct
          </Link>
          <span className="seperator">/</span>
          <Link to="/links" className="nav-link" onClick={() => closeMenu()}>
            Links
          </Link>
        </nav>
        <button className="menu-toggle-btn" onClick={() => handleClick()}>
          {isMenuOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
