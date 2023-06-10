import React from 'react'
import trendData from "../../data/Trend"
import { BsArrowRight } from "react-icons/bs";

import "./Deals.css"
import Slider from 'react-slick';
const Deals = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear"
  };

  return (

    <div style={{ padding: "0  2rem", }} >
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"3rem"}}>
        <h1  style={{fontSize:"3rem"}}>Trending Deals of the Day</h1>
        <button className="vbtn">View All</button>
      </div>
      <Slider {...settings}>
        {
          trendData.map((single) => { 
            const { img, title } = single 
            return (
              <div style={{border:"1px solid red"}}>
                <div className='hp-trend-img'>
                <img src={img} alt="trendimg"  style={{objectFit:"cover",height:"100%",width:"100%", borderRadius: "10px" }} />
                </div>
                
                <div className='hp-trend-div' style={{background:"rgb(240,240,240)",border:"1px solid rgb(240,240,240)"}}>
                <h1 style={{ textAlign: "center" ,marginTop:".5rem",marginBottom:".2rem",fontSize:"2.2rem"}}>{title}</h1>
                <h2 style={{ textAlign: "center" ,marginTop:".2rem",marginBottom:".6rem"}}>upto <b>65%</b> off</h2>
                </div>
                
              </div>
            )
          })
        }
      </Slider>
      
    </div>

  );
}

export default Deals