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
    <div  style={{ padding: `${window.innerWidth > 768 ? "0 2rem" : "0 1rem"}` }}>
      <h1  className='hp-title' style={{marginTop:"1.5rem"}}>New Arrivals</h1>
      <div className="arrival-container" style={{ display: "flex",width:"100%"}}>


        <div className='arr-img1' style={{ width: "33%", marginRight: ".8%" }}>
          <img src={arrivalimg1} alt="img1" width="100%" style={{ objectFit: "cover" }} />
        </div>

        <div className='arr-img2' style={{ width: "32%" }}>
          <img src={arrivalimg2} alt="img2" className='arr-imgd2' style={{ display: "block", height:"50%",objectFit: "cover", width: "100%",marginBottom:"3%" }} />
          <div className='arr-img' style={{ display: "flex", alignItems:"center",justifyContent: "space-between",height:"50%" }}>
            <div className='arr-img3' style={{ width: "48%" }}>
              <img src={arrivalimg3} alt="img1" style={{ objectFit: "cover", width: "100%",height:"100%" }} />
            </div>
            <div className='arr-img3' style={{ width: "49%" }}>
              <img src={arrivalimg4} alt="img1" style={{ objectFit: "cover", width: "100%",height:"100%" }} />
            </div>

          </div>

        </div>

        {/* <div className='arr-img2' style={{width:"30%"}}>
          <img src={arrivalimg2} alt="img2" className='arr-imgd2'  style={{display:"block",objectFit:"cover",width:"100%",marginBottom:"1rem"}}/>
          <div  className='arr-img' style={{display:"flex",justifyContent:"space-between"}}>
          <img   src={arrivalimg3} alt="img1" className='arr-img3'   style={{objectFit:"cover"}}/>
          <img src={arrivalimg4} alt="img1" className='arr-img3'   style={{objectFit:"cover"}}/>
          </div>
          
        </div> */}

        <div style={{ width: "36%" ,display: "flex", justifyContent: "center", marginLeft: ".8%" , alignItems: "center", background: "rgb(241, 230, 239)" }}>
          <div style={{ color: "brown", textAlign: "center" }}>
            <h1 className="arrival-text" >JUST IN</h1>
            <h1 className="arrival-text" >New + Now</h1>
            <button className="arr-vbtn">Shop Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Arrival


// 