import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            <span> Szukaj pogody</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/location" className="nav-link">
            <span> Pogoda na dziś</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/long-range" className="nav-link">
            <span> Pogoda długoterminowa</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
