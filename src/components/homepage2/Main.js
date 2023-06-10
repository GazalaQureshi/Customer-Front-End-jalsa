import React from "react";
import "./Main.css";
import women from "../../images/women-main.png"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import {FiArrowLeft,FiArrowRight} from "react-icons/fi"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green",position:"relative",top:"0" }}
      onClick={onClick}
    />
  );
}


const Main = () => {


  const hpmain= [
    {
      id:1,
      img:"./images/mainn2.jpg",
      title:"Eid Ready To Wear",
      subtitle:"ORDER NOW TO GET YOUR OUTFITS BEFORE EID"
    },
    {
      id:2,
      img:"./images/mainn.jpg",
      title:"Eid Ready To Wear",
      subtitle:"ORDER NOW TO GET YOUR OUTFITS BEFORE EID"
    },
    {
      id:3,
      img:"./images/homepage/mainn10.jpg",
      title:"Eid Ready To Wear",
      subtitle:"ORDER NOW TO GET YOUR OUTFITS BEFORE EID",
      cover:"cover"
    }
  ]


  const slideshowProperties = {
    duration: 4000, // Set the autoplay timing to 5 seconds (5000 milliseconds)
    transitionDuration: 700, // Set the transition duration between slides (optional)
    infinite: true, // Allow infinite loop of slides (optional)
    indicators: false, // Show slide indicators (optional)
    arrows: true, // Show navigation arrows (optional)
  } 

  return (
    <div className="img-women-container" style={{}}>
    
      <Slide {...slideshowProperties}>
        {
          hpmain.map((single) => {
            const {id,img,title,subtitle,cover} = single
            return ( 
              <div>
                <img src={img} alt="sa" style={{width:"100%",height:"90vh" ,position:"relative",objectFit:{cover}}}/>
                <div className="overlay">
                <div style={{position:"absolute",bottom:"3rem",marginLeft:"8rem",color:"white"}}>
                <h1 className="hp-main-title" style={{margin:"0 auto"}}>{title}</h1>
                <p className="hp-main-subtitle" style={{marginTop:".2rem",fontWeight:"bold"}}>{subtitle}</p>
                <button className="hp-shop">SHOP NOW</button>
                </div>
                </div>
                

              </div>
            )
          })
        }
      </Slide>
    </div>
  );
};

export default Main;
