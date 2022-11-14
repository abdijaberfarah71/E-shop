import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navabr = () => {
  const getMenu = () => {
    document.querySelector(".active").classList.toggle("d-block");
  };
  return (
    <nav className="header">
      <nav className="navabar">
        <div className="brand">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faShoppingBag} className="faBag" />
          </Link>

          <h1 className="nav-brand">
            <Link to="/" className="nav-link">
              Razan Market
            </Link>
          </h1>
        </div>
        <ul className="list-group">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/content" className="nav-link">
            Shop
          </Link>
          <Link to="/footer" className="nav-link">
            Cart
          </Link>
        </ul>

        <FontAwesomeIcon icon={faBars} className="fa-bar" onClick={getMenu} />
      </nav>
      <ul className="active">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="content" className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to="footer" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navabr;
