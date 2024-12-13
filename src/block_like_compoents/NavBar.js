import React from "react";
import MechLinkLogo from "../block_like_compoents/Logo";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-top-0 mb-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MechLink
        </Link>
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booked">
                Booked Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">
                Work History
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comments">
                Review Comments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
