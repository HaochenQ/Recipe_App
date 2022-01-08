import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navbarRef = useRef(null);

  function ResponsiveNav() {
    let x = navbarRef.current;
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    // let x = document.getElementById("navbar");
    // if (x.className === "navbar") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "navbar";
    // }
  }

  return (
    <nav id="navbar" ref={navbarRef} className="navbar">
      <div className="nav-center">
        <Link
          onClick={() => {
            localStorage.removeItem("result");
            window.location.href = "/";
          }}
          to="/"
        >
          <div className="logo">Recipe Hub</div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
        <div className="burger" onClick={() => ResponsiveNav()}>
          <div className="top-line"></div>
          <div className="middle-line"></div>
          <div className="bottom-line"></div>
        </div>
      </div>
    </nav>
  );
}
