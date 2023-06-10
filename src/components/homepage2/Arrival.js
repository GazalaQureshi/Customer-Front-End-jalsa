import React from 'react'
import "./Arrival.css"

import arrivalimg1 from "../../images/Arrival/img1.png"
import arrivalimg2 from "../../images/Arrival/img2.png"
import arrivalimg3 from "../../images/Arrival/img3.png"
import arrivalimg4 from "../../images/Arrival/img4.png"


const Arrival = () => {


  // const images=[ 
  //   {
  //     img:"./images/women/daud-abbas.png",
  //     alt:"img1"
  //   },
  //   {
  //     img:"./images/women/daud-abbas.png",
  //     alt:"img2"
  //   },
  //   {
  //     img:"./images/women/daud-abbas.png",
  //     alt:"img3"
  //   },
  //   {
  //     img:"./images/women/daud-abbas.png",
  //     alt:"img4"
  //   }
  // ]

  return (
    <div style={{paddingLeft:"2rem",paddingRight:"2rem"}}>
      <h1>New Arrivals</h1>
      <div className="arrival-container" style={{display:"flex",height:"550px"}}>


        <div style={{width:"32%",marginRight:"1rem"}}>
          <img src={arrivalimg1} alt="img1" className='arr-img1' width="100%" height="100%" style={{objectFit:"cover"}}/>
        </div>

        <div style={{width:"30%"}}>
          <img src={arrivalimg2} alt="img2" className='arr-img2'  style={{display:"block",objectFit:"cover",width:"100%",height:"50%",marginBottom:"1rem"}}/>
          <div style={{display:"flex",justifyContent:"space-between",height:"100% "}}>
          <img src={arrivalimg3} alt="img1" className='arr-img3' width="48%" height="47%" style={{objectFit:"cover"}}/>
          <img src={arrivalimg4} alt="img1" className='arr-img4' width="48%" height="47%" style={{objectFit:"cover"}}/>
          </div>
          
        </div>

        <div style={{width:"36%", display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(241, 230, 239)"}}>
          <div style={{color:"brown",textAlign:"center"}}>
            <h1 style={{marginBottom:"0"}}>JUST IN</h1>
            <h1 style={{marginBottom:".8rem"}}>New + Now</h1>
            <button className="arr-vbtn">Shop Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Arrival


// 
