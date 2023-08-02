import React from "react";
import "./Recomended.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Recomended = () => {
  const data = [
    {
      id: 1,
      img: "./images/recomended/r1.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    },
    {
      id: 2,
      img: "./images/recomended/r2.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    },
    {
      id: 3,
      img: "./images/recomended/r3.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    },
    {
      id: 4,
      img: "./images/recomended/r4.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    }, {
      id: 5,
      img: "./images/recomended/r1.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    },
    {
      id: 6,
      img: "./images/recomended/r2.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    },
    {
      id: 7,
      img: "./images/recomended/r3.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
    },
    {
      id: 8,
      img: "./images/recomended/r4.png",
      title: "Blue Skill Kurta Set",
      subtitle: " Discription text"
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
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
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
        breakpoint: 9999,
        settings: {
          slidesToShow: 5,
        }
      },
      // Add more breakpoints and settings as needed
    ]
  };

  return (
    <div style={{ padding: `${window.innerWidth > 768 ? "0 2rem" : "0 .7rem"}` }}>

      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center",marginTop:"1.2rem",marginBottom:"1rem"  }}>
        <h1  className='hp-title' style={{ }}>Recommended For You</h1>
        <button className="vbtn"><Link className="shop-btn-home-page" to="/trend" style={{ margin: "auto", width: "50%" ,color:"inherit",textDecoration:"none"}} >View All</Link></button>
      </div>
      <Slider {...settings}>
        {
          data.map((single) => {
            const { img, title, subtitle } = single
            return (<div>
              <div style={{margin:`${window.innerWidth > 768 ? "0 .8rem" : "0 .3rem"}`}} >
              <div >
                <img  src={img} alt="trendimg" style={{ objectFit: "cover",width:"100%",height:"100%" }} />
                </div>
                <div style={{ width: "100%", background: "rgb(240,240,240)", borderTop: "1px solid rgb(240,240,240)" }}>
                  <h1  className="recom-title" style={{ textAlign: "center", marginTop: ".5rem", width: '100%', marginBottom: ".2rem" }}>{title}</h1>
                  <h2 className="recom-text" style={{ textAlign: "center", marginTop: ".2rem", paddingBottom: ".6rem" }}>{subtitle}</h2>
                </div>

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
