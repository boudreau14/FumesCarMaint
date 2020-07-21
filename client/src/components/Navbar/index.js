import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
    <span className="navbar-toggler-icon" />
  </button>
<div className="navbar-collapse collapse" id="navbar10">


      <Link className="navbar-brand" to="/">
        Car App
      </Link>
      <div>
        <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
