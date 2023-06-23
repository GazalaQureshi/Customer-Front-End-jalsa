import React from 'react'
import { Link } from 'react-router-dom'
import "./Notfound.css"

const Notfound = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"3rem"}}>
        <h1>Page Not Found</h1>
        <Link style={{textDecoration:"none",color:"white"}} to="/"><button className='nfound-btn' style={{color:"white",padding:"1rem 1.4rem",fontSize:"1.3rem",borderRadius:"10px"}} > BACK TO HOME </button></Link>
    </div>
  )
}

export default Notfound