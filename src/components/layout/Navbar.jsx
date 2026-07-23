import { Link, NavLink } from "react-router-dom";
import "../../services/styles/layout/navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-logo" to="/">
            <img src={logo} alt="DevHub Logo" />
          </Link>

          <ul className="navbar-menu">
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/">
                خانه
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/developers">
                توسعه دهندگان
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/repositories">
                مخزن ها
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/about">
                درباره ما
              </NavLink>
            </li>
          </ul>
        </div>
          <div className="navbar-actions"></div>
      </nav>
    </header>
  );
};

export default Navbar;
