import React from "react";
import "./Recomended.css";
import Slider from "react-slick";

const Recomended = () => {
  const data = [
    {
      id: 1,
      img: "./images/recomended/r1.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
    {
      id: 2,
      img: "./images/recomended/r2.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
    {
      id: 3,
      img: "./images/recomended/r3.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
    {
      id: 4,
      img: "./images/recomended/r4.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },{
      id: 5,
      img: "./images/recomended/r1.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
    {
      id: 6,
      img: "./images/recomended/r2.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
    {
      id: 7,
      img: "./images/recomended/r3.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
    {
      id: 8,
      img: "./images/recomended/r4.png",
      title: "Blue Skill Kurta Set",
      subtitle:" Discription text"
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
        <h1  style={{fontSize:"2.5rem"}}>Recommended For You</h1>
        <button className="vbtn">View All</button>
      </div>
      <Slider {...settings}>
        {
          data.map((single) => {
            const { img, title ,subtitle} = single
            return (
              <div style={{border:"1px solid red"}}>
                <img src={img} className='hp-main-img' alt="trendimg" style={{ width: "90%", borderRadius: "10px" }} />
                <div style={{width: "90%",background:"rgb(240,240,240)",border:"1px solid rgb(240,240,240)"}}>
                <h1 style={{ textAlign: "center" ,marginTop:".5rem",marginBottom:".2rem",fontSize:"1.5rem"}}>{title}</h1>
                <h2 style={{ textAlign: "center" ,marginTop:".2rem",marginBottom:".6rem",fontSize:"1.2rem"}}>{subtitle}</h2>
                </div>
                
              </div>
            )
          })
        }
      </Slider>
      
    </div>
  );
};

export default Recomended;
