import React from "react";
import Slider from "react-slick";
import "./Trending.css";

import trendData from "../../data/Trend"
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Trending = () => {

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

    <div style={{ padding: "0 2rem", }} >
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1  style={{fontSize:"3rem",marginBottom:"1rem",marginTop:"4rem"}}>Shop by Trend</h1>
        <Link to="/trend" style={{marginTop:"4rem"}} ><button className="vbtn">View All</button></Link>
      </div>
      <Slider {...settings}>
        {
          trendData.map((single) => {
            const { img, title } = single
            return (
            <div>
              <div  className="hp-trend-img">
                  <img  src={img} alt="trendimg" style={{objectFit:"cover",height:"100%",width:"100%", borderRadius: "10px" }} />
              </div>
                
                <h1 style={{ textAlign: "center" ,marginTop:".2rem",marginBottom:"2rem"}}>{title}</h1>
              </div>
            )
          })
        }
      </Slider>
      <Slider {...settings}>
        <div className="hp-trend-img">
          <div className="hp-trend-default" style={{ background: "rgb(240,240,240)",height:"100%",width:"90%", borderRadius: "10px" }}>
            <h2 className="hp-trend-default-h2">DELIVER BEFORE EID</h2>
            <h1 className="hp-trend-default-h1">Unstitched Range</h1>
            <p className="hp-trend-default-p1">Upto <b>75%</b> off</p>
            <p className="hp-trend-default-p2">View All <BsArrowRight />  </p>
          </div>

        </div> 
        { 
          trendData.map((single) => {
            const { img, title } = single
            return (
              <div >
                <div className="hp-trend-img" >
                <img  src={img} alt="trendimg" style={{objectFit:"cover",height:"100%",width:"100%", borderRadius: "10px" }} />
                </div>
                
                <h1 style={{ textAlign: "center" ,marginTop:".5rem",marginBottom:".2rem",fontSize:"2.2rem"}}>{title}</h1>
                <h2 style={{ textAlign: "center" ,marginTop:".2rem"}}>upto <b>65%</b> off</h2>
              </div>
            )
          })
        }
      </Slider>
    </div>

  );
};

export default Trending;
