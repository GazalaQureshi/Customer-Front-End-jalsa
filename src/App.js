import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from './components/header/Header';
import Content from './components/homepage/Content';
import Footer from './components/footer/Footer';
import Login from './components/loginform/Login';
import Createaccount from './components/Createaccount/Createaccount';
import Mens from './components/mens/Mens'
import Forgetpass from './components/forgetpassword/Forgetpass';
import Loginotp from './components/otp/Loginotp';
import Enterotp from './components/otp/Enterotp';
import Newpassword from './components/new_password/Newpassword';
import Wishlist from './components/wishlist/Wishlist';
import Kidsboys from './components/kidsboys/Kidsboys';
import Kidsgirls from './components/kidsgirls/Kidsgirls';
import Homeliving from './components/homeliving/Homeliving';
import Trend from './components/trend/Trend';
import Accessories from './components/accessories/Accessories';

//overviews
import Mensoverview from './components/overview/Mensoverview';
import Trendoverview from './components/overview/Trendoverview';
import Kboverview from './components/overview/Kboverview';
import Kgoverview from './components/overview/Kgoverview';
import Hloverview from './components/overview/Hloverview';
import Acsoverview from './components/overview/Acsoverview';

//after 21
import Cart from './components/cart/Cart';
import Promocode from "./components/promocode/Promocode"
import Checkout from "./components/checkout/Checkout"
import Setprofile from "./components/set profile/Setprofile"
import Orderhistory from "./components/order-history/Orderhistory"
import Savedcard from "./components/saved-card/Savedcard"
import Addcard from "./components/add-card/Addcart"
import Offers from "./components/offers/Offers"
import Savedaddress from "./components/saved-address/Savedaddress"
import Addaddress from "./components/add-address/Addadress"
import Successorder from "./components/successfully-ordered/Successorder"
import Profileupdate from "./components/profile-update/Profileupdate"
import Personaldetails from './components/profile/Personaldetails';
 

//useContext
import Conpro from './context';
import Profile from "./components/profile/Profile"
import Notfound from './components/notfound/Notfound';



function App() {

 
  return (
    <BrowserRouter>
      
      <div className="app-container" style={{maxWidth:"1650px",margin:"0 auto"}}>
      
        <div style={{marginBottom:"2rem"}}>
        <Header/>
        </div>
      
      <Conpro>
      <Routes>
      <Route path="/profile" element={<Profile/>}/>
        <Route exact path="/" element={<Content/>} />
        <Route exact path="/mens" element={<Mens/>} />
        <Route exact path="/wishlist" element={<Wishlist/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Createaccount/>} />
        <Route exact path="/forget-password" element={<Forgetpass/>} /> 
        <Route exact path="/enter-otp" element={<Enterotp/>} />
        <Route exact path="/login-otp" element={<Loginotp/>} />
        <Route exact path="/new-password" element={<Newpassword/>} />
        <Route exact path="/accessories" element={<Accessories/>} />
        <Route exact path="/trend" element={<Trend/>} />
        <Route exact path="/kids-boys" element={<Kidsboys/>} />
        <Route exact path="/kids-girls" element={<Kidsgirls/>} />
        <Route exact path="/home-living" element={<Homeliving/>} />
        

        {/* //overviews */}
        <Route path="/mens/:id" element={<Mensoverview/>}/>
        <Route path="/trend/:id" element={<Trendoverview/>} />
        <Route path="/kids-boys/:id" element={<Kboverview/>} />
        <Route path="/kids-girls/:id" element={<Kgoverview/>} />
        <Route path="/home-living/:id" element={<Hloverview/>} />
        <Route path="/accessories/:id" element={<Acsoverview/>} />

        {/* Routes after 20 */}
        <Route path="/cart" element={<Cart/>} />
        <Route path="/promocode" element={<Promocode/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/set-profile" element={<Setprofile/>} />
        <Route path="/update-details" element={<Personaldetails/>} />
        <Route path="/order-history" element={<Orderhistory/>} />
        <Route path="/saved-card" element={<Savedcard/>} />
        <Route path="/add-card" element={<Addcard/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/saved-address" element={<Savedaddress/>} />
        <Route path="/add-address" element={<Addaddress/>} />
        <Route path="/success-order" element={<Successorder/>} />
        <Route path="/profile-update" element={<Profileupdate/>} />

        <Route path="/salwar-kameez" element={<Notfound/>} />
        <Route path="/kurtis" element={<Notfound/>} />
        <Route path="/pret" element={<Notfound/>} />
        <Route path="/blouses" element={<Notfound/>} />
        <Route path="/wedding" element={<Notfound/>} />
        <Route path="/unstitched" element={<Notfound/>} />
        <Route path="/sale" element={<Notfound/>} />
      </Routes>
      
      </Conpro>
      <Footer/>
      </div>
      
    </BrowserRouter>  
      
    
  );
}

export default App;
