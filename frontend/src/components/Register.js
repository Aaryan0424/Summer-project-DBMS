import React , {useEffect, useState} from "react";
import "../styles/Register.css";
import { register } from "../actions/UserActions";
import { useSelector ,useDispatch } from "react-redux";
import { createBrowserHistory } from "history";

const BrowserHistory = createBrowserHistory();
const Register = ( { history , location } ) => {

    const [name,setName] = useState("");
    const [number,setMobileno] = useState(0);
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading , error , userInfo } = userRegister;

    useEffect(() => {
    if (userInfo) {
        BrowserHistory.push("/");
        window.location.reload(false);
    }
    }, [userInfo, history , location]);

    const SubmitMangager = (e) => {
        e.preventDefault();
        // DISPATCH REGISTER REQUEST
        // console.log(name,number,age,email,password);
        dispatch(register(name,number,age,email,password));
    }

    return(
    <div class="login-box">
        <h2>Register</h2>
        {error && <h3>{error}</h3>} 
        <form>
            <div class="user-box">
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label>Name</label>
            </div>
            <div class="user-box">
            <input type="number" onChange={(e) => setMobileno(parseInt(e.target.value))} />
            <label>Mobile Number</label>
            </div>
            <div class="user-box">
            <input type="text" onChange={(e) => setAge(parseInt(e.target.value))} />
            <label>Age</label>
            </div>
            <div class="user-box">
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
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