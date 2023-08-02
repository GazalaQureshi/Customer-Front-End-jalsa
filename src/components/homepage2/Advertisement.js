import React from 'react'
import "./Advertisement.css"

import img1 from "../../images/advertise/img1.jpg"
import img2 from "../../images/advertise/img2.jpg"
import img3 from "../../images/advertise/img3.jpg"

const Advertisement = () => {
  return (
    <div style={{background:"rgb(239, 239, 239)",display:"flex",height:"750px",marginTop:"4rem",padding:" 3rem 3rem 1rem 8%"}}>
        
          <div style={{display:"flex",justifyContent:"space-between",position:"relative",width:"75%",marginRight:"4rem"}}>
            <img className="hp-adv-img1" src={img1} alt="img1" style={{width:"43%"}} />
            <img className="hp-adv-img2" src={img2} alt="img2" style={{width:"43%"}} />
            <img  className="hp-adv-img3" src={img3} alt="img3" style={{width:"40%",position:"absolute",top:"20%",left:"30%"}} />
          </div> 
          
        <div  style={{marginTop:"5rem"}}>
          <h1 style={{width:"95%"}}>Handbags, Footwear & Jewellery</h1>
          <h3>UPTO 70% OFF</h3>
          <button className='vbtn'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Advertisement  