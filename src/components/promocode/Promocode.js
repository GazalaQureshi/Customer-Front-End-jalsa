import React,{useEffect} from 'react'
import { BiSearch } from 'react-icons/bi'
import {MdClose} from "react-icons/md"
import promo from "../../images/promo-code.png"
import { useState } from 'react'
import "./Promocode.css"



const Coupons = (props) => {
  const { text, code, handleCouponSelect, selectedCoupon } = props;

  const handleClick = () => {
    handleCouponSelect(code);
  };

  return (
    <div className='coupon-box'
      style={{
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        border: `1px solid ${selectedCoupon === code ? 'black' : 'rgb(204, 200, 201)'}`,
        background:`${selectedCoupon === code ? "rgb(234, 230, 231)" : ""}`,
        
        borderRadius: "10px"
      }}
      onClick={handleClick}
    >
      <div className='coupon-img-div'>
      <img src={promo} alt="promo" style={{width:"100%",height:"100%",objectFit:"cover"}} />
      </div>
      
      <div style={{ width: "350px", marginLeft: "1.1rem" }}>
        <p className='coupon-text' style={{  }}>{text}</p>
        <p className='coupon-code' style={{  color: "grey" }}>{code}</p>
      </div>
      <p className='coupon-text' style={{ color: "grey"}}>Apply</p>
    </div>
  );
};
 
const Promocode = () => {
  const couponData = [
    {
      id: 1,
      text: "Special 30000% Off",
      code: "ONLYTODAY"
    },
    {
      id: 2,
      text: "Flat 30% Off",
      code: "FLAT30ABC"
    },
    {
      id: 3,
      text: "Upto 50% Off",
      code: "FLAT50CDE"
    },
    {
      id: 4,
      text: "Festive Offer",
      code: "FESTIVE20OFF"
    }
  ];

  const [selectedCoupon, setSelectedCoupon] = useState('');

  const handleCouponSelect = (code) => {
    setSelectedCoupon(code);
  };

  const [ismodalopen, setIsmodalopen] = useState(false);

  const openmodal = () => {
    setIsmodalopen(true);
  };

  const closemodal = () => {
    setIsmodalopen(false);
    setSelectedCoupon('');
  };
  const [showsection, setShowsection] = useState(true);
  


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShowsection(false);
       
      } else {
        setShowsection(true);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize); // Listen for window resize events

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div style={{ textAlign: "right" }}>
        <button style={{ border: "2px solid red", padding: ".5rem 1rem" }} onClick={openmodal}>
          Temporary modal
        </button>
      </div>

      <div className={ismodalopen ? "modal-overlay show-modal" : "modal-overlay"}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%",maxWidth:"750px", margin: "1rem auto" }}>
            <h1 className='coupon-heading'>APPLY COUPON</h1>
            
            {
              showsection ? 
              <div style={{ position: "relative" }}>
              <input type="text" placeholder="Search Promo code" style={{ width: "300px", height: "40px",borderRadius:"10px", border: "1px solid grey", fontSize: "1.1rem", paddingLeft: "1rem" }} />
              <BiSearch style={{ position: "absolute", right: ".5rem", top: ".4rem", fontSize: "1.9rem" }} />
            </div> :""
            }
            
            <button onClick={closemodal} style={{ background: "transparent", border: "none" }}>
              <MdClose className='coupon-close'  />
            </button>
          </div>
        </div>
        <div>
        {
  !showsection ? (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "relative" }}>
        <input
        className='coupon-input'
          type="text"
          placeholder="Search Promo code"
          style={{
            margin: "1rem auto",
            borderRadius: "10px",
            border: "1px solid grey"
          }}
        />
        <BiSearch className='coupon-search'  />
      </div>
    </div>
  ) : null
}
          <div>
            {couponData.map(({ text, code }) => {
              return (
                <Coupons
                  key={code}
                  text={text}
                  code={code}
                  handleCouponSelect={handleCouponSelect}
                  selectedCoupon={selectedCoupon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Promocode