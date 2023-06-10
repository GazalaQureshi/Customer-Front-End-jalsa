import React from "react";
import Slider from "@mui/material/Slider";
import "./Aside.css"

const Aside = () => {

  const [range, setRange] = React.useState([100, 1]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const numFormatter = (num) => {
    return num + " Rs"
  }
  return (
    <div>
      <h1 className="mens-aside-title">WOMEN</h1>
      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop Accessories</h2>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-a" className="mens-box" />
        <label className="mens-label" htmlFor="mens-a" >Bengals (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-b" className="mens-box" />
        <label className="mens-label" htmlFor="mens-b" >Neclace (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-c" className="mens-box" />
        <label className="mens-label" htmlFor="mens-c" >Earings (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-d" className="mens-box" />
        <label className="mens-label" htmlFor="mens-d" >Bags (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-e" className="mens-box" />
        <label className="mens-label" htmlFor="mens-e" >Footwear (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-f" className="mens-box" />
        <label className="mens-label" htmlFor="mens-f" >Rings (131)</label>
        </div>
      </div>

      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Occassion</h2>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-g" className="mens-box" />
        <label className="mens-label" htmlFor="mens-g" >Wedding</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-h" className="mens-box" />
        <label className="mens-label" htmlFor="mens-h" >Casual</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-i" className="mens-box" />
        <label className="mens-label" htmlFor="mens-i" >Bridal</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-j" className="mens-box" />
        <label className="mens-label" htmlFor="mens-j" >Party</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-k" className="mens-box" />
        <label className="mens-label" htmlFor="mens-k" >Qork</label>
        </div>


      </div>

      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Look</h2>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-l" className="mens-box" />
        <label className="mens-label" htmlFor="mens-l" >Designer</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-m" className="mens-box" />
        <label className="mens-label" htmlFor="mens-m" >Traditional</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-n" className="mens-box" />
        <label className="mens-label" htmlFor="mens-n" >Fashion</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-o" className="mens-box" />
        <label className="mens-label" htmlFor="mens-o" >Contemporary</label>
        </div>


      </div>

      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Discount</h2>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-p" className="mens-box" />
        <label className="mens-label" htmlFor="mens-p" >sale</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-q" className="mens-box" />
        <label className="mens-label" htmlFor="mens-q" >Upto 20% off</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-r" className="mens-box" />
        <label className="mens-label" htmlFor="mens-r" >Upto 30% off</label>
        </div>
      </div>

      <div className="mens-colors">
        <h2 className="mens-check-title">colors</h2>
        <div className="color-con">


          <div className="red"></div>
          <div className="blue"></div>
          <div className="green"></div>
          <div className="yellow"></div>
          <div className="pink"></div>
        </div>
      </div>

      <div className="price">
        <h2 className="mens-price-title">Price</h2>
        <Slider value={range} onChange={handleChanges}  min={750 }
  max={7000} valueLabelDisplay="on" className="mens-price-slider" step={10}  valueLabelFormat={numFormatter} sx={{width:`80%`}}/>
      </div>

      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Rating</h2>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-s" className="mens-box" />
        <label className="mens-label" htmlFor="mens-s" >1.0 to 5.0</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-t" className="mens-box" />
        <label className="mens-label" htmlFor="mens-t" >2.0 to 5.0</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-u" className="mens-box" />
        <label className="mens-label" htmlFor="mens-u" >3.0 to 5.0</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-v" className="mens-box" />
        <label className="mens-label" htmlFor="mens-v" >4.0 to 5.0</label>
        </div>

      </div>
    </div >
  );
};

export default Aside;
