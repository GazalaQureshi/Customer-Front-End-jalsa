import React from 'react'
import "./Homeliving.css"

import Aside from './Aside'
import Mainsection from './Mainsection'

const Mens = () => {
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

export default Mens