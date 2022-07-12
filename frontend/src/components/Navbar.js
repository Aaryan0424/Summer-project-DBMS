import {React} from 'react';
import { useEffect , useState } from "react";
import "../styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
    document.body.style.background = "#47555E";

    const userLogin = useSelector((state) => state.userLogin);
    
    const { loading , error , userInfo } = userLogin;
    
    const dispatch = useDispatch()
    const check = () =>{
        if(userInfo){
        return true;
        }
        else
        return false;
    }
    const Logouthandler = (event) => { 
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cartItems');
        dispatch({type : 'CART_RESET'}); 
    }
    useEffect( () => {
        const handlescroll = () => {
            const check = window.scrollY > 10;
            if(check)
            {
                document.querySelector(".navbar").classList.add("active");
            }   
            else
            {
                document.querySelector(".navbar").classList.remove("active");
            }
        }  
        document.addEventListener("scroll", handlescroll);
        return () => {
            document.removeEventListener("scroll", handlescroll);
        }
},[]);

    const [show, setShow] = useState(false);

    return(
        <header className ="header">
        <nav className="navbar navbar-expand-lg fixed-top " style={{boxShadow : "none"}} >
            <div className="container">
                <a href="#" className = "navbar-brand text-uppercase font-weight-bold" id='logo-name'>Transparent Nav</a>
            <button type="button" data-toggle = "collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right" onClick={()=>setShow(!show)}>Click</button>
                
                <div id = "navbarSupportedContent" className = "collapse navbar-collapse" style={show?{display:"block"}:{display:"none"}}>
                    <ul className="navbar-nav ml-auto text-xl ">
                        <li className="nav-item active pr-24"><a href="/" className="nav-link text-uppercase font-bold">About <span class="sr-only">(current)</span></a></li>
                        { 
                        check() ? 
                        <li className="nav-item pr-24"><a href="/Dashboard" className="nav-link text-uppercase font-weight-bold">Dashboard</a></li>
                        :
                        null
                        }
                        { 
                        check() ? 
                        <li className="nav-item pr-24"><a href="http://localhost:5000/logout" className="nav-link text-uppercase font-weight-bold" onClick={Logouthandler}>Logout</a></li>
                        :
                        <li className="nav-item pr-24"><a href="/login" className="nav-link text-uppercase font-weight-bold">Login</a></li>
                        }
                        {
                        check() ? 
                        "" 
                        :
                        <li className="nav-item pr-24"><a href="/Register" className="nav-link text-uppercase font-weight-bold">Register</a></li>
                        }
                        <li className="nav-item"><a href="/Dashboard" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
</header>
    );
}

export default Dashboard;