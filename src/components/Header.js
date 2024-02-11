/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <img
              src="/assets/images/profile-icon.png"
              alt=""
              className="rounded-circle"
              width={35}
            />{" "}
            Administrator
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
                <i className="fa fa-unlock-alt m-r-5"></i> Lock screen
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item text-danger">
                <i className="fa fa-power-off m-r-5"></i> LogOut
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
