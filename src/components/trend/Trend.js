import React,{useState,useEffect} from 'react'
import "./Trend.css"

import Aside from './Aside'
import Mainsection from './Mainsection'

const Trend = () => {
  ////////////////////////////tab logic///////////////////////
  

  return (
    <div className='mens-main'>
        
          <div className="aside">
           <Aside/> 
        </div>
    
        <div className='main-section'>
        <Mainsection/>
        </div>
        
        
    </div>
  )
}

export default Trend