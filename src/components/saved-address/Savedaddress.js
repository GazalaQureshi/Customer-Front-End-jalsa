import React,{useState,useEffect} from 'react'
import "./Savedaddress.css"
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
import { addAddressschema } from '../../schemas'
import { useFormik } from 'formik'


const initialValues ={
 SavedAddress:""
}


const Savedaddress = () => {

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

  
  const [showgrid, setShowgrid] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setShowgrid(false);
       
      } else{
        setShowgrid(true)
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
   const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:addAddressschema,
    onSubmit: (values,action) =>{
      console.log("values is consoled");
      action.resetForm()
    }
  })

  console.log(values);


  const addressArr = [
    {
      id: 1,
      title: "Home",
      area: "1391 Single Street, 276 Whitetrail Trl Rosmon,",
      city_pin: "North Carolina(NC), 28772",
      phoneNumber: "9220213812"
    },
    {
      id: 2,
      title: "Office",
      area: "1391 Single Street, 276 Whitetrail Trl Rosmon,",
      city_pin: "North Carolina(NC), 28772",
      phoneNumber: "9220213812"
    },
    {
      id: 3,
      title: "Office",
      area: "1391 Single Street, 276 Whitetrail Trl Rosmon,",
      city_pin: "North Carolina(NC), 28772",
      phoneNumber: "9220213812"
    },
    {
      id: 4,
      title: "Office",
      area: "1391 Single Street, 276 Whitetrail Trl Rosmon,",
      city_pin: "North Carolina(NC), 28772",
      phoneNumber: "9220213812"
    }
  ]

  




  const Singleaddress = (props) => {
    const { phoneNumber, title, city_pin, area,id } = props
    const formattedPhoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    return (
      <div style={{display:"flex",color:"rgb(110,115,120)",marginTop:".6rem" }}>
        <input 
        className='sa-radio' id={id} type="radio" name="savedAddress" value={title} style={{alignSelf:"start",marginRight:".5rem"}}/>
        <div >
          <label htmlFor={id} className='ck-titles' style={{marginTop:"0.5rem",marginBottom:".2rem"}}>{title}</label>
          <p style={{marginTop:"0.5rem",marginBottom:".2rem"}}>{area}</p>
          <p style={{marginTop:"0.5rem",marginBottom:".2rem"}}>{city_pin}</p>
          <p style={{marginTop:"0.8rem",marginBottom:".2rem"}}>Mobile: {formattedPhoneNumber}</p>
          <div style={{ display: "flex", justifyContent: "space-between" ,width:"55%"}}>
            <p style={{marginTop:"0.8rem",marginBottom:".2rem"}}><BiEdit /> Edit</p>
            <p style={{marginTop:"0.8rem"}}><RiDeleteBin6Line /> Remove</p>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className='savedcard' style={{ display: "flex", justifyContent: "space-between" }}>
    {
      showsection ? 
      <div className='savedcard-left' style={{ width: "370px" ,marginLeft:"3rem"}}>

      <div className="sp-left1" style={{ display: "flex",alignItems:"center",marginLeft:"1rem",marginTop:"1rem"}}>
            <img src={profile_img} alt="profilemage" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
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
              <Link to="/saved-card" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" }}>Payments</h2></Link>
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
              <Link to="/saved-address" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" ,color:"black"}}>Address</h2></Link>
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
    <div style={{ width: getDivWidth(),marginLeft:"auto",marginRight:"auto"}}>
    <form onSubmit={handleSubmit}>
      <div style={{  border: "1px solid grey", borderRadius: "10px", marginTop: "1.5rem",marginLeft:"1rem",marginRight:"1rem" ,padding:".6rem"}}>
        <h1 className='ck-titles ck-add'>saved address</h1>
        <div className= {showgrid   ? "sa-singleAddress-grid" : "sa-singleAddress-flex"}   >
          {
            addressArr.map((singleAddress) => {
              const { id, title, area, city_pin, phoneNumber } = singleAddress
              return (
                <div key={id} >
                  <Singleaddress {...singleAddress} phoneNumber={phoneNumber} />
                </div>
              )
            })
          }
        </div>
        <button className='sa-right-btns' type="submit" >CONTINUE</button>
        <Link to="/add-address" style={{textDecoration:"none" ,cursor:"pointer"}} ><button className='sa-right-btns' type="button">ADD NEW ADDRESS</button></Link>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Savedaddress 