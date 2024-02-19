import "./image/logo_1.svg";
import "./navbar.css";
import adminIcon from "./image/admin-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./image/logo_1.svg";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/Slice/authSlice/authSlice";

const Navbar = () => {
  const { user } = useSelector((store: RootState) => store.auth);

  const dispath = useAppDispatch();
  const navigate = useNavigate();
  function handlerLogout() {
    dispath(logout());
    navigate("/");
  }
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
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
            <NavLink className="navbar-item" to={"/cart"}>
              Cart
            </NavLink>
            <NavLink className="navbar-item" to={"/favorites"}>
              Favorites
            </NavLink>
            {user && (
              <NavLink className="navbar-item" to="/profile">
                User profile
              </NavLink>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {user?.admin && (
                <div>
                  <img src={adminIcon} alt="noPhoto" />
                </div>
              )}
              <div className="buttons">
                {user ? (
                  <>
                    <button className="button is-black" onClick={handlerLogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink className="button is-black" to={"/registration"}>
                      Sign up
                    </NavLink>
                    <NavLink className="button is-black" to={"/login"}>
                      Log in
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
