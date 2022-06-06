import React from "react";
import "../styles/Navbar.css";

import { useSelector ,useDispatch } from "react-redux";
import { createBrowserHistory } from "history";

const Navbar = () => {
  document.body.style.background = "#47555E";
  const userLogin = useSelector((state) => state.userLogin);
    
  const { loading , error , userInfo } = userLogin;

  const check = () =>{
    if(userInfo){
      return true;
    }
    else
    return false;
  }
  const Logouthandler = (event) => { 
    localStorage.removeItem('userInfo');
  }
  return (
    <nav className="nav">
      <div class="container">
        <div id="mainListDiv" class="main_list">
          <ul class="navlinks">
            <li>
              <a href="/">About</a>
            </li>
            <li>
            { check() ? <a href ="http://localhost:5000/logout"  onClick={Logouthandler}>Logout</a> 
            :
            <a href="/login"> Login </a> }
            </li>
            {check() ? "" : 
              <li>
              <a href="/Register">Register</a>
              </li>
            }
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
