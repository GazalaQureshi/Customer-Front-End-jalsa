import React,{useState,useEffect} from 'react'
import "./Setprofile.css"

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
import { editprofileschema } from '../../schemas'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const initialValues ={
  name:"",
  email:"",
  number:"",
  DOB:""
}

const Setprofile = () => {

  ////tab logic

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

  // const getDivWidth = () => {
  //   if (window.innerWidth > 992) {
  //     return '370px';
  //   } 
  //   else {
  //     return '90%';
  //   }
  // };
  
  const getDivWidth = () => {
    if (window.innerWidth > 992) {
      return '370px';
    } else if (window.innerWidth > 600) {
      return '500px';
    } else {
      return '90%';
    }
  };
  const getMargin = () =>{
    if(window.innerWidth > 650) {
      return "3rem"
    }
    else {
      return "1rem"
    }
  }
  const getsize = () =>{
    if(window.innerWidth > 650) {
      return "1.3rem"
    }
    else {
      return "1.1rem"
    }
  }

  /////////////////form handling //////////////////////////////////
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:editprofileschema,
    onSubmit: (values,action) =>{
      console.log("values is consoled");
      action.resetForm()
    }
  })

  console.log(values);
  console.log(errors);

  return (
    <div>
      {/* <h1 style={{fontSize:"2rem",marginLeft:"6rem"}}>PROFILE</h1> */}
      <div className='setprofile' style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='setprofile-left' style={{ width: getDivWidth(),marginLeft:getMargin(),marginRight:"1rem"}}>
        
          <div className="sp-left1" style={{ display: "flex",alignItems:"center",marginLeft:"1rem",marginTop:"1rem"}}>
            <img src={profile_img} alt="profile image" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
            <div style={{ marginLeft: "1rem", textAlign: "center" }}>
              <h2 style={{ margin: "0", marginTop: "1.3rem",fontSize:"1.1rem" }}>Hello,</h2>
              <h1 style={{ margin: "0",fontSize:"1.5rem" }}>Jane Doe</h1>
            </div>
          </div>
          <div className="sp-left2" style={{ marginTop: "3rem", padding: ".5rem", color: "grey", borderRadius: "15px", boxShadow: "2px 2px 10px 5px rgb(218, 220, 222)" }}>

          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={edit_profile} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to={showsection ? "/set-profile" : "/update-details"} style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize(),color:"black"}}>Edit Profile</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={my_order} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/order-history" style={{textDecoration:"none" , color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize() }}>My Order</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={payments} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/saved-card" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize() }}>Payments</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={notification} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/offers" style={{textDecoration:"none", color:"inherit"}}><h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize() }}>Notification</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
            <img src={address} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
            <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
              <Link to="/saved-address" style={{textDecoration:"none", color:"inherit"}}> <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize()}}>Address</h2></Link>
              <IoIosArrowForward style={{ alignSelf: "center", background: "rgb(228,230,232)", padding: ".2rem", borderRadius: "50%" }} />
            </div>
          </div>

          </div>
          <div className="sp-left3" style={{ marginTop: "2rem", padding: ".5rem", color: "grey", borderRadius: "15px", boxShadow: "2px 2px 10px 5px rgb(218, 220, 222)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={invite} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize() }}>Invite Friends</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}}/>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={cust_support} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize() }}>Customer Support</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}}/>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={rate_app} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize()}}>Rate Our App</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: ".5rem 1rem" }}>
              <img src={suggestion} alt="edit-profile" style={{ width: "30px", height: "30px" }} />
              <div style={{ width: "85%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(218,220,222)", paddingBottom: ".8rem" }}>
                <h2 style={{ margin: "0", marginTop: ".2rem", fontSize: getsize() }}>Make a Suggestion</h2>
                <IoIosArrowForward style={{ alignSelf: "center" ,background:"rgb(228,230,232)",padding:".2rem",borderRadius:"50%"}}/>
              </div>
            </div>
          </div>
        </div>

      {
        showsection ? 
        <div style={{ width: "60%",marginLeft:"auto",marginRight:"auto"}}>
        <form onSubmit={handleSubmit}>
        <div className='setprofile-right' style={{ marginRight:"1rem",marginLeft:"1rem", border: "1px solid rgb(218,220,222)",borderRadius:"15px", padding: "1rem 1rem 1rem 2rem " }}>
          <h1 style={{marginTop:"0"}} className='ck-titles'>EDIT PROFILE</h1>
          <div className='pdetails'>
          
          <label htmlFor='ck-name' style={{ display: "block", marginBottom: ".3rem" }}>Full Name *</label>
          <input  type="text"  name="name" autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur}
            id="ck-name" className='pdetails-input' placeholder='Enter Your Full Name' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px"}} />
          {
          (errors.name && touched.name )&& <p style={{marginTop:"-1.3rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.name}</p>
        }
          <label htmlFor='ck-email' style={{ display: "block", marginBottom: ".2rem" }}>Enter Your Email Address</label>
          <input type="text"  name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur}
            id="ck-email" className='pdetails-input' placeholder='Enter Your Email Address' style={{paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          {
          (errors.email && touched.email )&& <p style={{marginTop:"-1.3rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.email}</p>
        }
          <label htmlFor='ck-phno' style={{ display: "block", marginBottom: ".2rem" }}>Phone Number *</label>
          <input  type="text"  name="number" autoComplete='off' value={values.number} onChange={handleChange} onBlur={handleBlur}
           id="ck-phno" className='pdetails-input' placeholder='Enter Your Phone Number' style={{ paddingLeft:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          {
          (errors.number && touched.number )&& <p style={{marginTop:"-1.3rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.number}</p>
        }
          <label htmlFor='ck-dob' style={{ display: "block", marginBottom: ".2rem" }}>Date of Birth *</label>
          <input   name="DOB" autoComplete='off' value={values.DOB} onChange={handleChange} onBlur={handleBlur}
          type="date" id="ck-dob" className='ck-input' placeholder='DD / MM / YY' style={{ width: "32%", height: "30px",padding:".5rem", border: "1px solid rgb(200, 194, 194)", borderRadius: "5px" }} />
          {
          (errors.DOB && touched.DOB )&& <p style={{marginTop:".1rem",marginBottom:"0.5rem"}} className='validation-error'>{errors.DOB}</p>
        }
          </div>
          <button className='sp-right-update' type="submit">UPDATE</button>
        </div></form></div> :""
      }

       
      </div>
    </div>
  )
}

export default Setprofile 