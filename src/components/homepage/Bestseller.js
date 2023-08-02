import React from 'react'
import Slider from 'react-slick';

const Bestseller = () => {

    const data = [
        
        {
          id: 3,
          img: "./images/recomended/r3.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text" 
        },
        {
          id: 4,
          img: "./images/recomended/r4.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },
        {
          id: 1,
          img: "./images/recomended/r1.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },
        {
          id: 2,
          img: "./images/recomended/r2.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },{
          id: 5,
          img: "./images/recomended/r1.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },
        {
          id: 6,
          img: "./images/recomended/r2.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },
        {
          id: 7,
          img: "./images/recomended/r3.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },
        {
          id: 8,
          img: "./images/recomended/r4.png",
          title: "Blue Skill Kurta Set",
          subtitle:" Discription text"
        },
      ];
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };

  return (
    <div style={{ padding: `${window.innerWidth > 768 ? "0 2rem" : "0 .5rem"}` }}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.2rem",marginBottom:"1rem" }}>
      <h1  className='hp-title'>Bestseller</h1>
      <button className="vbtn">View All</button>
    </div>
    <Slider {...settings}>
      {
        data.map((single) => {
          const { img, title,subtitle } = single
          return (
            <div>
            <div  style={{margin:"0 .5rem"}}>
                <img src={img} className="" alt="trendimg" style={{ width: "100%", borderRadius: "0px", marginBottom: '-40px', position: 'relative', zIndex: '-1' }} />
                <div style={{ width: "100%", background: "rgb(240,240,240)", border: "1px solid rgb(240,240,240)" }}>
                  <h1  className="recom-title" style={{ textAlign: "center", marginTop: ".5rem", width: '100%', marginBottom: ".2rem" }}>{title}</h1>
                  <h2 className="recom-text" style={{ textAlign: "center", marginTop: ".2rem", marginBottom: ".6rem" }}>{subtitle}</h2>
                </div>

              </div>
              </div>
          )
        })
      }
    </Slider>
    
  </div>
  )
}

export default Bestseller


// <div style={{border:"1px solid red"}}>
// {/* <img src={img} className='hp-bestseller-img' alt="trendimg" style={{ width: "90%",  borderRadius: "10px" }} /> */}
// <div className='hp-bestseller-img'>
// <img src={img}  alt="trendimg" style={{objectFit:"cover",height:"100%",width:"90%", borderRadius: "10px" }} />
// </div>
// <div style={{width: "90%",background:"rgb(240,240,240)",border:"1px solid rgb(240,240,240)"}}>
// <h1 style={{ textAlign: "center" ,marginTop:".5rem",marginBottom:".2rem",fontSize:".9rem"}}>{title}</h1>
// <h2 style={{ textAlign: "center" ,marginTop:".2rem",marginBottom:".6rem",fontSize:".7rem"}}>{subtitle}</h2>
// </div>

// </div>