import React, { useState } from 'react'

import "./Forgetpass.css"
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Forgetpass = () => { 
  const handleOnChange = (value) => {
    console.log(value); // Do something with the phone number
  };
  return (
    <div className="forgetpass">
        <div className='forgetpass-container'>
        <h1 className='forgetpass-title'>Forget your Password?</h1>
        <p className="forgetpass-text">Enter your Email and Phone number and recover your account</p>
        <input type="text" placeholder='E-mail' className='forgetpass-input'/>

        <div className="forgetpass-hrs">
            <p className='forgetpass-hr'></p> 
            <p className='forgetpass-or'>or</p>
            <p className='forgetpass-hr'></p>
        </div>
        
        <ReactPhoneInput
        inputProps={{
          name: 'phone',
          required: true,
          placeholder: '+91-12345-67890',
          
        }}
        onChange={handleOnChange}
        style={{marginLeft:".8rem",marginTop:".5rem",marginBottom:".5rem"}}
      />
        
        

        <button className="forgetpass-button">RESET PASSWORD</button>
        </div>
    </div>
  )
}

export default Forgetpass