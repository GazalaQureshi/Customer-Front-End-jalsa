import React from "react";
import Slider from "react-slick";
import "./Trending.css";

import trendData from "../../data/Trend"
import trendData2 from "../../data/Trend2"
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Trending = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
        }
      },
      // Add more breakpoints and settings as needed
    ]
  };

  return (

    <div className="shop-trend-section-home shp-mb" style={{ padding: "0 2rem", }} >
      <div className="shop-trend-full-head-part" style={{ display: "flex", justifyContent: "space-between",alignItems:"center",marginTop:"1.2rem",marginBottom:"1rem" }}>
        <h1  className='hp-title' style={{ }}>Shop by Trend</h1>
       <button className="vbtn"> <Link className="shop-btn-home-page" to="/trend" style={{ marginTop: "4rem", width: "50%",textDecoration:"none",color:"inherit" }} >View All</Link></button>
      </div>
      <Slider {...settings}>
        {
          trendData.map((single) => {
            const { img, title } = single
            return (
              <div>
            
                <div style={{margin:"0 .5rem"}}>
                <img  src={img} alt="trendimg" style={{ objectFit: "cover", borderRadius: "10px", margin: "auto",width:"100%",height:"100%" }} />
                </div>

                <h1 className="recom-title" style={{ textAlign: "center", marginTop: ".2rem", marginBottom: "2rem" }}>{title}</h1>
            
              </div> 
            )
          })
        }
      </Slider>
      <div>
      <div className="" style={{ background: "rgb(240,240,240)", margin:"1rem auto",padding:" 1rem 1.5rem", borderRadius: "10px" }}>
            
            <h1 className="hp-trend-default-h1">Unstitched Range</h1>
            <h2 className="hp-trend-default-h2">DELIVER BEFORE EID</h2>
            <p className="hp-trend-default-p1">Upto <b>75%</b> off</p>
            <button style={{display:"flex"}} className="viewall-btn"><span style={{marginRight:".4rem"}}>View All</span> <BsArrowDown fontSize="1rem"/>  </button>
          </div>
      
      <Slider {...settings} autoplay={false}>
        
        {
          trendData2.map((single) => {
            const { img, title } = single
            return (
              <div >
                <div style={{margin:"0 .5rem"}}>
                <img  src={img} alt="trendimg" style={{ objectFit: "cover", borderRadius: "10px", margin: "auto",width:"100%",height:"100%" }} />
                </div>

                <h1 className="recom-title" style={{ textAlign: "center", marginTop: ".5rem", marginBottom: ".2rem"}}>{title}</h1>
                <h2 className="recom-text" style={{ textAlign: "center", marginTop: ".2rem" }}>upto <b>65%</b> off</h2>
              </div>
            )
          })
        }
      </Slider>
      </div>
    </div>

  );
};

export default Trending;
