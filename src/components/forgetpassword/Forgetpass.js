import React, { useState } from 'react'

import "./Forgetpass.css"
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useFormik } from 'formik';
import { forgetschema } from '../../schemas';

const initialValues = {

  email:"",
  phno:""
}
 

const Forgetpass = () => { 
  const handleOnChange = (value) => {
    // Do something with the phone number
    // Update the Formik values
    handleChange({ target: { name: 'phno', value } });
  };


  /////////////////form handling //////////////////////////////////
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: forgetschema,
    onSubmit: (values, action) => {
      console.log("values is consoled");
      action.resetForm()
    }
  })



  return (
    <div className="forgetpass">
    <form onSubmit={handleSubmit}>
        <div className='forgetpass-container'>
        <h1 className='forgetpass-title'>Forget your Password?</h1>
        <p className="forgetpass-text">Enter your Email and Phone number and recover your account</p>
        <input  type="email" name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} 
         placeholder='E-mail' className='forgetpass-input'/>
        {
              (errors.email && touched.email) && <p style={{ marginTop: "-.35rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.email}</p>
            }


        <div className="forgetpass-hrs">
            <p className='forgetpass-hr'></p> 
            <p className='forgetpass-or'>or</p>
            <p className='forgetpass-hr'></p>
        </div>
        
        <ReactPhoneInput   autoComplete='off' 
        inputProps={{
          name: 'phno',
          required: true,
          placeholder: '+91-12345-67890',
          
        }}
        onChange={handleOnChange}
        style={{marginLeft:".8rem",marginTop:".5rem",marginBottom:".5rem"}}
      />
      {/* {
              (errors.phno && touched.phno) && <p style={{ marginTop: "-.35rem", marginBottom: "0.5rem",marginLeft:".5rem",textAlign:"left" }} className='validation-error'>{errors.phno}</p>
            }
         */}
        

        <button className="forgetpass-button" type="submit">RESET PASSWORD</button>
        </div>
        </form>
    </div>
  )
}

export default Forgetpass