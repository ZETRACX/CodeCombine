import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <h2>
            Code<span className="logo-color">Combine</span>
          </h2>
        </div>
        <div className="nav-right">
          <Link className="link-tag" to="/">
            Home
          </Link>
          <Link className="link-tag" to="/code">
            WorkSpace
          </Link>
        </div>
      </nav>
    </div>
  );
};
