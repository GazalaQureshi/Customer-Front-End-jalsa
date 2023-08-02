import React from 'react'
import "./Advertisement.css"

import img1 from "../../images/advertise/img1.jpg"
import img2 from "../../images/advertise/img2.jpg"
import img3 from "../../images/advertise/img3.jpg"

const Advertisement = () => {
  return (
    <div style={{background:"rgb(239, 239, 239)",display:"flex",justifyContent:"center",marginTop:"2.8rem",padding:" 1.5rem ",paddingTop:"2rem",paddingBottom:"8%"}}>
        
          <div style={{display:"flex",justifyContent:"space-between",position:"relative",width:`${window.innerWidth> 768 ? "50%" : "75%"}`,marginRight:"2rem"}}>
          <div style={{width:"43%"}}>
          <img className="hp-adv-img1" src={img1} alt="img1"  style={{width:"100%",objectFit:"cover"}}/>
          </div>
          <div style={{width:"43%"}}>
          <img className="hp-adv-img2" src={img2} alt="img2"  style={{width:"100%",objectFit:"cover"}}/>
          </div>
          <div style={{width:"40%",position:"absolute",top:"20%",left:"30%"}}>
          <img  className="hp-adv-img3" src={img3} alt="img3" style={{width:"100%",objectFit:"cover"}}  />
          </div>
            
            
          </div> 
          
        <div  style={{width:"30%",height:"100%",marginTop:"auto",marginBottom:"auto"}}>
          <h1  className="adv-text" style={{width:"95%"}}>Handbags, Footwear & Jewellery</h1>
          <h3 className='adv-text adv-off'>UPTO 70% OFF</h3>
          <button className='adv-btn'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Advertisement  