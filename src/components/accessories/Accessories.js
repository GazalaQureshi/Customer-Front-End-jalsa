import React from 'react'
import "./Accessories.css"

import Aside from './Aside'
import Mainsection from './Mainsection'

const Accessories = () => {
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

export default Accessories