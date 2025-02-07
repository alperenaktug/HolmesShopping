import "../css/Header.css";
import { GrBasket } from "react-icons/gr";
import { BsLightningChargeFill } from "react-icons/bs";

import { BsLightningCharge } from "react-icons/bs";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.background = "black";
      root.style.color = "#fff";
    } else {
      root.style.background = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.jpg" alt="" />
        <p className="logo-text">Holmes Shopping</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Searching" />
        <div>
          {theme ? (
            <BsLightningChargeFill className="icon" onClick={changeTheme} />
          ) : (
            <BsLightningCharge className="icon" onClick={changeTheme} />
          )}
          <GrBasket className="icon" />
          <FaUserCircle className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
