import React, { useState } from "react";
import './loginsignup.css';
import user from '../Assets/person.png';
import email from '../Assets/email.png';
import password from '../Assets/password.png';

const LoginSignUp = () => {
    const [action,setAction] = useState("Sign Up")
    return(
        <div className="Container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src= {user} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                {action==="Sign Up"?<div></div>:
                <div className="Forgpot-password">Lost Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action === "Login"?
                    "submit gray":"Submit"}
                    onClick={()=>{setAction("Sign Up")}}>Sign UP</div>
                    <div className={action === "Sign Up"?
                    "submit gray":"Submit"}
                    onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}
export default LoginSignUp;
