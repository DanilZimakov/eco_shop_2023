
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
<<<<<<< HEAD
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
=======
          <NavLink className="navbar-item" to={"https://bulma.io"}>
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </NavLink>
>>>>>>> dev

          <NavLink role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" to={''}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavLink>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
<<<<<<< HEAD
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Documentation</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
=======
            <NavLink className="navbar-item" to={'/'}>
              Home
            </NavLink>
            <NavLink className="navbar-item" to={'/categories'}>
              Categories
            </NavLink>

        </div>

        <div className="navbar-end">
>>>>>>> dev
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary" to={'/registration'}>
                  <strong>Sign up</strong>
                </NavLink>
                <NavLink className="button is-light" to={'/login'}>
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
