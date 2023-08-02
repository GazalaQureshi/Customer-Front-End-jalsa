import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./overview.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillHeart
} from "react-icons/ai"; 
import {
  BsBoxSeam,
  BsChevronDown,
  BsFacebook,
  BsFillShareFill,
  BsTruck,
  BsWhatsapp, 
} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import Countdown from "react-countdown";
import { useState } from "react";

//img-icons
import one from "../../images/product care/1.png";
import two from "../../images/product care/2.png";
import three from "../../images/product care/3.png";
import four from "../../images/product care/4.png";
import Comments from "./Comments";
import { useEffect } from "react";
import Similarproducts from "./trend_similar_recently/Similarproducts";
import Recentlyviewed from "./trend_similar_recently/Recentlyviewed";
import Slider from "react-slick";

const Trendoverview = () => {
  const { id } = useParams();
  const { trenddata } = useGlobalContext();

  //countdown logic
  ////FOR FINDING OUT TIME FOR COUNTDOWN
  let year = new Date().getFullYear();
  let month = "May"; //enter month eg  "January,April"
  let date = 30; //Enter end date eg. 20,22,23

  const timeStr = `${month} ${date}, ${year}`;

  let timeNow = Date.now();
  let timeEnd = Date.parse(timeStr);
  let remainingTime = timeEnd - timeNow;
  ////////////////////////////////////////////////////////

  //for rendering the page from top after the route changes
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  //counter
  const [count, setCount] = useState(0);

  const selectedMenData = trenddata.find((singlemen) => singlemen.id === Number(id));
  const { img } = selectedMenData;

  const [mainImage, setMainImage] = useState(`.${img}`);

  const handleImageClick = (newImage) => {
    setMainImage(`.${newImage}`);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '1rem',

  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '1rem',
    dots:true

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
  const reviewData = [
    { stars: 4, progress: 80, totalStars: 750 },
    { stars: 4, progress: 65, totalStars: 65 },
    { stars: 3, progress: 50, totalStars: 55 },
    { stars: 2, progress: 35, totalStars: 7 },
    { stars: 1, progress: 20, totalStars: 0 },
    // Add more review data as needed
  ];
  const renderReviews = () => {
    return reviewData.map((review, index) => {
      const { stars, progress, totalStars } = review;
      const starElements = [];
      const filledStarColor = 'blue';
      const emptyStarColor = 'rgb(235, 232, 232)';

      for (let i = 0; i < 5; i++) {
        const starColor = i < stars ? filledStarColor : emptyStarColor;
        starElements.push(
          <AiFillStar
            key={`star-${index}-${i}`}
            className="heart-icon review-star"
            color={starColor}
            style={{ marginRight: '.4rem' }}
          />
        );
      }

      return (
        <div key={`review-${index}`} className="ov-reviews-2s">
          {window.innerWidth > 768 && (
            <p style={{ marginTop: '0', marginBottom: '0', display: 'flex' }}>
              {starElements}
            </p>
          )}
          <div
            className="review-line"
            style={{
              background: 'rgb(235, 232, 232)',
              width: '300px',
              height: '7px',
              borderRadius: '10px',
              marginLeft: '.7rem',
              marginRight: '.8rem',
            }}
          >
            <div
              style={{
                background: 'blue',
                width: `${progress}%`,
                height: '7px',
                borderRadius: '10px',
              }}
            ></div>
          </div>
          <p style={{ margin: '0' }} className="review-num">
            {totalStars} stars
          </p>
        </div>
      );
    });
  };

   //////////////////////////change heart colour/////////////////////////
   const [isLiked, setIsLiked] = useState(false);

   const handleClick = () => {
     setIsLiked(!isLiked);
   };
   ///////////////////////////////////change size background////////////////
   const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);}
 
  return (
    <>
      <div>
        {trenddata.map((singlemen) => {
          if (singlemen.id === Number(id)) {
            const { img, id, discription, title, mrp, sp, review, star ,imgarr} =
              singlemen;

            return (
              <div key={id} className="ov-container">
                <div className="ov-top">
                {showsection ?
                    <div className="ov-top-left">
                      <div className="ov-top-left-1">
                        <img
                          src={mainImage}
                          alt="ovimg1"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="ov-top-left2" style={{ width: "100%" }}>


                        <Slider {...settings}>
                          {imgarr.map((image, index) => (
                            <div style={{}} key={index} className={`ov-top-left-2i ${mainImage === `.${image}` ? 'selected' : ''}`}>
                              <img style={{ width: "100%", height: "220px", objectFit: "cover", margin: "0 auto", borderRadius: "10px", transform: "scale(.8)" }}
                                src={`.${image}`}
                                alt={`ovimg${index + 2}`}
                                onClick={() => handleImageClick(image)}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div> :
                    <div className="ov-top-left" >
                     
                      <Slider {...settings2}>
                          {imgarr.map((image, index) => (
                            <div className="ov-top-left-1" >
                               <img style={{ width: '100%', height: '100%', objectFit: 'cover',transform:"scale(.9)",margin:"0 auto"}}
                                src={`.${image}`}
                                alt={`ovimg${index + 2}`}
                                onClick={() => handleImageClick(image)}
                              />
                            </div>
                          ))}
                        </Slider>
                      
                      </div>
                    }

                  <div className="ov-top-right">
                    <h4 className="ov-kalki">{title}</h4>
                    <p className="ov-discription">{discription}</p>
                    <h4 className="ov-rate">
                      <span className="ov-rate-mrp">
                        ₹<s>{mrp}</s>
                      </span>
                      <span className="ov-rate-sp">₹ {sp}</span>{" "}
                      <span className="ov-off">(30% off)</span>
                    </h4>

                    <div className="ov-flex-ratings">
                      <div className="ov-flex-ratings-a">
                        <p className="ov-rev-star">
                          <AiFillStar
                            color="white"
                            style={{ marginRight: ".3rem" }}
                          />{" "}
                          {star}
                        </p>
                        <p className="ov-flex-num">{review} reviews</p>
                      </div>
                    </div>
                    <div className="ov-colors">
                      <h2 className="ov-check-title">COLOURS</h2>
                      <div className="color-con">
                        <div className="ov-red"></div>
                        <div className="ov-blue"></div>
                        <div className="ov-green"></div>
                        <div className="ov-yellow"></div>
                        <div className="ov-pink"></div>
                      </div>
                    </div>

                    <div className="ov-checkbox">
                      <h2 className="ov-check-title">SIZE</h2>
                      <div className="ov-kg-sizes">
      <div
        className={`ov-kg-s ${selectedSize === 'XS' ? 'selected-size' : ''}`}
        onClick={() => handleSizeClick('XS')}
      >
        XS
      </div>
      <div
        className={`ov-kg-s ${selectedSize === 'S' ? 'selected-size' : ''}`}
        onClick={() => handleSizeClick('S')}
      >
        S
      </div>
      <div
        className={`ov-kg-s ${selectedSize === 'M' ? 'selected-size' : ''}`}
        onClick={() => handleSizeClick('M')}
      >
        M
      </div>
      <div
        className={`ov-kg-s ${selectedSize === 'L' ? 'selected-size' : ''}`}
        onClick={() => handleSizeClick('L')}
      >
        L
      </div>
      <div
        className={`ov-kg-s ${selectedSize === 'XL' ? 'selected-size' : ''}`}
        onClick={() => handleSizeClick('XL')}
      >
        XL
      </div>
    </div>
                    </div>
                    <div>
                      <h2 className="ov-check-title">ADD ON'S</h2>
                      <div style={{display:"flex"}} >
                      <input type="checkbox" id="mens-4" className="ov-box" />
                      <label htmlFor="mens-4" className="ov-l">
                        Unstitched Fabric
                      </label>
                      <span className="ov-999" > ₹ 999</span>
                      </div>
                      <div style={{display:"flex"}} >
                      <input type="checkbox" id="mens-2" className="ov-box" />
                      <label htmlFor="mens-2" className="ov-l">
                        Ready Size Stitching
                      </label>
                      <span className="ov-999" > ₹ 999</span>
                      </div>
                    </div>
                    <div className="ov-extra-features" style={{marginTop:".5rem"}}>
                      <div className="ov-features">
                        <BsBoxSeam className="extra-features-icon" />
                        <div>
                          <h3 style={{ fontSize: ".8rem", marginBottom: "0" }}>
                            Easy Returns
                          </h3>
                          <p style={{ fontSize: ".7rem", marginTop: "0.2rem" }}>
                            We Have 7 Days Easy Return Policy
                          </p>
                        </div>
                      </div>
                      <div className="ov-features">
                        <BsTruck className="extra-features-icon" />
                        <div>
                          <h3 style={{ fontSize: ".8rem", marginBottom: "0" }}>
                            Cash On Delivery
                          </h3>
                          <p style={{ fontSize: ".7rem", marginTop: "0.2rem" }}>
                            Pay When You Recieve The Order
                          </p>
                        </div>
                      </div>
                      <div className="ov-features" >
                        <BsBoxSeam className="extra-features-icon" />
                        <div>
                          <h3 style={{ fontSize: ".8rem", marginBottom: "0" }}>
                            Delivery Options
                          </h3>
                          <p style={{ fontSize: ".7rem", marginTop: "0.2rem" }}>
                            Free Delivery On Order Above 499/-
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ov-pincheck">
                      <input
                        className="ov-inputcheck"
                        placeholder="Enter Delivery Pincode"
                      />
                      <button className="ov-check">Check</button>
                    </div>
                    <div className="ov--btns">
                      <button
                        className="ov-addsub"
                        onClick={() => {
                          setCount((prev) => {
                            if (prev < 1) {
                              return prev + 0;
                            }
                            return prev - 1;
                          });
                        }}
                      >
                        {<AiOutlineMinus />}
                      </button>
                      <span className="ov-count">{count}</span>
                      <button
                        className="ov-addsub"
                        onClick={() => {
                          setCount((prev) => prev + 1);
                        }}
                      >
                        {<AiOutlinePlus />}
                      </button>
                      <button className="ov-addsub-a">ADD TO CART</button>
                      <button
                        className="ov-addsub-a"
                        style={{ background: "blue" }}
                      >
                        BUY NOW
                      </button>
                    </div>
                    <div className="ov-wishexplore">
                      <div className="ov-wishexplore-1  ">
                        <p className="ov-wishexplore-1p">
                          Add To Wishlist:
                        </p>
                        <p onClick={() =>handleClick()}>{isLiked ? <AiFillHeart color="blue" fontSize="2rem"/> : <AiOutlineHeart color="blue" fontSize="2rem" />}</p>
                      </div>
                      <div className="ov-wishexplore-1">
                        <p className="ov-wishexplore-1p">
                          Explore For More:
                        </p>
                        <div className="ov-explore-icons">
                          <FaInstagram
                            color="blue"
                            fontSize="1.7rem"
                            style={{ marginRight: ".9rem" }}
                            className="ov-explore-icons"
                          />
                          <BsFacebook
                            color="blue"
                            fontSize="1.7rem"
                            style={{ marginRight: ".9rem" }}
                            className="ov-explore-icons"
                          />
                          <BsWhatsapp color="blue" fontSize="1.7rem" className="ov-explore-icons" />
                        </div>
                      </div>
                    </div>
                    <div className="ov-spoffer">
                      <h2 className="ov-check-title">Special Offer</h2>
                      <p className="ov-offers">
                        <ImTicket /><span style={{marginLeft:".4rem"}}> Buy 1 Get 2</span>
                      </p>
                      <p className="ov-offers"
                      >
                        <ImTicket /><span style={{marginLeft:".4rem"}}> Use Code "HELLO" For 10% Off</span>
                      </p>
                      <p className="ov-offers"
                      >
                        <ImTicket /> <span style={{marginLeft:".4rem"}}>Coupon Discount: Rs. 140 Off (Check Cart)</span>
                      </p>
                    </div>
                    <div className="ov-countdown-div">
                      <Countdown
                        date={Date.now() + remainingTime}
                        className="ov-countdown"
                      >
                        <p className="countdown-msg">SALE ENDS</p>
                      </Countdown>
                      <p className="countdown-notation">
                        Days : Hrs : Mins : sec
                      </p>
                    </div>
                  </div>
                </div>

                {/* //bottom half */}
                <div
                  className="ov-bottom-half"
                  style={{ paddingLeft: "1rem",marginRight:".5rem" }}
                >
                  <div className="ov-specifications">
                    <h2 className="ov-titles" style={{  marginBottom: ".6rem" }}>
                      Specification
                    </h2>
                    <div className="ov-spec">
                      <div className="ov-spec-1">
                        <p style={{ marginBottom: "0", marginTop: "0.4rem" }}>
                          Weight:
                          <span style={{ marginLeft: "2rem" }}>250 Gram</span>
                        </p>
                        <p style={{ marginTop: "1rem", marginBottom: "0" }}>
                          Size:<span style={{ marginLeft: "4.2rem" }}>L</span>
                        </p>
                      </div>
                      {window.innerWidth > 992  ? 
                      <div className="ov-extra-features ov-spec-2" style={{}}>
                        <div className="ov-features" style={{ marginTop: "0" }}>
                          <BsBoxSeam
                            className="extra-features-icon"
                            style={{ marginTop: "1.1rem" }}
                          />
                          <div>
                            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>
                              Easy Returns
                            </h3>
                            <p
                              style={{ fontSize: ".8rem", marginTop: "0.2rem" }}
                            >
                              We Have 7 Days Easy Return Policy
                            </p>
                          </div>
                        </div>
                        <div className="ov-features" style={{ marginTop: "0" }}>
                          <BsTruck
                            className="extra-features-icon"
                            style={{ marginTop: "1.1rem" }}
                          />
                          <div>
                            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>
                              Cash On Delivery
                            </h3>
                            <p
                              style={{ fontSize: ".8rem", marginTop: "0.2rem",marginBottom:"0" }}
                            >
                              Pay When You Recieve The Order
                            </p>
                          </div>
                        </div>
                        <div className="ov-features" style={{ marginTop: "0" }}>
                          <BsBoxSeam
                            className="extra-features-icon"
                            style={{ marginTop: "1.1rem" }}
                          />
                          <div>
                            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>
                              Delivery Options
                            </h3>
                            <p
                              style={{ fontSize: ".8rem", marginTop: "0.2rem" }}
                            >
                              Free Delivery On Order Above 499/-
                            </p>
                          </div>
                        </div>
                      </div> : ""}
                    </div>
                  </div>

                  <div className="ov-details">
                    <h2 className="ov-titles">
                      Details and Product Description
                    </h2>
                    <p>Details and Product Description</p>
                    <p>Style No : SG117397</p>
                    <p>Color : Yellow</p>
                    <p>Fabric : Silk</p>
                    <p>Work : Print</p>
                    <p>Manufactured / Packed By : suarabhakti Goods Pvt ltd</p>
                    <p>Inclusive of all taxes</p>
                    <p>
                      Golden Yellow band jackety in tailored in silk fabric in
                      patola print
                    </p>
                    <p>
                      The Jacket is Paired with a matching silk printed kurta
                    </p>
                    <p>
                      The patola jacket is crafted in a mandarin collar with cut
                      sleeves
                    </p>
                  </div>
                  <div className="ov-care">
                    <h2
                    className="ov-titles"
                      style={{
                    
                        marginBottom: ".4rem",
                        marginTop: "3rem",
                      }}
                    >
                      Product Care
                    </h2>
                    <p className="ov-care-flex">
                      <img
                        src={one}
                        alt="icons"
                        width="40px"
                        style={{ marginRight: ".4rem" }}
                      />
                      <span> Do Not Use Bleach</span>
                    </p>
                    <p className="ov-care-flex">
                      <img
                        src={two}
                        alt="icons"
                        width="40px"
                        style={{ marginRight: ".4rem" }}
                      />
                      <span> Do Not Tumble Dry</span>
                    </p>
                    <p className="ov-care-flex">
                      <img
                        src={three}
                        alt="icons"
                        width="40px"
                        style={{ marginRight: ".4rem" }}
                      />
                      <span> Dry CleanWith Tetrachloroethylene</span>
                    </p>
                    <p className="ov-care-flex">
                      <img
                        src={four}
                        alt="icons"
                        width="40px"
                        style={{ marginRight: ".4rem" }}
                      />
                      <span>
                        {" "}
                        Iron At Maximum 110<sup>.</sup>C/230<sup>.</sup>F
                      </span>
                    </p>
                  </div>
                  <div style={{width:"100%"}}> 
                    <h2 className="ov-titles"
                      style={{
                        
                        marginBottom: ".4rem",
                        marginTop: "3rem",
                      }}
                    >
                      Reviews
                    </h2>
                    <div className="ov-reviews" >
                      <div
                        className="ov-reviews-1"
                        style={{
                          textAlign: "center",
                          marginLeft: "2rem" ,
                          marginRight: "5rem",
                        }}
                      >
                        <h3 style={{ marginBottom: "0" }}>
                          {star}
                        </h3>
                        <p className="review-num" 
                          style={{
                          
                            marginTop: ".5rem",
                            marginBottom: ".5rem",
                          
                          }}
                        >
                          {review} Reviews
                        </p>
                        
                        <p style={{ marginTop: "0" , display:"flex" }}>
                          <AiFillStar
                            color="blue"
                            className="heart-icon review-star"
                            style={{ marginRight: ".4rem" }}
                          />
                          <AiFillStar
                          className="heart-icon review-star"
                            color="blue"
                          
                            style={{ marginRight: ".4rem" }}
                          />
                          <AiFillStar
                          className="heart-icon review-star"
                            color="blue"
                            
                            style={{ marginRight: ".4rem" }}
                          />
                          <AiFillStar
                          className="heart-icon review-star"
                            color="blue"
                          
                            style={{ marginRight: ".4rem" }}
                          />
                          <AiFillStar
                          className="heart-icon review-star"
                            color="rgb(235, 232, 232)"
                          
                            style={{ marginRight: ".4rem" }}
                          />
                        </p>
                      </div> 
                      <div className="ov-reviews-2">{renderReviews()}</div>
                      
                    </div>
                  </div>
                  <div className="ov-comments">
                    <h2 className="ov-titles"
                      style={{
                        
                        marginBottom: "2rem",
                        marginTop: "3rem",
                      }}
                    >
                      Comments
                    </h2>
                    <div style={{ position: "relative" }}>
                      <div>
                        <Comments />
  
                      </div>
                      {/* <button
                        style={{
                          width: "150px",
                          height: "35px",
                          position: "absolute",
                          bottom: "0rem",
                          right: "10rem",
                          border: "none",
                          borderRadius: "10px",
                          background: "blue",
                          color: "white",
                        }}
                      >
                        See More <BsChevronDown />
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="ov-smproducts" style={{width:"100%",overflow:"hidden"}}>
        <h2 className="ov-titles"
          style={{  marginBottom: "2rem", marginTop: "3rem",marginLeft:"1.5rem" }}
        >
          SIMILAR PRODUCTS
        </h2>
        <Similarproducts /> 
      </div>
      <div className="ov-rviewed" style={{width:"100%",overflow:"hidden"}}>
        <h2 className="ov-titles"
          style={{  marginBottom: "2rem", marginTop: "3rem" ,marginLeft:"1.5rem"}}
        >
          RECENTLY VIEWED
        </h2>
        <Recentlyviewed />
      </div>
    </>
  );
};

export default Trendoverview;
