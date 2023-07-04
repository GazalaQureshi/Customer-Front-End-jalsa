import React from 'react'
import "./Createaccount.css"
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useFormik } from 'formik';
import {  signupschema } from '../../schemas';

const initialValues = {

  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirm_password:"",
  agree:""
}


const Createaccount = () => {


   /////////////////form handling //////////////////////////////////
   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:signupschema,
    onSubmit: (values, action) => {
      console.log("values is consoled");
      action.resetForm()
    }
  })
  console.log(values);

    const [passwordType, setPasswordType] = useState("password");
  
  const togglePassword = () => { 
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

    return (
        <div className='createacc'>
        <form onSubmit={handleSubmit}>
            <div className='createacc-container'>
                <h1 className='createacc-title'>Create an account and discover the benefits</h1>
                <p className="createacc-text">his is the login form containing two lines This is the login form containing two lines his is the login form containing two lines This is the login </p>

                <div className='createacc-inputs'>
                    <input  type="text" name="firstName" autoComplete='off' value={values.firstName} onChange={handleChange} onBlur={handleBlur} 
                     placeholder='First Name' className='createacc-input' />
                    {
              (errors.firstName && touched.firstName) && <p style={{ marginTop: "-.65rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.firstName}</p>
            }
                    <input  type="text" name="lastName" autoComplete='off' value={values.lastName} onChange={handleChange} onBlur={handleBlur} 
                     placeholder='Last Name' className='createacc-input' />
                    {
              (errors.lastName && touched.lastName) && <p style={{ marginTop: "-.65rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.lastName}</p>
            }
                    <input type="email"  name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} 
                     placeholder='Email' className='createacc-input' />
                    {
              (errors.email && touched.email) && <p style={{ marginTop: "-.65rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.email}</p>
            }
                    <div className="login-password">
                    <input type={passwordType }  name="password" autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} 
                   className='createacc-input'   placeholder="Password" />    
                        <button className="login-password-btn" onClick={togglePassword}>
                            {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {
              (errors.password && touched.password) && <p style={{ marginTop: "-.65rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.password}</p>
            }
                    
                </div>

                <div className="createacc-agree">
                    <input type="radio" id="signup-agree" name="agree" value="agree" onChange={handleChange} onBlur={handleBlur}/>
                    <label htmlFor="signup-agree">I agree to the Fashion Jalsa terms of Services and Privacy Policy</label>
                </div>
                <button className="createacc-button" type="submit">SIGN UP</button>
                <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}> <p className='createacc-already'>Are you already a member?</p></Link>
            </div>
            </form>
        </div>
    )
}

export default Createaccount