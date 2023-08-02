import React from 'react'
import trendData from "../../data/Trend"
import { BsArrowRight } from "react-icons/bs";

import "./Deals.css"
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const Deals = () => {

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

    <div style={{ padding: `${window.innerWidth > 768 ? "0 2rem" : "0 1rem"}` }}>

      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center",marginTop:"1.2rem",marginBottom:"1rem"  }}>
        <h1  className='hp-title' style={{  }}>Trending Deals</h1>
        <button className="vbtn"><Link className="shop-btn-home-page" to="/trend" style={{ margin: "auto", width: "50%",textDecoration:"none",color:"inherit" }} >View All</Link></button>
      </div>
      <Slider {...settings}>
        {
          trendData.map((single) => {
            const { img, title } = single
            return (
              <div >
                <div style={{ margin:".5rem"}} className='trending-section'>
                <div>
                <img  src={img} alt="trendimg" style={{ objectFit: "cover", margin: "auto",width:"100%",height:"100%" }} />
                </div>

                  <div className='' style={{ background: "rgb(240,240,240)",paddingTop:".5rem" }}>
                    <h1 className="recom-title" style={{ textAlign: "center", marginTop: "0rem", marginBottom: "0rem" }}>{title}</h1>
                    <h2 className="recom-text" style={{ textAlign: "center", marginTop: ".2rem", paddingBottom: "0.4rem" }}>upto <b>65%</b> off</h2>
                  </div>
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