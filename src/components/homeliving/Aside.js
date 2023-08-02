import React from "react";
import Slider from "@mui/material/Slider";
import "./Aside.css"

const Aside = () => {

  const [range, setRange] = React.useState([100, 1]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const numFormatter =(num) => {
    return num + " Rs"
  }
  return (
    <div>
      <h1 className="mens-aside-title">Home and Living</h1>
      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Style</h2>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-a" className="mens-box" />
        <label className="mens-label" htmlFor="mens-a" >Home Decor (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-b" className="mens-box" />
        <label className="mens-label" htmlFor="mens-b" >Vases (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-c" className="mens-box" />
        <label className="mens-label" htmlFor="mens-c" >Kitchen & Dining (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-d" className="mens-box" />
        <label className="mens-label" htmlFor="mens-d" >Lamps & Lightning (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-e" className="mens-box" />
        <label className="mens-label" htmlFor="mens-e" >Festive Decor (131)</label>
        </div>
        <div style={{ display: "flex",alignItems:"center", marginBottom: ".3rem" }}>
        <input type="checkbox" id="mens-f" className="mens-box" />
        <label className="mens-label" htmlFor="mens-f" >Candles (131)</label>
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
        <h2 className="mens-check-title">Colors</h2>
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
    </div>
  );
};

export default Aside;
