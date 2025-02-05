import "../css/Header.css";
import { GrBasket } from "react-icons/gr";
import { BsLightningChargeFill } from "react-icons/bs";

import { BsLightningCharge } from "react-icons/bs";

function Header() {
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
        <div className="flex-row">
          <BsLightningChargeFill className="icon" />
          <BsLightningCharge className="icon" />
          <GrBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
