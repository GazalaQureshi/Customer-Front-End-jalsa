import React, { useState, useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBinLine } from "react-icons/ri"
import img from "../../images/bestseller/b2.png"
import { AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import "./Cart.css"
import { Link } from 'react-router-dom'
const Cart = () => {

  const subtotal = 150
  const discount = 10
  const grandtotal = subtotal - (discount / 100 * subtotal)
{/* <Cartitem img={img} title="Hem Lotus Outfit Luxury Pret" size="small" quantity={1} price={89.99} /> */}
  const [cartItems,setCartItems] =useState([
    {
      id:1,
      img:img,
      title:"Hem Lotus Outfit Luxury Pret",
      quantity:1,
      price:89.99,
      on:true,
      size:"small"

    },
    {
      id:2,
      img:img,
      title:"Hem Lotus Outfit Luxury Pret",
      quantity:1,
      price:89.99,
      on:false,
      size:"small"

    },
    {
      id:3,
      img:img,
      title:"Hem Lotus Outfit Luxury Pret",
      quantity:1,
      price:89.99,
      on:false,
      size:"small"

    },
    {
      id:4,
      img:img,
      title:"Hem Lotus Outfit Luxury Pret",
      quantity:1,
      price:89.99,
      on:false,
      size:"small"

    }
  ])

  const [showsection, setShowsection] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShowsection(false);
      } else {
        setShowsection(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [showgrid, setShowgrid] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShowgrid(false);
      } else {
        setShowgrid(true)
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggle(id) {
    setCartItems(prevItem => {
        return cartItems.map((singleitem) => {
            return singleitem.id === id ? {...singleitem, on: !singleitem.on} : singleitem
        })
    })
}


  const getDivWidth = () => {
    if (window.innerWidth > 992) {
      return '60%';
    } else {
      return '';
    }
  };
  const getDivWidthtotal = () => {
    if (window.innerWidth > 992) {
      return '35%';
    } else {
      return '';
    }
  };
  const getMargin = () => {
    if (window.innerWidth > 992) {
      return '0 0 0 2rem';
    } else {
      return "0 1rem";
    }
  };
  const getflex = () => {
    if (window.innerWidth > 992) {
      return 'flex';
    } else {
      return '';
    }
  };


  //counter logic

  const [counter, setCounter] = useState(1);

  useEffect(() => {
  }, [counter]);

 

  const decrementCounter = (id) => {
    
      setCartItems(prevItem => {
        return cartItems.map((singleitem) => {
            return singleitem.id === id ? {...singleitem, quantity: singleitem.quantity - 1} : singleitem
        })
    })
    
  };

  const incrementCounter = (id) => {
     setCartItems(prevItem => {
        return cartItems.map((singleitem) => {
            return singleitem.id === id ? {...singleitem, quantity: singleitem.quantity + 1} : singleitem
        })
    })
  };


  return (
    <div>
      {
        showsection ? <h1 style={{marginLeft:"2rem"}} >shopping cart</h1> : ""
      }

      <div className={showgrid ? "cart-flex" : "cart-grid"}>
        <div style={{ width: getDivWidth(), position: "relative", margin: "0rem " }}>
          {
            showsection ? <button style={{ position: "absolute", right: "1rem", top: "-0.5rem", background: "transparent", border: "1px solid grey", borderRadius: "5px", fontSize: "1.4rem", padding: ".4rem .6rem", display: "flex" }}>
              <RiDeleteBinLine /><span style={{ marginLeft: ".3rem" }}> Remove</span>
            </button> : ""
          }

          {
            showsection ?
              <div style={{ display: "flex", marginTop: "2rem" }}>
                <p style={{ width: "61%" ,marginLeft:"2rem",display:"flex",alignItems:"center"}}><input type="checkbox" style={{ transform: "scale(1.8)" }}  /><span style={{ fontSize: "1.5rem", color: "grey", marginLeft: "1rem" }}>Product</span></p>
                <p style={{ width: "30%", fontSize: "1.5rem", color: "grey" }}>Quantity</p>
                <p style={{ width: "10%", fontSize: "1.5rem", color: "grey" }}>Price</p>
              </div> : ""
          }
          {
            cartItems.map(({img,title,on,size,id,price,quantity}) =>{
              
              return(
                <div key ={id} style={{ display: getflex(), marginLeft: "1rem", marginRight: "1rem", margin: getMargin(),paddingBottom:"1rem", paddingTop: "1.5rem", borderBottom: "1px solid grey" }}>
        
        <div className='cart-main-section' style={{ display: "flex", width: getDivWidth()}}>
          {
            showsection && <input type="checkbox"  style={{ transform: "scale(1.8)" ,marginRight:".5rem"}} />
          }
          <div className='cart-item-img' style={{ }}>
            <img src={img} alt="cart-item" width="100%" height="100%" style={{ borderRadius: "10px", objectFit: "cover" }} />
          </div>

          <div  style={{width:"100%"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h2 className='cart-heading' style={{ width: "90%", marginBottom: "0", marginTop: "1rem" }}>{title}</h2>
            {
              !showsection ? <button  onClick={() => toggle(id)} style={{border:"none", marginTop: "1rem",background:"transparent",marginRight:".5rem",marginLeft:".5rem"}}> {on ? <AiFillHeart color='blue' className='cart-heart' style={{padding:".1rem"}}/> : <AiOutlineHeart className='cart-heart' color='blue' />}</button> :"" 
            }
            </div>
            
            <p className='cart-heading' style={{ marginTop: "0rem",marginBottom:"0.2rem", color: "grey" }}>{size}</p>
            {
              !showsection ? <div>
                <p className='cart-heading' style={{marginTop:"0",marginBottom:"0",  fontWeight: "bold" }}>{`$${price}`}</p>
                <div className='cart-main-btn' >
                <div className='cart-btn-m' style={{ display: "flex", justifyContent: "space-between", border: "1px solid grey", borderRadius: "5px"}}>
                <button className='cart-btn' style={{ border: "none", background: "transparent" }} onClick={() =>decrementCounter(id)}><AiOutlineMinus /></button>
                <p className='cart-btn' style={{  margin: ".2rem .4rem" }}>{quantity}</p>
                <button className='cart-btn' style={{ border: "none", background: "transparent" }} onClick={() =>incrementCounter(id)}><AiOutlinePlus /></button>
              </div>
              <button className='cart-btn-rm' style={{  background: "transparent", border: "1px solid grey", borderRadius: "5px",display: "flex" }}>
              <RiDeleteBinLine /><span style={{ marginLeft: ".3rem" }}> Remove</span>
            </button>
                </div>
              </div> : ""
            }
          </div>
        </div>
        {
          showsection ? <> <div className='cart-main-btn' style={{ width: "30%" }}>
            <div style={{ display: "flex", border: "1px solid grey", width: "85px", padding: ".2rem .4rem", marginTop: "1rem" }}>
            <button style={{ border: "none", background: "transparent", fontSize: "1.2rem" }} onClick={() =>decrementCounter(id)}><AiOutlineMinus /></button>
                <p style={{ fontSize: "1.4rem", margin: ".2rem .4rem" }}>{quantity}</p>
                <button style={{ border: "none", background: "transparent", fontSize: "1.2rem" }} onClick={() =>incrementCounter(id)}><AiOutlinePlus /></button>
            </div>
            <p style={{ marginTop: ".5rem", marginLeft: ".5rem", fontSize: "1rem" }}><RiDeleteBinLine /> Remove</p>
          </div>
            <p className='cart-main-price' style={{ width: "10%", fontSize: "1.5rem", fontWeight: "bold" }}>{`$${price}`}</p></> : ""
        }

      </div>
              )
            })
          }
           
        </div>
        <div style={{ width: getDivWidthtotal(), margin: "1rem 1rem" }}>
          <div style={{ border: "1px solid rgb(210,210,210)", margin: ".5rem auto", borderRadius: "25px", width: "220px", padding: "1rem 3rem", fontSize: "1.4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><p style={{ margin: "0" }}>Subtotal :</p><span><b>{`$${subtotal}`}</b></span></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><p>Discount :</p><span>{`$${discount}`}</span></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px dotted grey" }}><p>Grand Total :</p><span><b>{`$${grandtotal}`}</b></span></div>
            <button style={{}} className='cart-checkoutbtn'><Link to="/checkout" style={{textDecoration:"none",color:"inherit"}}> CHECKOUT</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart