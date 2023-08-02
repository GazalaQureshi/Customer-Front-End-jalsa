import React,{useState,useEffect} from 'react'
import "./Savedcard.css"

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
import visa from "../../images/cards/visa.png"
import mastercard from "../../images/cards/mastercard.png"
import am_express from "../../images/cards/am_express.png" 
import { Link } from 'react-router-dom'


const Savedcard = () => {

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

  return (
    <div>
      <div className='savedcard' style={{ display: "flex", justifyContent: "space-between" }}>
        {showsection ?  <div className='savedcard-left' style={{ width: "370px" ,marginLeft:"3rem"}}>

        <div className="sp-left1" style={{ display: "flex",alignItems:"center",marginLeft:"1rem",marginTop:"1rem"}}>
            <img src={profile_img} alt="profile iage" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
            <div style={{ marginLeft: "1rem", textAlign: "center" }}>
              <h2 style={{ margin: "0", marginTop: "1.3rem",fontSize:"1.1rem" }}>Hello,</h2>
              <h1 style={{ margin: "0",fontSize:"1.5rem" }}>Jane Doe</h1>
            </div>
          </div>
          <div className="sc-left2" style={{ marginTop: "3rem", padding: ".5rem", color: "grey", borderRadius: "15px", boxShadow: "2px 2px 10px 5px rgb(218, 220, 222)" }}>

          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={edit_profile} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/set-profile" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Edit Profile</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={my_order} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/order-history" style={{textDecoration:"none" , color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>My Order</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={payments} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/saved-card" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem",color:"black" }}>Payments</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={notification} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/offers" style={{textDecoration:"none", color:"inherit"}}><h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Notification</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={address} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/saved-address" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Address</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>

          </div>
          <div className="sc-left3" style={{ marginTop: "2rem", padding: ".5rem", color: "grey", borderRadius: "15px", boxShadow: "2px 2px 10px 5px rgb(218, 220, 222)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={invite} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Invite Friends</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={cust_support} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Customer Support</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}}/>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={rate_app} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Rate Our App</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}}/>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={suggestion} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Make a Suggestion</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}} />
              </div>
            </div>
          </div>
        </div> : ""}
    <div style={{ width: getDivWidth(),marginLeft:"auto",marginRight:"auto"}}>

    
    <div style={{  border: "1px solid grey", borderRadius: "15px", marginTop: "1.5rem",marginLeft:"1rem",marginRight:"1rem", }}>
      <h1 className='ck-titles' style={{ marginLeft: "2rem" }}>Saved Cards</h1>

      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "self",
    border: "2px solid grey",
    borderRadius: "10px",
    width: "90%",
    margin: "1rem auto",
    borderColor: selectedCard === "visa" ? "black" : "grey",
    background: selectedCard === "visa" ? "rgb(240,240,240)" : ""
  }}
  onClick={() => handleCardSelection("visa")}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="radio"
      className="sc-radiobtn"
      name="sv-cards"
      checked={selectedCard === "visa"}
      onChange={() => handleCardSelection("visa")}
    />
    <img src={visa} alt="visa" style={{ width: "65px", height: "45px" }} />
  </div>

  <div className='sc-card-section' style={{ paddingRight: "1rem", fontWeight: "bold", color: "grey", textAlign: "right" }}>
    <p className='sc-number' style={{ marginTop: "0.6rem", marginBottom: "0.3rem" }}>**** **** **** 1161</p>
    <p className='sc-name' style={{ marginTop: "0rem", marginBottom: ".6rem" }}>VISA</p>
  </div>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "self",
    border: "2px solid grey",
    borderRadius: "10px",
    width: "90%",
    margin: "1rem auto",
    borderColor: selectedCard === "mastercard" ? "black" : "grey",
    background: selectedCard === "mastercard" ? "rgb(240,240,240)" : ""
  }}
  onClick={() => handleCardSelection("mastercard")}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="radio"
      className="sc-radiobtn"
      name="sv-cards"
      checked={selectedCard === "mastercard"}
      onChange={() => handleCardSelection("mastercard")}
    />
    <img src={mastercard} alt="mastercard" style={{ width: "65px", height: "45px" }} />
  </div>

  <div className='sc-card-section' style={{ paddingRight: "1rem", fontWeight: "bold", color: "grey", textAlign: "right" }}>
    <p className='sc-number' style={{ marginTop: "0.6rem", marginBottom: "0.3rem" }}>**** **** **** 1161</p>
    <p className='sc-name' style={{ marginTop: "0rem", marginBottom: ".6rem" }}>MASTERCARD</p>
  </div>
</div>

      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "self",
    border: "2px solid grey",
    borderRadius: "10px",
    width: "90%",
    margin: "1rem auto 1.3rem auto",
    borderColor: selectedCard === "am_express" ? "black" : "grey",
    background: selectedCard === "am_express" ? "rgb(240,240,240)" : ""
  }}
  onClick={() => handleCardSelection("am_express")}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      type="radio"
      className="sc-radiobtn"
      name="sv-cards"
      checked={selectedCard === "am_express"}
      onChange={() => handleCardSelection("am_express")}
      id="c"
    />
    <img src={am_express} alt="am_express" style={{ width: "65px", height: "45px" }} />
  </div>

  <div className='sc-card-section' style={{ paddingRight: "1rem", fontWeight: "bold", color: "grey" , textAlign: "right"}}>
    <p className='sc-number' style={{  marginTop: "0.6rem", marginBottom: "0.3rem" }}>**** **** **** 1161</p>
    <p className='sc-name' style={{  marginTop: "0rem", marginBottom: ".6rem" }}>AMERICAN EXPRESS</p>
  </div>
</div>

      <button className="sc-right-btns">CONTINUE</button>
      
        <button className="sc-right-btns"><Link to="/add-card" style={{ textDecoration: "none", color: "inherit" }}>
        ADD NEW CARD </Link></button>
     
    </div> 
    </div>
      
      
     
      </div>
    </div>
    
  )
}

export default Savedcard