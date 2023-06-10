import React from 'react'
import "./login.css"
import fb from "../../images/logos/fb.png"
import google from "../../images/logos/google.png"
import apple from "../../images/logos/apple.png"
import { useState } from "react"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { Link } from 'react-router-dom'

 
const Login = () => {

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
    <div className="login">
      <div className='login-container'>

 

        <div className="login-form">
          <h1 className='login-title'>Log in</h1>
          <p className="login-text">This is the login form containing two lines This is the login form containing two lines</p>
          <input type="text" placeholder='E-mail' className='login-input' />

          <div className="login-password">
            <input type={passwordType} onChange={handlePasswordChange}  value={passwordInput} name="password" className='login-input login-input-pass' placeholder="Password" />
            
            <button className="login-password-btn" onClick={togglePassword}>
              {passwordType === "password" ? <FaEyeSlash/> : <FaEye/> }
            </button>
          </div>

            

              <div className='login-forget'>
                <div className='login-forget-1'>
                  <input type="radio" />
                  <label >Keep me Signed in</label>
                </div>
                <Link to="/forget-password" className='login-forget-2'  >
                  forget password?
                </Link>
              </div>

              <div className="login-logos">
                <img src={fb} alt="fb" className='login-logosingle' />
                <img src={apple} alt="apple" className='login-logosingle' />
                <img src={google} alt="google" className='login-logosingle' />
              </div>

              <p className='login-otp'><Link to="/login-otp" style={{color:"inherit"}}>Login Using OTP</Link></p>
             <button className="login-button">SIGN IN</button>

              <div className='lsignup'>
                <p className='lsignup-1'>Not a member yet?</p>
                <Link  to="/signup" style={{color:"inherit",textDecoration:"none"}}><p className='lsignup-2'>Sign up</p></Link>
              </div>

            
          </div>
        </div>
      </div>
      )
}

      export default Login