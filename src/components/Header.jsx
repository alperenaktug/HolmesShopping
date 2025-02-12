import "../css/Header.css";
import { GrBasket } from "react-icons/gr";
import { BsLightningChargeFill } from "react-icons/bs";

import { BsLightningCharge } from "react-icons/bs";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);
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
      <div className="flex-row" onClick={() => navigate("/")}>
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
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <GrBasket style={{ marginRight: "6px" }} className="icon" />
          </Badge>

          <FaUserCircle style={{ marginLeft: "15px" }} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
