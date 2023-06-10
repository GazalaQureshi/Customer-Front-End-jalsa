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
          slidesToShow: 3,
        }
      },
      // Add more breakpoints and settings as needed
    ]
  };

  return (

    <div style={{ padding: "0  2rem", }} >
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center",marginTop:"1.2rem",marginBottom:"1rem"  }}>
        <h1  className='hp-title' style={{  }}>Trending Deals</h1>
        <button className="vbtn"><Link className="shop-btn-home-page" to="/trend" style={{ margin: "auto", width: "50%",textDecoration:"none",color:"inherit" }} >View All</Link></button>
      </div>
      <Slider {...settings}>
        {
          trendData.map((single) => {
            const { img, title } = single
            return (
              <div style={{ border: "1px solid red" }}>
                <div className='trending-section'>
                  <img className='hp-trend-img rend-imf' src={img} alt="trendimg" style={{ objectFit: "cover", margin: "auto" }} />


                  <div className='hp-trend-div rend-imf' style={{ background: "rgb(240,240,240)", border: "1px solid rgb(240,240,240)", margin: 'auto' }}>
                    <h1 className="shop-trend-image-heading" style={{ textAlign: "center", marginTop: ".5rem", marginBottom: ".2rem", fontSize: "2.2rem" }}>{title}</h1>
                    <h2 className="shop-trend-image-heading-2" style={{ textAlign: "center", marginTop: ".2rem", marginBottom: ".6rem" }}>upto <b>65%</b> off</h2>
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