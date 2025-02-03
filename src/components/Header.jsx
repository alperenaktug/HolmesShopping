import { useState } from "react";
import "../css/Header.css";
import { GrBasket } from "react-icons/gr";
import { BsLightningCharge } from "react-icons/bs";
import { Icon } from "@mui/material";

function Header() {
  // Tema durumunu tutmak için state oluşturuyoruz
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Temaya göre arka plan ve metin rengini belirliyoruz
  const themeStyles = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#333",
  };

  return (
    <div
      className="header"
      style={{
        ...themeStyles,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.jpg" alt="" />
        <p className="logo-text">Holmes Shopping</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Searching"
          style={{ backgroundColor: isDarkTheme ? "default" : "#f0f0f0" }}
        />
        <div className="flex-row">
          {/* Tema değiştirme butonu */}
          <Icon onClick={toggleTheme}>
            {isDarkTheme ? (
              <BsLightningCharge />
            ) : (
              <BsLightningCharge className="icon" />
            )}
          </Icon>

          <GrBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
