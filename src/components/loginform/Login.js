import React from 'react'
import "./login.css"
import fb from "../../images/logos/fb.png"
import google from "../../images/logos/google.png"
import apple from "../../images/logos/apple.png"
import { useState } from "react"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { loginschema } from '../../schemas'
import { useFormik } from 'formik'


const initialValues = {

  email:"",
  password:"",
  keeplogin:""
}
 
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

  /////////////////form handling //////////////////////////////////
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginschema,
    onSubmit: (values, action) => {
      console.log("values is consoled");
      action.resetForm()
    }
  })


  return (
    <div className="login">
      <div className='login-container'>

 

        <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1 className='login-title'>Log in</h1>
          <p className="login-text">This is the login form containing two lines This is the login form containing two lines</p>
          <input  type="email" name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur}
         placeholder='E-mail' className='login-input' />
          {
              (errors.email && touched.email) && <p style={{ marginTop: "-.65rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.email}</p>
            }

          <div className="login-password">
            <input  autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur}
            type={passwordType} name="password" className='login-input login-input-pass' placeholder="Password" />
            {
              (errors.password && touched.password) && <p style={{ marginTop: "-.35rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.password}</p>
            }

            <button className="login-password-btn" onClick={togglePassword}>
              {passwordType === "password" ? <FaEyeSlash/> : <FaEye/> }
            </button>
          </div>

            

              <div className='login-forget'>
                <div className='login-forget-1'>
                  <input id="aa-radio1" name="keeplogin" value={true} onChange={handleChange} onBlur={handleBlur} 
                   type="radio" />
                  <label htmlFor='aa-radio1' >Keep me Signed in</label>
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
             <button className="login-button" type="submit">SIGN IN</button>

              <div className='lsignup'>
                <p className='lsignup-1'>Not a member yet?</p>
                <Link  to="/signup" style={{color:"inherit",textDecoration:"none"}}><p className='lsignup-2'>Sign up</p></Link>
              </div>

              </form>
          </div>
        </div>
      </div>
      )
}

      export default Login