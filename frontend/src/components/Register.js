import React, { useEffect, useState } from "react";
import "../styles/Register.css";
import { register } from "../actions/UserActions";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { render } from "react-dom";

const BrowserHistory = createBrowserHistory();
const Register = ({ history, location }) => {
    const style = {
        background: "linear-gradient(#a4c5e6, #2d9ee4)",
    };
    document.body.style.background = style.background;
    const [name, setName] = useState("");
    const [number, setMobileno] = useState(0);
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            BrowserHistory.push("/");
            window.location.reload(false);
        }
    }, [userInfo, history, location]);

    const SubmitMangager = (e) => {
        e.preventDefault();
        // DISPATCH REGISTER REQUEST
        // console.log(name,number,age,email,password);
        dispatch(register(name, number, age, email, password));
    }
        return (
            <div class="login-box">
                <h2>Register</h2>
                {error &&
                    <div className="MyError2 flex items-center text-white text-sm font-bold px-0 py-0 mb-6 bg-teal-600" role="alert">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                        <p className="m-0">Try Again!!</p>
                    </div>
                }
                <form>
                    <div className="user-box">
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                        <label>Name</label>
                    </div>
                    <div class="user-box">
                        <input type="number" onChange={(e) => setMobileno(parseInt(e.target.value))} />
                        <label>Mobile Number</label>
                    </div>
                    <div class="user-box">
                        <input type="number" onChange={(e) => setAge(parseInt(e.target.value))} />
                        <label>Age</label>
                    </div>
                    <div class="user-box">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        <label>E-mail ID</label>
                    </div>
                    <div class="user-box">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                    <a href="#" onClick={SubmitMangager} >
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