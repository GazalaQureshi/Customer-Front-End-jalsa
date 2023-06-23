import React from 'react'
import dp from "../../images/kurta-img.jpg"
import { AiFillStar } from 'react-icons/ai'
import {BiLike} from "react-icons/bi"

const Comments = () => {
  return ( 
    <div style={{width:"100%",maxWidth:"700px"}}>
        <div style={{display:"flex",alignItems:"center"}}>
            <img src={dp} alt="dp" style={{width:"70px",borderRadius:"50%"}} />
            <div style={{marginLeft:"1rem"}}>
            <h2 style={{marginTop:"0",marginBottom:"0"}}>Joe Henderson</h2>
            <p style={{marginTop:"0.3rem",marginBottom:".5rem"}}>March 25, 2023</p>
            <p style={{marginTop:"0",marginBottom:"0"}}>
                            <AiFillStar color="blue" fontSize="1.2rem" style={{marginRight:".4rem"}} />
                            <AiFillStar color="blue" fontSize="1.2rem" style={{marginRight:".4rem"}} />
                            <AiFillStar color="blue" fontSize="1.2rem" style={{marginRight:".4rem"}}/>
                            <AiFillStar color="blue" fontSize="1.2rem" style={{marginRight:".4rem"}}/>
                            <AiFillStar color="blue" fontSize="1.2rem" style={{marginRight:".4rem"}} />
                          </p>
            </div>
            
        </div>
        <p  className='ov-description' style={{ marginTop:"0.2rem",marginBottom:".5rem"}}>Multiline comments are used for large text descriptions of code or to comment out chunks of code while debugging applications. Comments are ignored by the compiler.</p>
        <div>
            <p style={{color:"grey",fontSize:"1.2rem",display:"flex",alignItems:"center",margin:"0 0 3rem 1rem"}}><BiLike/><span> Like</span></p>
        </div>
    </div>
  )
}

export default Comments