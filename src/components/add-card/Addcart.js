import React, { useState, useEffect } from 'react'
import "./Addcard.css"
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
import { addAddressschema, addcardschema } from '../../schemas'


const initialValues = {

  cardnumber: "",
  expirydate: "",
  CVV: "",
  holderName: "",
  savedcard: ""
}
const Addcart = () => {
  const [selectedCard, setSelectedCard] = useState(null);


  const [showsection, setShowsection] = useState(true);


  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

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
    validationSchema: addcardschema,
    onSubmit: (values, action) => {
      console.log("values is consoled");
      action.resetForm()
    }
  })


  /////handling card Number
  const handleCardNumberChange = (e) => {
    const inputValue = e.target.value;
  
    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');
  
    const formattedValue = numericValue   
      .replace(/\s/g, '') // Remove existing spaces
      .replace(/(\d{4})/g, '$1 ') // Add a space after every four digits
      .trim() // Remove leading/trailing spaces
      .slice(0, 19);
  
    handleChange(e.target.name)(formattedValue); // Call Formik's handleChange with the formatted value
  };
  

  //////////////handling expiry date////////////////////
  const handleExpiryDateChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/\D/g, '') // Remove non-digit characters
      .replace(/(\d{2})(\d{0,2})/, '$1/$2') // Add a slash after the first two digits
      .slice(0, 5); // Limit the input to a maximum of 5 characters
    

    handleChange(e.target.name)(formattedValue); // Call Formik's handleChange with the formatted value
  };

  //////////handle CVV change///////////////////////
  const handleCVVChange = (e) => {
    const inputValue = e.target.value;
  
    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');
  
    const formattedValue = numericValue.slice(0, 3); // Limit the input to a maximum of 3 characters
  
    handleChange(e.target.name)(formattedValue); // Call Formik's handleChange with the formatted value
  };

  return (
    <div className='savedcard' style={{ display: "flex", justifyContent: "space-between" }}>
      {
        showsection ?
          <div className='savedcard-left' style={{ width: "370px", marginLeft: "3rem" }}>

            <div className="sp-left1" style={{ display: "flex", alignItems: "center", marginLeft: "1rem", marginTop: "1rem" }}>
              <img src={profile_img} alt="profile-pic" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
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
                  <Link to="/saved-card" style={{ textDecoration: "none", color: "inherit" }}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem", color: "black" }}>Payments</h2></Link>
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
                  <Link to="/saved-address" style={{ textDecoration: "none", color: "inherit" }}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Address</h2></Link>
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

      <div style={{ width: getDivWidth(), border: "1px solid grey", borderRadius: "10px", marginLeft: "1rem", marginRight: "1rem", marginTop: "3rem", paddingLeft: "1rem", paddingRight: "2rem" }}>
        <h1 className='ck-titles'>Add new Card</h1>
        <form onSubmit={handleSubmit}>
          <label className='ck-name' htmlFor='' style={{ display: "block", marginBottom: ".3rem" }}>Card Number</label>
          <input type="text" name="cardnumber" autoComplete='off' value={values.cardnumber} onChange={handleCardNumberChange} onBlur={handleBlur}
             className='ck-input' placeholder='9324 0000 0000 0000' style={{ paddingLeft: ".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: "1.5rem" }} />
          {
            (errors.cardnumber && touched.cardnumber) && <p style={{ marginTop: "-1.35rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.cardnumber}</p>
          }
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "47%" }}>
              <label className='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>Expiry Date</label>
              <input type="text" name="expirydate" autoComplete='off' value={values.expirydate} onChange={handleExpiryDateChange} onBlur={handleBlur}
                className='ck-input' placeholder=' MM / YY' style={{ paddingLeft: ".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: "1.5rem" }} />
              {
                (errors.expirydate && touched.expirydate) && <p style={{ marginTop: "-1.35rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.expirydate}</p>
              }
            </div>
            <div style={{ width: "47%" }}>
              <label className='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>CVV</label>
              <input type="text" name="CVV" autoComplete='off' value={values.CVV} onChange={handleCVVChange} onBlur={handleBlur}
                className='ck-input' placeholder=' ...' style={{ paddingLeft: ".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: "1.5rem" }} />
              {
                (errors.CVV && touched.CVV) && <p style={{ marginTop: "-1.35rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.CVV}</p>
              }
            </div>

          </div>

          <label className='ck-name' htmlFor='' style={{ display: "block", marginBottom: ".3rem" }} >Card Holders Name</label>
          <input type="text" name="holderName" autoComplete='off' value={values.holderName} onChange={handleChange} onBlur={handleBlur}
            className='ck-input' placeholder='Enter Card Holders Full Name' style={{ paddingLeft: ".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: ".7rem" }} />
          {
            (errors.holderName && touched.holderName) && <p style={{ marginTop: "-.6rem", marginBottom: "0.5rem" }} className='validation-error'>{errors.holderName}</p>
          }
          <div style={{ display: "flex", alignItems: "center" }}>
            <input name="savedcard" value={true} onChange={handleChange} onBlur={handleBlur}
              type="radio" className='ac-radiobtn' id="ac-radiobtn" style={{ border: "1px solid rgb(200, 194, 194)" }} />

            <label className='ck-name' htmlFor='ac-radiobtn' style={{}}>Save card</label>
          </div>
          {
            (errors.savedcard && touched.savedcard) && <p style={{ marginTop: "-.25rem", marginBottom: "0.5rem",marginLeft:"0.5rem" }} className='validation-error'>{errors.savedcard}</p>
          }

          <button className='ac-right-btns' type="submit">ADD CARD</button>
        </form>
      </div>
    </div>
  )
}

export default Addcart