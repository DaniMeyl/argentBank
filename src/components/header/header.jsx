import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import "./header.css"
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/actions/User";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => ({
    token: state.userReducer.token,
  }));
  const { user }  = useSelector((state) => ({user : state.userReducer.user}));

  

  return (
    <nav className="main-nav">
      <NavLink
        to="/"
        className="main-nav-logo"
      >
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          <div className="nav-login direction-row">
            <NavLink
              to="/user-profil"
              className="main-nav-item direction-row"
            >
            <FaUserCircle className="fa fa-user-circle" />
            {user.userName}
            </NavLink>
            <NavLink
              to="/"
              className="main-nav-item"
              onClick={() => logOutUser(dispatch)}
            >
              Sign Out
              <FaSignOutAlt className="fa fa-sign-out sing-in-icon" />
            </NavLink>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="main-nav-item"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
