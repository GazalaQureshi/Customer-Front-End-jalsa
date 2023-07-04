import React, { useState, useEffect } from 'react'
import "./Addaddress.css"
import { BiEdit } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"

import { IoIosArrowForward } from "react-icons/io"
import profile_img from "../../images/bestseller/b5.png"
import edit_profile from "../../images/profile/edit_profile.png"
import my_order from "../../images/profile/my_orders.png"
import payments from "../../images/profile/payments.png"
import notification from "../../images/profile/notification.png"
import address from "../../images/profile/address.png"
import invite from "../../images/profile/invite_frnds.png"
import cust_support from "../../images/profile/customer_support.png"
import rate_app from "../../images/profile/rate_app.png"
import suggestion from "../../images/profile/make_suggestion.png"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { addAddressschema } from '../../schemas'


const initialValues = {


  name: "",
  email: "",
  phno: "",
  city: "",
  region: "",
  postalcode: "",
  aaradio: "",
  aasave: ""
}

const Addadress = () => {
  const [showsection, setShowsection] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShowsection(false);

      } else {
        setShowsection(true);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize); // Listen for window resize events

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const getDivWidth = () => {
    if (window.innerWidth > 992) {
      return '55%';
      // } else if (window.innerWidth > 600) {
      //   return '500px';
    } else {
      return '100%';
    }
  };

  /////////////////form handling //////////////////////////////////
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: addAddressschema,
    onSubmit: (values, action) => {
      console.log("values is consoled");
      action.resetForm()
    }
  })

  //////////////hande number change//////////////////
  //////////handle CVV change///////////////////////
  const handlePhnoChange = (e) => {
    const inputValue = e.target.value;

    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');

    const formattedValue = numericValue.slice(0, 14); // Limit the input to a maximum of 3 characters

    handleChange(e.target.name)(formattedValue); // Call Formik's handleChange with the formatted value
  };
  //////////////state Options////////////////////////////
  const stateOptions = [
    { value: 'andaman and nicobar islands', label: 'Andaman and Nicobar Islands' },
    { value: 'andhra pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal pradesh', label: 'Arunachal Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chandigarh', label: 'Chandigarh' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal pradesh', label: 'Himachal Pradesh' },
    { value: 'jammu and kashmir', label: 'Jammu and Kashmir' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'lakshadweep', label: 'Lakshadweep' },
    { value: 'madhya pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'puducherry', label: 'Puducherry' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'tripura', label: 'Tripura' },
    { value: 'uttar pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west bengal', label: 'West Bengal' },
  ];

  return (
    <div className='savedcard' style={{ display: "flex", justifyContent: "space-between" }}>
      {
        showsection ?
          <div className='savedcard-left' style={{ width: "370px", marginLeft: "3rem" }}>

            <div className="sp-left1" style={{ display: "flex", alignItems: "center", marginLeft: "1rem", marginTop: "1rem" }}>
              <img src={profile_img} alt="profile-imag" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
              <div style={{ marginLeft: "1rem", textAlign: "center" }}>
                <h2 style={{ margin: "0", marginTop: "1.3rem", fontSize: "1.1rem" }}>Hello,</h2>
                <h1 style={{ margin: "0", fontSize: "1.5rem" }}>Jane Doe</h1>
              </div>
            </div>
            <div className="sc-left2" style={{ marginTop: "3rem", padding: ".5rem", color: "grey", borderRadius: "15px", boxShadow: "2px 2px 10px 5px rgb(218, 220, 222)" }}>

              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={edit_profile} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <Link to="/set-profile" style={{ textDecoration: "none", color: "inherit" }}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Edit Profile</h2></Link>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={my_order} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <Link to="/order-history" style={{ textDecoration: "none", color: "inherit" }}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>My Order</h2></Link>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={payments} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <Link to="/saved-card" style={{ textDecoration: "none", color: "inherit" }}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Payments</h2></Link>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={notification} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <Link to="/offers" style={{ textDecoration: "none", color: "inherit" }}><h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Notification</h2></Link>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={address} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <Link to="/saved-address" style={{ textDecoration: "none", color: "inherit" }}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem", color: "black" }}>Address</h2></Link>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>


            </div>
            <div className="sc-left3" style={{ marginTop: "2rem", padding: ".5rem", color: "grey", borderRadius: "15px", boxShadow: "2px 2px 10px 5px rgb(218, 220, 222)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={invite} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Invite Friends</h2>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={cust_support} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Customer Support</h2>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={rate_app} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Rate Our App</h2>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
                <img src={suggestion} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
                <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                  <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Make a Suggestion</h2>
                  <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
                </div>
              </div>
            </div>
          </div> : ""
      }





      <div style={{ width: getDivWidth(), marginLeft: "auto", marginRight: "auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ border: "1px solid grey", borderRadius: "15px", marginTop: "1.5rem", padding: ".2rem 1rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <h2 className='ck-titles' style={{ color: "black" }}>Add New Address</h2>

            <label
              className='ck-name' htmlFor='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>Full Name *</label>
            <input type="text" name="name" autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur}
              className='ck-input' id="ck-name" placeholder='Enter Your Full Name' style={{ paddingLeft: ".5rem", border: `1px solid rgb(200, 194, 194)`, borderRadius: "5px", marginBottom: "1rem" }} />
            {
              (errors.name && touched.name) && <p style={{ marginTop: "-.8rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.name}</p>
            }

            <label className='ck-name' htmlFor='ck-email' style={{ display: "block", marginBottom: ".2rem" }}>Enter Your Email Address</label>
            <input type="email" name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur}
              className='ck-input' id="ck-email" placeholder='Enter Your Email Address' style={{ paddingLeft: ".5rem", border: `1px solid rgb(200, 194, 194)`, borderRadius: "5px", marginBottom: "1rem" }} />
            {
              (errors.email && touched.email) && <p style={{ marginTop: "-.8rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.email}</p>
            }

            <label className='ck-name' htmlFor='ck-phno' style={{ display: "block", marginBottom: ".2rem" }}>Phone Number *</label>
            <input type="text" name="phno" autoComplete='off' value={values.phno} onChange={handlePhnoChange} onBlur={handleBlur}
              className='ck-input' id="ck-phno" placeholder='Enter Your Phone Number' style={{ paddingLeft: ".5rem", border: `1px solid rgb(200, 194, 194)`, borderRadius: "5px", marginBottom: "1rem" }} />
            {
              (errors.phno && touched.phno) && <p style={{ marginTop: "-.8rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.phno}</p>
            }

            <label className='ck-name' htmlFor='ck-city' style={{ display: "block", marginBottom: ".2rem" }}>City *</label>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div style={{ width: "35%" }}>
                <input type="text" name="city" autoComplete='off' value={values.city} onChange={handleChange} onBlur={handleBlur}
                  className='ck-input' id="ck-city" placeholder='city' style={{ width: "100%", height: "35px", border: `1px solid rgb(200, 194, 194)`, borderRadius: "5px", paddingLeft: ".5rem" }} />
                {
                  (errors.city && touched.city) && <p style={{ marginTop: "0.1rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.city}</p>
                }
              </div>




              <select
                type="text"
                name="region"
                autoComplete="off"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
                className="ck-input"
                id="cars"
                style={{
                  width: "60%",
                  height: "35px",
                  border: "1px solid rgb(200, 194, 194)",
                  borderRadius: "5px"
                }}
              >
                <option value="" disabled selected>Select State</option>
                {stateOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <label className='ck-name' htmlFor='ck-postal' style={{ display: "block", marginBottom: ".3rem" }}>Postal Code *</label>
            <input type="text" name="postalcode" autoComplete='off' value={values.postalcode} onChange={handleChange} onBlur={handleBlur}
              className='ck-input' id="ck-postal" placeholder='Enter Your Postal Code' style={{ paddingLeft: ".5rem", border: `1px solid rgb(200, 194, 194)`, borderRadius: "5px", marginBottom: "1rem" }} />
            {
              (errors.postalcode && touched.postalcode) && <p style={{ marginTop: "-.8rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.postalcode}</p>
            }





            <h2 style={{ marginTop: "0", marginBottom: "0.3rem" }}>Type Of Address</h2>

            <input type="radio" id="aa-radio1" name="aaradio" value="Home" onChange={handleChange} onBlur={handleBlur} />
            <label className='ck-name' htmlFor='aa-radio1' style={{ marginRight: ".7rem" }}>Home</label>

            <input type="radio" id="aa-radio2" name="aaradio" value="Office" onChange={handleChange} onBlur={handleBlur} />
            <label className='ck-name' htmlFor='aa-radio2'>Office</label>

            <div style={{ marginTop: "0.5rem" }}>
              <input id="aa-save" type="radio" name="aasave" value="true" onChange={handleChange} onBlur={handleBlur} />
              <label className='ck-name' htmlFor='aa-save' style={{ fontWeight: "bold" }}> Save Address</label>
            </div>

            <button type="submit" className='sa-right-btns'>ADD ADDRESS</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addadress