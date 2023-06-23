import React,{useState,useEffect} from 'react'
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

  return (
    <div className='savedcard' style={{ display: "flex", justifyContent: "space-between" }}>
    {
      showsection ? 
      <div className='savedcard-left' style={{ width: "370px",marginLeft:"3rem" }}>

      <div className="sp-left1" style={{ display: "flex",alignItems:"center",marginLeft:"1rem",marginTop:"1rem"}}>
              <img src={profile_img} alt="profile-pic" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
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
      </div> :""
    }
      
      <div style={{ width:getDivWidth(), border: "1px solid grey", borderRadius: "10px",marginLeft:"1rem",marginRight:"1rem", marginTop: "3rem" ,paddingLeft:"1rem",paddingRight:"2rem"}}>
        <h1 className='ck-titles'>Add new Card</h1>
        <label className='ck-name'  htmlFor='' style={{ display: "block", marginBottom: ".3rem" }}>Card Number</label>
        <input className='ck-input'  type="text" placeholder='9324 0000 0000 0000' style={{ paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: "1.5rem" }}/>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{width:"47%"}}>
            <label className='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>Expiry Date</label>
            <input className='ck-input'  type="text" placeholder=' MM / YY' style={{paddingLeft:".5rem",border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: "1.5rem" }} />
          </div>
          <div style={{width:"47%"}}>
          <label className='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>CVV</label>
            <input className='ck-input' type="text" placeholder=' ...' maxLength={3}  style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: "1.5rem" }}/>
          </div>

        </div>
        
        <label className='ck-name' htmlFor='' style={{ display: "block",  marginBottom: ".3rem" }} >Card Holders Name</label>
        <input className='ck-input'  type="text" placeholder='Enter Card Holders Full Name' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px", marginBottom: ".7rem" }}/>
        <div style={{display:"flex",alignItems:"center"}}>
          <input   type="radio" className='ac-radiobtn' id="ac-radiobtn" style={{  border: "1px solid rgb(200, 194, 194)" }}/>
          <label  className='ck-name' htmlFor='ac-radiobtn' style={{   }}>Save card</label> 
        </div>
        <button className='ac-right-btns'>ADD CARD</button>
        
      </div>
    </div>
  )
}

export default Addcart