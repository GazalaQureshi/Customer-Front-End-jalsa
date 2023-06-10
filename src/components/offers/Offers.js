import React,{useState,useEffect} from 'react'
import "./Offers.css"

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
import promo from "../../images/promo-code.png"
import { Link } from 'react-router-dom' 

 
const Offers = () => {
  
  const notificationArr=[
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-29"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-1"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-31"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-30"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-01-20"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-31"
    }
  ]
 

 const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  const currentDate = new Date();
  

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return 'Today';
  }

  currentDate.setDate(currentDate.getDate() - 1);

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return 'Yesterday';
  }

  return date.toLocaleDateString('en-US', options);
};








const formatDateNum = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const formattedDay = getFormattedDay(day);

  return `${formattedDay} ${month} ${year}`;
};

const getFormattedDay = (day) => {
  let suffix = 'th';

  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  }

  return `${day}${suffix}`;
};
  
  const sortedNotifications = notificationArr.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const today = new Date();
  
    const diffA = Math.abs(dateA - today);
    const diffB = Math.abs(dateB - today);
  
    return diffA - diffB;
  });
  
  const dateArray = Object.keys(sortedNotifications.reduce((acc, notification) => {
    const { date } = notification;
    if (acc[date]) {
      acc[date].push(notification);
    } else {
      acc[date] = [notification];
    }
    return acc;
  }, {})).map((date) => ({
    date,
    notifications: sortedNotifications.filter((notification) => notification.date === date),
  }));
  ///////////////////////////////////////////////////////////////////////////////////////
  // tab,phone logic
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
      return '60%';
    // } else if (window.innerWidth > 600) {
    //   return '500px';
    } else {
      return '100%';
    }
  };
  const getMargin = () => {
    if (window.innerWidth < 500) {
      return '.5rem';
    // } else if (window.innerWidth > 600) {
    //   return '500px';
    } else {
      return '1rem';
    }
  };

  return (
    <div className='savedcard' style={{ display: "flex", justifyContent: "space-between" }}>
    {
      showsection ? <div className='savedcard-left' style={{ width: "370px",marginLeft:"3rem" }}>

      <div className="sp-left1" style={{ display: "flex",alignItems:"center",marginLeft:"1rem",marginTop:"1rem"}}>
            <img src={profile_img} alt="profile image" style={{ width: "85px", height: "85px", borderRadius: "50%" }} />
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
      <Link to="/offers" style={{textDecoration:"none", color:"inherit"}}><h2 style={{ margin: "0", marginTop: ".2rem", fontSize: "1.3rem" ,color:"black"}}>Notification</h2></Link>
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
</div> : ""
    }

    <div style={{maxWidth:"900px", width: getDivWidth(),marginLeft:"auto",marginRight:"auto"}}>
      <div style={{ border: "1px solid grey", borderRadius: "15px", marginTop: "1.5rem",marginLeft:"1rem",marginRight:"1rem" ,paddingBottom:"1rem" }}>
        

        
        <h1 className='ck-titles' style={{marginLeft:"1rem"}}>All Notifications</h1> 
         <div>
          {dateArray.map((n) => {
              const {img,text,date,notifications} = n
            return (
              <>
              <h3 className='noti-day' style={{marginLeft:"2.5rem"}}>{formatDate(date)}</h3>
              {
                notifications.map((noti) =>{
                  return <div style={{display:"flex",border:"1px solid rgb(180,180,180)",borderRadius:"5px",margin:getMargin()}}>
                  <div className='noti-img-div'>
                  <img src={noti.img} alt="img" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                  </div>
                  <div style={{paddingRight:".5rem"}}>
                  <h3 className='noti-text' style={{marginBottom:".5rem"}}>{noti.text}</h3>
                  <p  className='noti-date' style={{marginTop:"0"}}>{formatDateNum(date)}</p>
                  <p className='noti-date' style={{textAlign:"right",color:"blue"}}>More Details</p>
                  </div>
                  

                  </div>   
                })
              }
              </>
            )
          })
          }
         </div>
      </div>
      </div>
    </div>
  )
}


export default Offers


// <h2 style={{marginLeft:"2rem"}}>Today</h2>
//         <div>
//           <Coupons text="Special 30000% Off" code="ONLYTODAY" validity="copy code" />
//           <Coupons text="Flat 30% Off" code="FLAT30ABC" validity="copy code"/>
//           <Coupons text="Upto 50% Off" code="FLAT50CDE" validity="copy code"/>
//           <Coupons text="Festive Offer" code="FESTIVE20OFF" validity="copy code"/>
//         </div>
//         <h2 style={{marginLeft:"2rem"}}>Yesterday</h2>
//         <div>
//         <Coupons text="Flat 30% Off" code="FLAT30ABC" validity="expired"/>
//         <Coupons text="Upto 50% Off" code="FLAT50CDE" validity="expired" />
//         </div>
//         <h2 style={{marginLeft:"2rem"}}>25th december, 2022</h2>
//       <div>
//         <Coupons text="Upto 50% Off" code="FLAT50CDE" validity="expired" />
//       </div> 