import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };



  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          РОССЕТКА <span className="navbar-sign"></span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            ГЛАВНАЯ
          </Link>
        </li>
        <li>
          <a href="#product" className="navbar-links">
            НАША ПРОДУКЦИЯ
          </a>
        </li>
        <li>
          <a href="#optoviki" className="navbar-links">
            ДЛЯ ОПТОВИКОВ
          </a>
        </li>
      </ul>
      <a href="tel:+73422502202">      <button
          className="navbar-btn"
          type="button"
          disabled={isButtonDisabled}

      >
        <FontAwesomeIcon icon={faCommentDots} /> +7 (342) 250-22-02
      </button></a>


      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              ГЛАВНАЯ
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#product">
              НАША ПРОДУКЦИЯ
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#optoviki">
              ДЛЯ ОПТОВИКОВ
            </a>
          </li>
          <li>
            <a href="tel:+73422502202">      <button
                className="mobile-navbar-btn"
                type="button"
                disabled={isButtonDisabled}

            >
              <FontAwesomeIcon icon={faCommentDots} /> +7 (342) 250-22-02
            </button></a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
