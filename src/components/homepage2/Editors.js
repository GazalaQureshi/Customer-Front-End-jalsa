import React from "react";
import "./Editors.css";
import Slider from "react-slick";

const Editors = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    autoplay: false,
    pauseOnHover: true,
    // speed: 500,
    // autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear"
  };


  const data = [
    {
      img: "./images/editors.png",
      title: "Pleasant Purple Tones",
      text: "Grab From The Royal Hues",
    },
    {
      img: "./images/editors.png",
      title: "Ready To Ship",
      text: "Don't Wait, Get The Stunning Look",
    },
    
    {
      img: "./images/editors.png",
      title: "Ready To Ship",
      text: "Don't Wait, Get The Stunning Look",
    }
  ];

  return (
    <div className="editor-all" style={{paddingLeft:"2rem",paddingRight:"2rem"}}>
        
      <h1 className="ed-head">Editors Choice</h1>
      <div className="flex-con" >
      <Slider {...settings}>
      {data.map((item) => {
          const { img, title, text } = item;
          return (
            <div className="editor-item" >
            <div >
            <img src={img} alt="editors" style={{width:"95%",height:"350px"}}/>
            </div>
              
              <div className="editor-content">
                <h1 className="edti">{title}</h1>
                <h2 className="edt" style={{width:"250px"}}>{text}</h2>
                <button className="shop-now">SHOP NOW</button>
              </div>
            </div> 
          );
        })}
      </Slider>
        
      </div>
    </div>
  );
};

export default Editors;
