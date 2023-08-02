import React, { useEffect, useState } from 'react'
import "./Header.css"
import {FaFacebookF,FaTwitter} from "react-icons/fa"
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"
import {VscAccount} from "react-icons/vsc"
import {GrNotification} from "react-icons/gr"
import {MdManageSearch} from "react-icons/md"
import insta from "../../images/logos/instagram.png"
import logo from "../../images/logos/fs-logo.png"
import flag from "../../images/flag.png"
import { Link, NavLink } from 'react-router-dom'
 
const Header = () => {

  const [currentURL,setCurrentURL] = useState(window.location.pathname)
  console.log(currentURL);
  const [headactive, setHeadactive] = useState(currentURL);
  


    const headerArr=[
        {
            name:"Salwar Kameez",
            url:"/Salwar-Kameez"
        },
        {
            name:"Kurtis",
            url:"/Kurtis"
        },
        {
            name:"Pret",
            url:"/Pret"
        },
        {
            name:"Blouses",
            url:"/Blouses"
        },
        {
            name:"Wedding",
            url:"/Wedding"

        },
        {
            name:"Men",
            url:"/mens"

        },
        {
            name:"Unstitched",
            url:"/Unstitched"
        },
        {
            name:"Kids",
            url:"/kids-boys"

        },
        {
            name:"Home & Living",
            url:"/home-living"

        },
        {
            name:"Sale",
            url:"/sale"

        },


    ]
    
  return (
    <header className="header">
 
    
    <div className="header-top">
        <ul className='header-top-icons'>
            <li ><FaFacebookF className='ic'/></li>
            <li><img src={insta} width="35px" alt="insta-logo"/></li>
            <li ><FaTwitter className='ic'/></li>
            
        </ul>
        <div style={{display:"flex"}}>
        <div className='header-top-content'>
            Offer: Buy 2 get 1 Free
        </div>
        <div className="header-top-flag-container">
            <img src={flag} alt="Indian flag" className="header-top-flag"/>
        </div>
        </div>
        
    </div>





    {/* <div className="header-middle">
        <ul className="header-choices">
            <button className="vbtnh"><Link style={{textDecoration:"none",color:"inherit"}}  to="/">Women</Link></button>
            <button className="vbtnh"><Link style={{textDecoration:"none",color:"inherit"}}  to="/mens">Men</Link></button>
            <button className="vbtnh">Kids</button>
            <button className="vbtnh">Home & Living</button>
        </ul>
        <img src={logo} className="header-title" alt="fdf"/>
            
        
        <div className="header-middle-icons">
            <img src={iconss} alt="dfdf"/>
        </div>
    </div>
    <div > */}

    <div className="header-middle">
        <div className='header-middle-1'>
        <Link to="/"> <img src={logo} className="header-middle-logo" alt="fdf"/></Link>
        </div>

        <div className='header-middle-2'>
            <div className='hm-input-search'>
                <input type="text" className='hm-input'/>
                <MdManageSearch  className='hm-search'/> 
            </div>
            <ul className='header-middle-icons'>
                <li><Link to="/wishlist" > <AiOutlineHeart color="black"/></Link></li>
                
                <li><Link to="/set-profile" ><VscAccount color="black"/></Link></li>
                <li><Link to="/offers" ><GrNotification color="black"/></Link></li>
                <li><Link to="/cart" ><AiOutlineShoppingCart color="black"/></Link></li>
            </ul>
        </div>
    </div>
    <div >


        <ul className="header-bottom">
            
            {
                headerArr.map((singlehd,index) =>{
                    const {name,url} = singlehd 
                    
                    return (
            <li key={index}>
              <NavLink
                to={url}
                className= {({isActive}) => {
                    return (
                        (isActive) ? "header-bottom-active" : "header-bottom-nonactive"
                    )
                }}
                
                style={{textDecoration:"none"}}
              >
                {name}
              </NavLink>
            </li>
          );
                })
            }

        </ul>
    </div>
    </header>
  )
}

export default Header