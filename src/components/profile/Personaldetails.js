import React from 'react'
import "./Personaldetails.css"

const Personaldetails = () => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className='setprofile-right' style={{ width: "70%", border: "1px solid rgb(218,220,222)",borderRadius:"15px",marginTop:"1.5rem",padding: "1rem 1rem 1rem 2rem " }}>
          <h1 className='pdetails-heading'>Add New Address</h1>
          <div className='pdetails'>
          <label htmlFor='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>Full Name *</label>
          <input type="text" id="ck-name" className='pdetails-input' placeholder='Enter Your Full Name' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px"}} />
          <label htmlFor='ck-email' style={{ display: "block", marginBottom: ".2rem" }}>Enter Your Email Address</label>
          <input type="text" id="ck-email" className='pdetails-input' placeholder='Enter Your Email Address' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          <label htmlFor='ck-phno' style={{ display: "block", marginBottom: ".2rem" }}>Phone Number *</label>
          <input type="text" id="ck-phno" className='pdetails-input' placeholder='Enter Your Phone Number' style={{ paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          <label htmlFor='ck-dob' style={{ display: "block", marginBottom: ".2rem" }}>Date of Birth *</label>
          <input type="text" id="ck-dob" placeholder='DD / MM / YY' style={{ width: "20%", height: "35px",paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          </div>
          <button className='pd-right-update'>UPDATE</button>
        </div>
    </div>
  )
}

export default Personaldetails