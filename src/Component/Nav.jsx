import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <h1>
            <Link to="/#">React axios CRUD</Link>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h2>
                  <Link to="/">Home</Link>
                </h2>
              </li>
              <li className="nav-item">
                <h2>
                  <Link to="/userinfo">UserInfo</Link>
                </h2>
              </li>
              <li className="nav-item">
                <h2>
                  <Link to="/create">Create</Link>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
