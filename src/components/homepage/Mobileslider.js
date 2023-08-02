import React from 'react'
import Slider from 'react-slick';
import "./Mobileslider.css"
import { Link } from 'react-router-dom';

const Mobileslider = () => {
    const data = [
        {
          id: 1,
          img: "./mobileslider/pret.png",
          title: "Salwar Kameez",
          url:"/trend"
        },
       
       
        {
          id: 4, 
          img:  "./mobileslider/blouse.png",
          title: "Blouse",
          url:"/trend"
        },{
          id: 5,
          img:  "./mobileslider/mens.png",
          title:"Mens",
          url:"/mens"
        },
        {
          id: 6,
          img:  "./mobileslider/kb.png",
          title: "Kids boys",
          url:"/kids-boys"
        },
        {
          id: 7,
          img:  "./mobileslider/kg.png",
          title: "Kids Girls",
          url:"kids-girls"
        },
        {
          id: 8,
          img:  "./mobileslider/hl.png",
          title: "Home & Living",
          url:"/home-living"
        }, {
            id: 2,
            img:  "./mobileslider/trend.png",
            title: "Kurtis",
            url:"/trend"
          }, {
            id: 3,
            img:  "./mobileslider/pret2.png",
            title: "Pret",
            url:"/trend"
          },
      ];
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: false,
        pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
       
      };
  return (
    <div style={{marginTop:"2rem",marginLeft:".5rem",marginRight:".5rem"}}>

    
<Slider {...settings} >
        {data.map((single) => {
          const { img, title,url } = single;
          return (
            <>
            <div key={img} className='mslider-img' style={{ margin: 'auto', borderRadius: '50%'  }}>
            <Link to ={url} >

            
              <img
                src={img}
                className=""
                alt="trendimg"
                style={{ borderRadius: '50%', objectFit: 'cover',width:"100%",height:"100%"}}
              />
              </Link>
              
            </div>
            <p className='mslider-text' style={{textAlign:"center",fontWeight:"bold"}}> {title}</p>
          
            </>);
        })}
      </Slider>
    </div>
    
  )
}

export default Mobileslider