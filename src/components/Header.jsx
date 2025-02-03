import "../css/Header.css";

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
      <div>
        <input className="search-input" type="text" placeholder="Searching" />
      </div>
    </div>
  );
}

export default Header;
