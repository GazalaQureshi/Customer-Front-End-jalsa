import React from 'react'
import Main from './Main'
import Trending from './Trending'
import Deals from './Deals'
import Featured from './Featured'
import Recomended from './Recomended'
import Editors from './Editors'
import Arrival from './Arrival'
import Bestseller from './Bestseller'
import Advertisement from './Advertisement'



const Content = () => {
  return ( 
    <div>
        <Main/>
        <Trending/>
        <Deals/>
        <Featured/>
        <Recomended/>
        <Editors/>
        <Arrival/>
        <Bestseller/>
        <Advertisement/>
        
    </div>
  )
}

export default Content