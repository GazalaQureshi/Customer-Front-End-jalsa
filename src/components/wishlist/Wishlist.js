import React,{useState} from "react";
import wishh from "../../images/wishh.png";
import {FaShare} from "react-icons/fa"
import "./Wishlist.css"
import { BsShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {FiFilter} from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"


const Wishlist = () => {
  const [currentURL,setCurrentURL] = useState(window.location.pathname)
  console.log(currentURL);
  const data=[
    {
      img:"./images/women/daud-abbas.png",
      title:"Kalki",
      text:"Stripped Flutter Sleeved",
      mrp:"1500",
      sp:"1000" 
    },
    {
      img:"./images/mens/m1.png",
      title:"Astore",
      text:"Diamond Earings",
      mrp:"1500",
      sp:"1000"
    },
    {
      img:"./images/women/kaftans.png",
      title:"Kalki",
      text:"Silk Patola Kurta Suit",
      mrp:"1500",
      sp:"1000"
    },
    {
      img:"./images/women/frocks.png",
      title:"Kalki",
      text:"Indigo Blue Sharara Suit",
      mrp:"1500",
      sp:"1000"
    },{
      img:"./images/mens/m3.png",
      title:"Home Center",
      text:"Scented Jar Candle",
      mrp:"1500",
      sp:"1000"
    },{
      img:"./images/women/maan-mehran.png",
      title:"Kalki",
      text:"Silk Patla Kurta Suit",
      mrp:"1500",
      sp:"1000"
    }
  ]
  
  
  
  return (<div>
  <div style={{display:"flex" ,justifyContent:"space-between",margin:"auto 5rem auto 3rem"}}>
    <h1>{`Wishlist (${data.length})`}</h1>
      <button className="wish-add-all"><AiOutlineShoppingCart/> <span style={{color:"blue",marginLeft:".3rem"}}> move all to cart</span></button>
   
  </div>
    <div className='wish-section'>
                {
                    data.map((hl) => {
                        const {id, img,title,text,mrp,sp } = hl

                        return (<div className='wish-card' key={id}>
                        
                            <div className='hl-img-sec'>
 
                             <div className='wish-img-div'><img src={img} alt="iiimg" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
                            <button  className='mens-img-like'><BsShareFill color='blue' fontSize="1.9rem" style={{padding:".1rem"}}/> </button>
                            </div>
                            <div className='wish-detail-sec'>
                                <h4 className="wish-title" style={{margin:"0.3rem"}}>{title}</h4>
                                <p className='hl-discription'>{text}</p>
                                <h4 className='hl-rate' style={{margin:".2rem"}}><span className='hl-rate-mrp'>₹<s>{mrp}</s></span><span className='hl-rate-sp'>₹ {sp}</span> </h4>
                                
                            </div>
                            <button className="wish-btn">ADD TO CART</button>
                        </div>)
                    })
                }
            </div>
</div>  );
};

export default Wishlist;
