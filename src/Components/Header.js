import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

export const Header = () => {
 
  const [btnValue, setBtnValue]=useState("Login")

    return (
      <div className="header" style={{ backgroundColor: "#DCD7FC" }}>
        <img
          className="logo"
          src={LOGO_URL}
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <button onClick={()=>{
              btnValue==="login"
              ?setBtnValue("logout"): setBtnValue("login")
            }}>{btnValue}</button>
          
          </ul>
        </div>
      </div>
    );
  };

export default Header;