import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  document.body.style.background = "#47555E";
  return (
    <nav className="nav">
      <div class="container">
        <div id="mainListDiv" class="main_list">
          <ul class="navlinks">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
            <li>
              <a href="/Register">Register</a>
            </li>
            <li>
              <a href="/">Contact-Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
