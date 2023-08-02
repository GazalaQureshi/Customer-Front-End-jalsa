import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
const Featured = () => {
  
  const getPadding =() =>{
    if (window.innerWidth > 992) {
      return "0 2rem 8rem 2rem"
    }
    else {
      return "0 2rem 4rem 2rem"
    }
  }
  
  const data = [
    {
      id: 1,
      img: "./images/brands/b11.png",
    },
    {
      id: 2,
      img: "./images/brands/b12.png",
    },
    {
      id: 3,
      img: "./images/brands/b13.png",
    },
    {
      id: 4,
      img: "./images/brands/b14.png",
    },
    {
      id: 5,
      img: "./images/brands/b11.png",
    },
    {
      id: 6,
      img: "./images/brands/b12.png",
    },
    {
      id: 7,
      img: "./images/brands/b13.png",
    },
    {
      id: 8,
      img: "./images/brands/b14.png",
    },
  ];

  return (

    <div className="f-container" style={{ padding: getPadding() }} >
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center",marginTop:"1.2rem",marginBottom:"1rem"  }}>
        <h1  className='hp-title' style={{ }}>Featured Brands</h1>
        <button className="vbtn"><Link className="shop-btn-home-page" to="/trend" style={{ margin: "auto", width: "50%",color:"inherit",textDecoration:"none" }} >View All</Link></button>
      </div>
      <div className="f-con">
        {data.map((item) => {
          const { id, img } = item;

          return (
            <div className="f-deals" key={id}>
              <img src={img} alt="trend-pic" className="f-img image-mb" />
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Featured;
