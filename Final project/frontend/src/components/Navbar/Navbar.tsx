import React from "react";
import { NavLink } from "react-router-dom";

import "./logo_1.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to={"/"}>
            <img src="logo_1.svg" />
            пше
          </NavLink>

          <NavLink
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            to={""}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavLink>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to={"/"}>
              Home
            </NavLink>
            <NavLink className="navbar-item" to={"/categories"}>
              Categories
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary" to={"/registration"}>
                  <strong>Sign up</strong>
                </NavLink>
                <NavLink className="button is-light" to={"/login"}>
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
