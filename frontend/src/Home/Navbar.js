import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div class="container">
        <div id="mainListDiv" class="main_list">
          <ul class="navlinks">
            <li>
              <a href="/Home">About</a>
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
