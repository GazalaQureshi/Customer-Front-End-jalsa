import React from 'react'
import "./Profileupdate.css"
import { AiOutlineCheck } from 'react-icons/ai'

const Profileupdate = () => {
  return (
    <div>


      <div style={{ margin: "0 auto", maxWidth: "360px" }}>
        <div style={{ margin: "0 auto", width: "30%", maxWidth: "360px", position: "relative", height: "140px" }}>
          <div className="so-1" style={{ background: "black", borderRadius: "50%", width: "6px", height: "6px", position: "absolute", top: ".8rem", left: "0.5rem" }}></div>
          <div className="so-2" style={{ background: "black", borderRadius: "50%", width: "10px", height: "10px", position: "absolute", top: "0", right: "0" }}></div>
          <div className="so-3" style={{ background: "black", borderRadius: "50%", width: "10px", height: "10px", position: "absolute", bottom: "2.4rem", left: "-.2rem" }}></div>
          <div className="so-4" style={{ background: "black", borderRadius: "50%", width: "15px", height: "15px", position: "absolute", bottom: "1.2rem", right: "-1.5rem" }}></div>
          <div className='so-5' style={{ background: "black", borderRadius: "50%", width: "100px", height: "100px", margin: "0 auto", position: "absolute", top: ".7rem", left: ".8rem" }}>
            <AiOutlineCheck color="white" style={{ fontSize: "4rem", fontWeight: "bold", position: "relative", left: "1.1rem", top: "1.3rem" }} />
          </div>
        </div>
      </div>
      <div style={{}}>
        <h2 style={{marginTop:".5rem",textAlign:"center",marginBottom:"2rem",fontSize:"1.7rem"}}>Your Profile Has Been Updated</h2>
        <button className='supdate-right-btns'>BACK</button>
      </div>


    </div>
  )
}

export default Profileupdate 