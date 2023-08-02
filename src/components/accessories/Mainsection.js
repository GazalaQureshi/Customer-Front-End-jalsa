import React,{useState,useEffect} from 'react'
import "./Mainsection.css"
import { AiOutlineHeart,AiFillStar, AiFillHeart} from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { useGlobalContext } from '../../context'

const Mainsection = () => { 

    const {acsdata} = useGlobalContext() 
    
    ////////pagination///////////////////
    
    const [page,setPage] = useState(0)
  
    const [items,setItems] = useState([])
  
  const Paginate =(data) => {
    const itemsPerPage =12
    const numberOfPages = Math.ceil(data.length / itemsPerPage)

    const newItems = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return data.slice(start, start + itemsPerPage)
    })
    return newItems
  }
  
  const data = Paginate(acsdata)
  useEffect(() => {
    setItems(data[page])
  }, [page])
  

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  
  }
  const handlePage = (index) => {
    setPage(index)
  }
    /////////////////PAGINATION ENDS////////////////////
    function toggle(id) {
      setItems(prevItem => {
          return items.map((singleitem) => {
              return singleitem.id === id ? {...singleitem, on: !singleitem.on} : singleitem
          })
      })
  }

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
        <div>
            { showsection ? 
            <div className='acc-sort-sec'>
            <label htmlFor="cars" className="mens-sort">Sort:</label>

            <select name="cars" id="cars" className='mens-popular'>
                <option value="volvo">Popular</option>
                <option value="saab">Branded</option>
                <option value="mercedes">Trending</option>
                <option value="audi">Sales</option>
            </select>
            </div> : ""}
            {!showsection ? 
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <p style={{margin:"0"}}>Sort</p>
              <p style={{margin:"0"}}>filter</p>  
            </div>  : ""
            }
            <div className='acc-detail' >
                {
                    items.map((m) => {
                        const { id,img,title,discription,mrp,sp,star,review,on } = m

                        return (<div className='acc-info' key={id}>

                            <div className='acc-img-sec'>
                            
                            
                           <div className='img-div'><Link to={`/accessories/${id}`} ><img src={img} alt="iiimg" style={{width:"100%",height:"100%",objectFit:"cover"}} /></Link></div>
                            <button onClick={() => toggle(id)} className='mens-img-like'>{on ? <AiFillHeart color='blue' className='heart-icon'/> : <AiOutlineHeart color='blue' className='heart-icon'/>}</button>
                            </div>
                            <div className='acc-detail-sec'>
                                <h4 className='acc-kalki'>{title}</h4>
                                <p className='acc-discription'>{discription}</p>
                                <h4 className='acc-rate'><span className='acc-rate-mrp'>₹<s>{mrp}</s></span><span className='acc-rate-sp'>₹ {sp}</span> </h4>
                                
                                <div className='acc-flex-ratings' stye={{alignItems:"center"}}>
                                    <div className='acc-flex-ratings-a'>
                                    <p className='acc-rev-star'><AiFillStar color="white"/> {star}</p>
                                    <p className='acc-flex-num'>{review}  reviews</p>
                                    </div>
                                    <p className='acc-flex-icons'><BsFillShareFill color=" blue" className='share-icon'/></p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className='btn-container'>
            
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              <IoIosArrowForward/>
            </button>
          </div>
        </div>
    )
}

export default Mainsection


// return (<div className='single-men'>
//                         <div className='img-sec'>
//                             <img src={img} alt="iiimg" className='img-singles'/>
//                             <h2 className='img-like'><Link style={{textDecoration:"none",color:"inherit"}} to="/wishlist"><AiOutlineHeart color='blue'/></Link></h2>
//                         </div>
//                         <div className='img-details'>
//                             <h4 className='kalki'>Kalki</h4>
//                             <p className='para'>Silk Patola Kurta Set</p>
//                             <h4 className='img-rate'>₹<s>1,500.00</s>  ₹ 1,000.00</h4>
//                             <div className='flex-rat'>
//                                 <p className='rating-num'>3,456  reviews</p>
//                                 <p className='rating-icon'><BsFillShareFill color=" blue" /></p>
//                             </div>
//                         </div>
//                         </div>)