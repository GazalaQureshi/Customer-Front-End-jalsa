import React from 'react'
import { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa"
import "./Newpassword.css"




const Newpassword = () => {

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


    const [passwordType2, setPasswordType2] = useState("password");
    const [passwordInput2, setPasswordInput2] = useState("");
    const handlePasswordChange2 = (evnt) => {
        setPasswordInput2(evnt.target.value);
    }

    const togglePassword2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text")
            return;
        }
        setPasswordType2("password")
    }

    return (
        <div className='newpass'>
            <div className="newpass-container">
                <h1 className='newpass-title'>Create new password</h1>
                <p className='newpass-text'>Create your new password</p>

                <div className="newpass-password">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="username" className='newpass-input newpass-input-pass' placeholder="Enter new password" />

                    <button className="newpass-password-btn" onClick={togglePassword}>
                        {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="newpass-password">
                    <input type={passwordType2} onChange={handlePasswordChange2} value={passwordInput2} name="password" className='newpass-input newpass-input-pass' placeholder="Confirm new Password" />

                    <button className="newpass-password-btn" onClick={togglePassword2}>
                        {passwordType2 === "password" ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className='newpass-remember' >
                  <input type="radio" id="newpass-a" style={{marginRight:".4rem"}} />
                  <label htmlFor='newpass-a'>Remember me</label>
                </div>

                <button className="newpass-button">CONTINUE</button>

            </div>

        </div>
    )
}

export default Newpassword