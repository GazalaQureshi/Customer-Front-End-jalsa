import React, { Component,useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import Slider from "react-slick";
import trendData from "../../../data/Trend";
const Recentlyviewed =() => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        }
      }
      
      // Add more breakpoints and settings as needed
    ]
    };
    const [items,setItems] = useState(trendData)
    function toggle(id) {
      setItems(prevItem => {
          return items.map((singleitem) => {
              return singleitem.id === id ? {...singleitem, on: !singleitem.on} : singleitem
          })
      })
  }
    return (
      <div style={{ border: "3px soild red" }}>
        <Slider {...settings}>
        {items.map((m) => {
          const { id, img, title, discription, mrp, sp, star, review, on } = m;

          return (
            <div key={id}>
              {/* <div style={{margin:"0 1rem"}}> */}
              <div style={{ margin: `${window.innerWidth > 768 ? "0 1rem" : "0 .5rem"}` }}>
              <div className="" style={{position:"relative"}}>
                <div className="sr-img-div"><img src={`.${img}`} alt="iiimg" style={{ width: "100%", height: "100%", objectFit:"cover"}} /></div>
                <button onClick={() => toggle(id)} className='mens-img-like'>{on ? <AiFillHeart color='blue' className="heart-icon" /> : <AiOutlineHeart color='blue' className="heart-icon" />}</button>
              </div>
              <div
                className="mens-detail-sec"
                style={{ background: "rgb(240, 240, 240)", border: "2px solid rgb(229, 221, 221)" }}
              >
                <h4 className="mens-kalki">{title}</h4>
                <p className="mens-discription">{discription}</p>
                <h4 className="mens-rate">
                  <span className="mens-rate-mrp">
                    ₹<s>{mrp}</s>
                  </span>
                  <span className="mens-rate-sp">₹ {sp}</span>{" "}
                </h4>

                <div className="mens-flex-ratings">
                  <div className="mens-flex-ratings-a">
                    <p className="mens-rev-star">
                      <AiFillStar color="white" /> {star}
                    </p>
                    <p className="mens-flex-num">{review} reviews</p>
                  </div>
                  <p className="mens-flex-icons">
                    <BsFillShareFill color=" blue" className="share-icon" />
                  </p>
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </Slider>
  
      </div>
    
    );
  }
export default Recentlyviewed

// const Carousel2 = () => {
//   return (
//     <div>Carousel2</div>
//   )
// }

// export default Carousel2
