/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <div className="text-center">
          <a href="" className="brand-link pb-4">
            <h1 className="brand-text font-weight-bold">B A M S</h1>
          </a>
        </div>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-header">MAIN</li>
              <li className="nav-item pb-3">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fa fa-home" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item pb-3">
                <a href="/dashboard/member" className="nav-link">
                  <i className="nav-icon fa fa-user" />
                  <p>Members</p>
                </a>
              </li>
              <li className="nav-header">MANAGEMENT</li>
              <li className="nav-item pb-3">
                <a href="/dashboard/attendance" className="nav-link">
                  <i className="nav-icon ion ion-android-clipboard" />
                  <p> Member Logs</p>
                </a>
              </li>
              <li className="nav-item pb-3">
                <a href="/dashboard/visitor" className="nav-link">
                  <i className="nav-icon ion ion-android-clipboard" />
                  <p> Visitor Logs</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/dashboard/settings" className="nav-link">
                  <i className="nav-icon fa fa-cog"/>
                  <p>Settings</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default Sidebar;
