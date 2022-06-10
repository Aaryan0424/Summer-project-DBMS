import React from "react";
import "../styles/Register.css";
const Register = () => {
    return(
    <div class="login-box">
        <h2>Register</h2>
        {/* {error && <h1>{error}</h1>}  */}
        <form>
            <div class="user-box">
            <input type="text" name="" required="" /*onChange={details1} */ />
            <label>Name</label>
            </div>
            <div class="user-box">
            <input type="number" name="" required="" /*onChange={details1} */ />
            <label>Mobile Number</label>
            </div>
            <div class="user-box">
            <input type="number" name="" required="" /*onChange={details1} */ />
            <label>Age</label>
            </div>
            <div class="user-box">
            <input type="text" name="" required="" /*onChange={details1} */ />
            <label>E-mail ID</label>
            </div>
            <div class="user-box">
            <input type="password" name="" required="" /* onChange={details2} */ />
            <label>Password</label>
            </div>
            <a href="#" /*onClick={SubmitMangager}*/ >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </a>
        </form>
    </div>
    )
}

export default Register;