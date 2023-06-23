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
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 2,
        }
      },
      // Add more breakpoints and settings as needed
    ]
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
   
      <div  className="editor-all"  style={{ padding: `${window.innerWidth > 768 ? "0 2rem" : "0 1rem"}` }}>
      <h1  className='hp-title' style={{marginTop:"1.5rem"}}>Editors Choice</h1>
      <div className="flex-con" >
        <Slider {...settings}>
          {data.map((item) => {
            const { img, title, text } = item;
            return (
              <div className="editor-item" >
                <div style={{margin:".5rem"}}>
                  <img src={img} alt="editors" style={{ width: "100%", objectFit:"cover", margin: 'auto' }} />
                </div>

                <div className="editor-content" style={{ paddingLeft: '25px' }}>
                  <h1 className="edti editor-ctnt-h1">{title}</h1>
                  <h2 className="edt editor-ctnt-h1" style={{ width: "250px" }}>{text}</h2>
                  <button className="shop-now editor-ctnt-btn">SHOP NOW</button>
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
