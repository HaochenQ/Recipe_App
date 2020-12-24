import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <div className="logo">Recipe Hub</div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
