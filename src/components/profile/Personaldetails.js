import React from 'react'
import "./Personaldetails.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import { editprofileschema } from '../../schemas';




const initialValues ={
  name:"",
  email:"",
  number:"",
  DOB:""
}



//////Edit Profile mobile view/////////////
const Personaldetails = () => {

  
  /////////////////form handling //////////////////////////////////
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:editprofileschema,
    onSubmit: (values,action) =>{
      console.log("values is consoled");
      action.resetForm()
    }
  })
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className='setprofile-right' style={{ width: "100%", border: "1px solid rgb(218,220,222)",borderRadius:"15px",marginTop:"1.5rem",padding: "1rem",margin:"1rem" }}>
          <h1 className='pdetails-heading'>Edit Profile</h1>
            <div className='pdetails'>
            <form onSubmit={handleSubmit}>
            <label htmlFor='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>Full Name *</label>
          <input  type="text"  name="name" autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur}
            id="ck-name" className='pdetails-input' placeholder='Enter Your Full Name' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px"}} />
          {
          (errors.name && touched.name )&& <p style={{marginTop:"-1rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.name}</p>
        }
          <label htmlFor='ck-email' style={{ display: "block", marginBottom: ".2rem" }}>Enter Your Email Address</label>
          <input type="text"  name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur}
            id="ck-email" className='pdetails-input' placeholder='Enter Your Email Address' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          {
          (errors.email && touched.email )&& <p style={{marginTop:"-1rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.email}</p>
        }
          <label htmlFor='ck-phno' style={{ display: "block", marginBottom: ".2rem" }}>Phone Number *</label>
          <input  type="text"  name="number" autoComplete='off' value={values.number} onChange={handleChange} onBlur={handleBlur}
           id="ck-phno" className='pdetails-input' placeholder='Enter Your Phone Number' style={{ paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          {
          (errors.number && touched.number )&& <p style={{marginTop:"-1rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.number}</p>
        }
          <label htmlFor='ck-dob' style={{ display: "block", marginBottom: ".2rem" }}>Date of Birth *</label>
          <input   name="DOB" autoComplete='off' value={values.DOB} onChange={handleChange} onBlur={handleBlur}
          type="date" id="ck-dob" className='ck-input' placeholder='DD / MM / YY' style={{ width: "32%", height: "30px",padding:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          {
          (errors.DOB && touched.DOB )&& <p style={{marginTop:"0.1rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.DOB}</p>
        }
        <button className='pd-right-update' type="submit">UPDATE</button>
        </form>
            </div>
          
        </div>
    </div>
  )
}

export default Personaldetails