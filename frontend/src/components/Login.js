import React , {useEffect, useState} from "react";
import "../styles/Login.css";
import { login } from "../actions/UserActions";
import { useSelector ,useDispatch } from "react-redux";
import { createBrowserHistory } from "history";

const BrowserHistory = createBrowserHistory();

function Login( { history , location } ) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const details1 = (event) => {
    setEmail(event.target.value);
  };
  const details2 = (event) => {
    setPassword(event.target.value);
  };
  
  const dispatch = useDispatch();
  
  const userLogin = useSelector((state) => state.userLogin);
  
  const { loading , error , userInfo } = userLogin;

  
  const SubmitMangager = (e) => {
    e.preventDefault();
    // DISPATCH THE REQUEST
    dispatch(login(email, password));
  }
  
  useEffect(() => {
    if (userInfo) {
      BrowserHistory.push("/");
      window.location.reload(false);
    }
  }, [userInfo, history , location]);
  

  return (
    <div class="login-box">
      <h2>Login</h2>
      {error && <h1>{error}</h1>}
      <form>
        <div class="user-box">
          <input type="text" name="" required="" onChange={details1} />
          <label>Username / E-mail ID</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" onChange={details2} />
          <label>Password</label>
        </div>
        <a href="#" onClick={SubmitMangager}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Login;
