import React, { useState,useEffect } from 'react'
import "./Orderhistory.css"


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
import filterEdit from "../../images/filter-edit.png"
import { BsSearch } from 'react-icons/bs'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

//icons delivery image
import delivered from "../../images/order_history/delivered.png"
import cancelled from "../../images/order_history/cancelled.png"
import returned from "../../images/order_history/out_delivery.png"
import outfordelivery from "../../images/order_history/out_delivery.png"
import Profile from '../profile/Profile'
import { useGlobalContext } from '../../context'



const Orderhistory = () => {

  const {ohshowprofile,displayprofile} = useGlobalContext()

  const orderArr = [

    {
      id: 2,
      status: "Delivered",
      color: "green",
      img: "./fj_images/men/m2.jpg",
      title: "kalki Fashion 1",
      discription: "Silk Patola Kurta Suit",
      size: "M",
      date: "december 16th",
      time: "11.40AM",
      price: "1019.00",
      pickup: 1,
      arriving: "Today",
      icons: delivered
    },
    {
      id: 3,
      status: "Cancelled",
      color: "red",
      img: "./fj_images/men/m2.jpg",
      title: "kalki Fashion 1",
      discription: "Silk Patola Kurta Suit",
      size: "M",
      date: "december 16th",
      time: "11.40AM",
      price: "1019.00",
      pickup: 1,
      arriving: "Today",
      icons: cancelled
    },
    {
      id: 4,
      status: "Returned",
      color: "orange",
      img: "./fj_images/men/m2.jpg",
      title: "kalki Fashion 1",
      discription: "Silk Patola Kurta Suit",
      size: "M",
      date: "december 16th",
      time: "11.40AM",
      price: "1019.00",
      pickup: 1,
      arriving: "Today",
      icons: returned
    },
    {
      id: 1,
      status: "Out for Delivery",
      color: "green",
      img: "./fj_images/men/m2.jpg",
      title: "kalki Fashion 1",
      discription: "Silk Patola Kurta Suit",
      size: "M",
      date: "december 16th",
      time: "11.40AM",
      price: "1019.00",
      pickup: 1,
      arriving: "Today",
      icons: outfordelivery
    },
  ]

  //star logic
  const [rating, setRating] = useState(0);
  
  const handleStarClick = (starIndex) => {
    if (starIndex === rating) {
      // If the clicked star is already selected, reset the rating
      setRating(0);
    } else {
      // Otherwise, set the rating to the clicked star index
      setRating(starIndex);
    }
  };
  const [ratingret, setRatingret] = useState(0);
  
  const handleStarClickret = (starIndex) => {
    if (starIndex === ratingret) {
      // If the clicked star is already selected, reset the rating
      setRatingret(0);
    } else {
      // Otherwise, set the rating to the clicked star index
      setRatingret(starIndex);
    }
  };

  ////tab logic

  const [showprofile, setShowprofile] = useState(true);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShowprofile(false);
       
      } else {
        setShowprofile(true);
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
    } else {
      return '100%';
    }
  };


  const [winwidth, setWinwidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWinwidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  // Clean up the event listener
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  return (
    <div className='savedcard'  style={{ display: "flex", justifyContent: "space-between",position:"relative" }}>

        {showprofile ? <Profile/> :" "}

          
         
        <div style={{ width: getDivWidth(),marginLeft:"auto",marginRight:"auto"}}>
      <div className='oh-maindiv'  style={{  background: "rgb(230,230,230)", borderRadius: "10px", marginTop:"1.5rem"}}>

        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div className='oh-heading-div'>
            <h1 className='oh-heading' style={{ margin: "0"}}>All Orders</h1>
            <p className='oh-subheading' style={{ margin: "0" }}>from anytime</p>
          </div>
          <div style={{ display: "flex" }}>

            <div className={ohshowprofile ? "oh-hidden" : "oh-show" }  style={{position:"relative"}}>
              <input type="text" className='oh-input' placeholder='Search in orders' />
              <BsSearch className='oh-search' />
            </div>
            <button className='oh-filterimg-div' 
            style={{ borderRadius: "5px", border: "1px solid grey", background: "white", display:"flex",marginLeft: "1rem", alignItems: "center" }}>
              <img  className='oh-filterimg' src={filterEdit} alt="filterEdit" />
            {
              winwidth < 360 ? "" :  <span style={{ textAlign: "center",marginLeft:".4rem" }}>  FILTER</span>
            }
             
            </button>
          </div>
        </section>

        <section >
          {
            orderArr.map((singleItem) => {
              const { id, status, color, img, title, discription, size, date, time, price, pickup, arriving, icons } = singleItem



              return (
                <div className='oh-singleitem' style={{ background: "white", borderRadius: "5px" }} key={id}>
                  <div style={{ display: "flex" }}>
                    <img src={icons} className='oh-icons' alt="order-icons" style={{ marginRight: ".4rem" }} />
                    <div>
                      <h2 className='oh-status' style={{ margin: "0", color: `${color}` }}>{status}</h2>
                      {status === "Delivered" ? <p className='oh-info' >{date}, at {time}</p> : ""}
                      {status === "Returned" || status === "Cancelled" ?
                        < >
                          <p className='oh-info' >{date}, at {time} as per your request</p>
                          <p  className='oh-info' ><span style={{ color: "green" }}>Refund Initiated : </span><span style={{ fontWeight: "600" }}> ₹{price}</span> on {date}</p>
                        </>
                        : ""}
                      {status === "Returned" ? <p className='oh-info' style={{ margin: "0", color: "darkgreen", fontWeight: "600" }}>Pickup in {pickup} day</p> : ""}

                      {status === "Out for Delivery" ? <>
                        <p className='oh-info' >Arriving {arriving}</p>
                        <p className='oh-info' >Assigned to our delivery agent</p>
                      </> : ""}



                    </div>
                  </div>

                  <div style={{ background: "rgb(230,230,230)", borderRadius: "5px" }}>


                    <div style={{ display: "flex", margin: ".4rem", padding: ".2rem" }}>
                      <div className='oh-img-div'>
                        <img src={img} alt="img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div >
                        <h2 className='oh-name' style={{ margin: "0", marginTop: ".6rem" }}>{title}</h2>
                        <p  className='oh-name-info' >{discription}</p>
                        <p  className='oh-name-info' >Size: <span style={{ color: "black" }}>{size}</span></p>
                      </div>
                    </div>
                    {
                      status === 'Delivered' ? <>

                        <div >
                          <button className='oh-er-btn'>Exchange</button>
                          <button className='oh-er-btn'>Return</button>
                        </div>


                      </>
                        : ''
                    }
                  </div>
                  {
                    status === "Delivered" ? <p className='oh-er-info' style={{ border: "1px solid grey", display: "flex", padding: ".3rem", borderRadius: "5px" }}> <div className="oh-green"></div><span>Exchange/Return available till 12th may</span></p> : ""
                  } 
                  {
                    status === 'Delivered' 
                      ? <div className='oh-rate-box' style={{ display: "flex", border: "1px solid grey",borderRadius:"6px" ,padding:"0 0 0 1rem"}}>
                        <p className='oh-rateproduct' style={{ fontWeight:"600"}}>Rate Product</p>
                        <div style={{ display: 'flex', padding: '.3rem', margin: '0', borderRadius: '5px', alignItems: 'center' }}>
                          {[1, 2, 3, 4, 5].map((starIndex) => (
                            <div
                              key={starIndex}
                              style={{ cursor: 'pointer', marginRight: '.2rem',marginTop:".3rem" }}
                              onClick={() => handleStarClick(starIndex)}
                            >
                              {starIndex <= rating ? (
                                <AiFillStar color="blue" className='oh-stars' style={{ margin: '0' }} />
                              ) : (
                                <AiOutlineStar className='oh-stars' style={{ margin: '0' }} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div> : ''
                  }
                  {
                    status === 'Returned' 
                      ? <div className='oh-rate-box' style={{ display: "flex", border: "1px solid grey" ,borderRadius:"6px",padding:"0 0 0 1rem" ,marginTop:".8rem"}}>
                        <p className='oh-rateproduct' style={{ margin: "0.45rem",fontWeight:"600" }}>Rate Product</p>
                        <div style={{ display: 'flex', padding: '.3rem', margin: '0', borderRadius: '5px', alignItems: 'center' }}>
                          {[1, 2, 3, 4, 5].map((starIndex) => (
                            <div
                              key={starIndex}
                              style={{ cursor: 'pointer', marginRight: '.2rem',marginTop:".3rem" }}
                              onClick={() => handleStarClickret(starIndex)}
                            >
                              {starIndex <= ratingret ? (
                                <AiFillStar color="blue" className='oh-stars'  />
                              ) : (
                                <AiOutlineStar className='oh-stars'   />
                              )}
                            </div>
                          ))}
                        </div>
                      </div> : ''
                  }
                </div>
              )
            })
          }
        </section>


      </div>
      </div>
    </div>
  )
}

export default Orderhistory