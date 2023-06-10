import React,{useState,useEffect} from 'react'
import Main from './Main'
import Trending from './Trending'
import Deals from './Deals'
import Featured from './Featured'
import Recomended from './Recomended'
import Editors from './Editors'
import Arrival from './Arrival'
import Bestseller from './Bestseller'
import Advertisement from './Advertisement'
import Mobileslider from './Mobileslider'



const Content = () => {

  const [mslider,setMslider] = useState(false)
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setMslider(true)
        }
        else {
            setMslider(false)
        }
            
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [window.innerWidth]);
  return (
    <div>
    {
      mslider && <Mobileslider/>
    }
      <Main />
      <Trending />
      <Deals />
      <Featured />
      <Recomended />
      <Editors />
      <Arrival />
      <Bestseller />
      <Advertisement />



    </div>
  )
}

export default Content