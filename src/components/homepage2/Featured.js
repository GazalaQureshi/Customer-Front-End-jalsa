import React from "react";
import "./Featured.css";
const Featured = () => {
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
    
      <div className="f-container" style={{ padding: "0 2rem 8rem 2rem"}} >
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem"}}>
        <h1  style={{fontSize:"3rem"}}>Featured Brands</h1>
        <button className="vbtn">View All</button>
      </div>
        <div className="f-con">
          {data.map((item) => {
            const { id, img } = item;

            return (
              <div className="f-deals" key={id}>
                <img src={img} alt="trend-pic" className="f-img" />
              </div>
            );
          })}
        </div>
      </div>
    
  );
};

export default Featured;
