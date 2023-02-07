import CartWidget from "../CartWidget/CartWidget";
import { Navbar } from "../Navbar/Navbar";

import "./Header.css"

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "10vh",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "10px 0px 10px 1px #7F669D",
      }}
    >
      <div className="container-logo">
        <h4 className="logo-navbar">Comision: 45090</h4>
      </div>
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
