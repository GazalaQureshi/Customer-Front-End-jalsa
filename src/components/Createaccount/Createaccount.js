import React from 'react'
import "./Createaccount.css"
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';


const Createaccount = () => {

    const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value); 
  }
  const togglePassword = () => { 
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

    return (
        <div className='createacc'>
            <div className='createacc-container'>
                <h1 className='createacc-title'>Create an account and discover the benefits</h1>
                <p className="createacc-text">his is the login form containing two lines This is the login form containing two lines his is the login form containing two lines This is the login </p>

                <div className='createacc-inputs'>
                    <input type="text" placeholder='First Name' className='createacc-input' />
                    <input type="text" placeholder='Last Name' className='createacc-input' />
                    <input type="text" placeholder='Email' className='createacc-input' />
                    <div className="login-password">
                    <input type={passwordType} onChange={handlePasswordChange} className='createacc-input'  value={passwordInput} name="password"  placeholder="Password" />    
                        <button className="login-password-btn" onClick={togglePassword}>
                            {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    
                </div>

                <div className="createacc-agree">
                    <input type="radio" id="signup-agree" />
                    <label htmlFor="signup-agree">I agree to the Fashion Jalsa terms of Services and Privacy Policy</label>
                </div>
                <button className="createacc-button">SIGN UP</button>
                <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}> <p className='createacc-already'>Are you already a member?</p></Link>
            </div>
        </div>
    )
}

export default Createaccount