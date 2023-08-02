import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Checkout.css"
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const Checkout = () => {


  const checkoutorder = [
    { 
      img: "./images/women/frocks.png",
      title: "Hem Lotus Outfit Luxury Pret",
      size: "Small",
      price: "89.99"
    }
  ]
  const subtotal = 150
  const discount = 10
  const shipment = 100
  const grandtotal = subtotal - discount + shipment


  const [showsection, setShowsection] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShowsection(false);
        // setShowsummary(false)


      } else {
        setShowsection(true);
        setShowsummary(true)
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize); // Listen for window resize events

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [showsummary, setShowsummary] = useState(false)
  
  const [isRotated, setIsRotated] = useState(false);
  const togglesummary = () => {
    setIsRotated(!isRotated);
    setShowsummary((prev) => !prev);
  };

  const getDivWidth = () => {
    if (window.innerWidth > 992) {
      
      return '55%';
    }
    else {
      return '100%';
    }
  };
  const getorderwidth = () => {
    if (window.innerWidth > 992) {
      return '35%';
    }
    else {
      return '';
    }
  };
  const getDivWidthbottom = () => {
    if (window.innerWidth > 992) {
      return '55%';
    }
    else {
      return '';
    }
  };
  const [selectedMethod, setSelectedMethod] = useState(null);
 

  const Ordersummary = () => {
    return (
      <div className='checkout-top-2' style={{ border: "1px solid grey", borderRadius: "10px", width: getorderwidth(), marginRight: "1rem", marginLeft: "1rem", padding: " 1rem",paddingBottom:".2rem" }}>
        
        <div>
          {
            showsection ? <h1 className='ck-titles' style={{ marginTop: "0rem", marginBottom: "1.2rem" }}>Your Order</h1> :
             
              <div onClick={() => togglesummary()}  style={{ display: "flex",margin:"0 .5rem",marginBottom:".8rem",justifyContent:"space-between",alignItems:"center" }}>
                <div  style={{display:"flex",alignItems:"center",position:"relative"}}>
                <h3  className='ck-summary'style={{margin:"0"}}>Show Order Summary</h3> 
                <span className='ck-summary-arrow' style={{marginLeft:".6rem"}}>{isRotated ? <FiChevronUp /> : <FiChevronDown />}</span></div>
                <h3 className='ck-summary-total' style={{margin:"0"}}>{`$${grandtotal}`}</h3>
              </div> 
             

          }
          {
            showsummary ? <>
            {checkoutorder.map((corder) => {
            const { img, title, size, price } = corder
            return (

              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed grey", paddingBottom: "1rem", marginBottom: "1.3rem" }}>
                <div style={{ display: "flex" }}>
                  <div className='ck-top2-img' style={{ marginRight: "1rem" }}>
                    <img src={img} alt="cart-item" width="100%" height="100%" style={{ borderRadius: "10px", objectFit: "cover" }} />
                  </div>

                  <div>
                    <h3 className="ck-top2-title" style={{ width: "80%", marginBottom: "0", marginTop: ".2rem" }}>{title}</h3>
                    <p className='ck-top2-info' style={{ marginBottom: "0" }}>{size}</p>
                    <p className='ck-top2-info' >{`x ${1}`}</p>
                  </div>
                </div>
                <p className="ck-titles" style={{ fontWeight: "bold", marginTop: "0.5rem" }}>{`$${price}`}</p>
              </div>
            )
          })}
        

        <div>
          <h1 className='ck-titles' style={{ marginTop: ".2rem", marginBottom: ".4rem" }}>Discount Code</h1>
          <div style={{ display: "flex" }}>
            <input className='ck-input' type="text" placeholder="Add Discount Code" style={{ width: "65%", paddingLeft: ".8rem", border: "1px solid grey", borderRadius: "5px", marginBottom: ".5rem" }} />
            <button className='ck-apply'>Apply</button>
          </div>
          <p className="ck-top2-p" style={{ marginTop: ".8rem" }}><b>New Customer </b><Link to="/signup" style={{ color: "inherit" }}>Sign Up</Link> to get better offer</p>
        </div>


        <div className="ck-top2-cart" style={{ padding: "1rem 1rem", margin: "1rem auto 0 auto" }}>
          <div className='ck-top2-totals' style={{ paddingBottom: ".7rem" }}  ><p style={{ margin: "0", color: "grey" }}>Subtotal</p><p style={{ margin: "0" }}>{`$${subtotal}`}</p></div>
          <div className='ck-top2-totals' style={{ paddingBottom: ".7rem" }}><p style={{ margin: "0", color: "grey" }}>Discount</p><p style={{ margin: "0" }}>{`-$${discount}`}</p></div>
          <div className='ck-top2-totals' style={{ paddingBottom: "1.2rem" }}><p style={{ margin: "0", color: "grey" }}>Shipment Cost</p><p style={{ margin: "0" }}>{`$${shipment}`}</p></div>
          <div className='ck-top2-totals' style={{ borderTop: "1px dashed grey" }}><p style={{ color: "grey" }}>Grand Total</p><p>{`$${grandtotal}`}</p></div>
          {
            window.innerWidth > 992 && <button style={{}} className='ck-top2-paybtn'>CONTINUE TO PAYMENT</button>
          }


        </div>
            </> : ""
          }
          

          </div>
      </div>
    )
  }

  return (
    <div >

      {
        showsection ? <div style={{ display: "flex", marginBottom: "1rem", marginLeft: "2.5rem" }}>
          <Link to="/cart" style={{ color: "black", textDecoration: "none" }}> <h1 className='ck-titles' style={{ marginRight: "1rem", marginTop: "0" }}>Cart</h1></Link>
          <h1 className='ck-titles' style={{ marginRight: "1rem", color: "grey", marginTop: "0" }}>Checkout</h1>
          <Link to="/saved-card" style={{ color: "black", textDecoration: "none" }}> <h1 className='ck-titles' style={{ marginRight: "1rem", marginTop: "0" }}>Payment</h1></Link>
        </div>
          :
          <div >

            
            {

               <Ordersummary /> 

            }
          </div>
      }

      <div className='checkout-top' style={{ display: "flex", justifyContent: "space-between", margin: " 1rem " }}>

        <div className='checkout-top-1' style={{ border: "1px solid grey", borderRadius: "20px", width: getDivWidth(), padding: ".5rem 2rem .5rem 1.5rem" }}>
          <div style={{ borderBottom: "1px  solid rgb(200, 194, 194)", paddingBottom: "1rem" }}>
            <h1 className='ck-titles' style={{ marginTop: ".8rem" }} >Select shipping country</h1>
            <select className='ck-input' name="cars" id="cars" style={{ borderRadius: "5px" }} >
              <option value="volvo">Select Country</option>
              <option value="saab">India</option>
              <option value="mercedes">Afghanistan</option>
              <option value="audi">USA</option>
            </select>
          </div>
          <div>
            <h1 className='ck-titles' style={{ marginTop: ".8rem" }}>Shipping Address</h1>
            <label htmlFor='ck-name' className='ck-name'  >Full Name *</label>
            <input className='ck-input' type="text" id="ck-name" placeholder='Enter Your Full Name' style={{ marginBottom: "1rem" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "48%", marginBottom: "1rem" }}>
                <label htmlFor='ck-name' className='ck-name' >Email Address *</label>
                <input className='ck-input' type="text" id="ck-name" placeholder='Enter Your Email Address' style={{}} />
              </div>
              <div style={{ width: "48%" }}>
                <label htmlFor='ck-name' className='ck-name'  >Confirmation email *</label>
                <input className='ck-input' type="text" id="ck-name" placeholder='Enter Your Confirmation email' style={{}} />
              </div>
            </div>
            <label htmlFor='ck-name' className='ck-name'  >Phone Number *</label>
            <input className='ck-input' type="text" id="ck-name" placeholder='Enter Your phone number' style={{ marginBottom: "1rem" }} />
            <div>
              <label htmlFor='ck-name' className='ck-name'  >City *</label>
              <input className='ck-input' type="text" id="ck-name" placeholder='city' style={{ width: "40%", marginBottom: "1rem", display: "block" }} />
              <select name="cars" id="cars" className="ck-input" style={{ marginBottom: ".8rem" }}>
                <option value="volvo">Select Region</option>
                <option value="saab">Branded</option>
                <option value="mercedes">Trending</option>
                <option value="audi">Sales</option>
              </select>

              <label htmlFor='ck-name' className='ck-name' >Postal code*</label>
              <input className='ck-input ck-input-postal ' type="text" id="ck-name" placeholder='Enter Your Postal code' style={{ marginBottom: "1rem" }} />
              <p className='ck-titles' ><Link to="/saved-address" style={{ color: "inherit" }}>Choose from saved address</Link></p>

            </div>

          </div>

        </div>
        {showsection ?
          <Ordersummary /> : ""}


      </div>
      <div className="checkout-bottom" style={{ border: "1px solid grey", borderRadius: "20px", width: getDivWidthbottom(), padding: "1rem  ", margin: "2rem 1rem 1rem 1rem" }}>
        <h1 className='ck-titles' style={{ marginTop: ".5rem" }} >Shipping Method</h1>
        <div className={`ck-box ${selectedMethod === 'economy' ? 'selected-shipping' : ''}`}
  onClick={() => setSelectedMethod('economy')} style={{ display: "flex", justifyContent: "space-between", border: "1px solid grey", borderRadius: "10px", marginBottom: "1rem" }}>
          <div >
            <h1 className='ck-shipping' style={{ margin: "0", display: "flex" }}><input type="radio" name="ck-radiobtn" className='ck-radiobtn'  checked={selectedMethod === 'economy'} readOnly></input><span style={{ marginTop: ".1rem" }}>Economy</span></h1>
            <p className='ck-bottm-p' >Estimated delivery 30 March</p>
          </div>
          <h1 className='ck-titles' style={{ margin: "0 ", marginTop: ".5rem" }}>$10</h1>
        </div>
        <div className={`ck-box ${selectedMethod === 'express' ? 'selected-shipping' : ''}`}
  onClick={() => setSelectedMethod('express')} style={{ display: "flex", justifyContent: "space-between", border: "1px solid grey", borderRadius: "10px", marginBottom: "1rem" }}>
          <div>
            <h1 className='ck-shipping' style={{ margin: "0", display: "flex" }}><input type="radio" name="ck-radiobtn" className='ck-radiobtn' checked={selectedMethod === 'express'} readOnly></input><span style={{ marginTop: ".1rem" }}>Express</span></h1>
            <p className='ck-bottm-p' >Estimated delivery 30 March</p>
          </div>
          <h1 className='ck-titles' style={{ margin: "0 ", marginTop: ".5rem" }}>$10</h1>
        </div>
        <div className={`ck-box ${selectedMethod === 'regular' ? 'selected-shipping' : ''}`}
  onClick={() => setSelectedMethod('regular')} style={{ display: "flex", justifyContent: "space-between", border: "1px solid grey", borderRadius: "10px", marginBottom: "1rem" }}>
          <div>
            <h1 className='ck-shipping' style={{ margin: "0", display: "flex" }}><input type="radio" name="ck-radiobtn" className='ck-radiobtn' checked={selectedMethod === 'regular'} readOnly></input><span style={{ marginTop: ".1rem" }}>Regular</span></h1>
            <p className='ck-bottm-p'>Estimated delivery 30 March</p>
          </div>
          <h1 className='ck-titles' style={{ margin: "0 ", marginTop: ".5rem" }}>$10</h1>
        </div>
        <div className={`ck-box ${selectedMethod === 'cargo' ? 'selected-shipping' : ''}`}
  onClick={() => setSelectedMethod('cargo')} style={{ display: "flex", justifyContent: "space-between", border: "1px solid grey", borderRadius: "10px", marginBottom: "1rem" }}>
          <div >
            <h1 className='ck-shipping' style={{ margin: "0", display: "flex" }}><input type="radio" name="ck-radiobtn" className='ck-radiobtn'  checked={selectedMethod === 'cargo'} readOnly></input><span style={{ marginTop: ".1rem" }}>Cargo</span></h1>
            <p className='ck-bottm-p' >Estimated delivery 30 March</p>
          </div>
          <h1 className='ck-titles' style={{ margin: "0 ", marginTop: ".5rem" }}>$10</h1>
        </div>


      </div>




      
      {
            window.innerWidth < 992 && <button style={{}} className='ck-top2-paybtn'>CONTINUE TO PAYMENT</button>
          }
    </div>
  )
}

export default Checkout