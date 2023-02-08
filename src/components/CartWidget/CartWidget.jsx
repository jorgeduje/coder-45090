import { Link } from "react-router-dom";

import "./CartWidget.css";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#7F669D",
          }}
        />
        <div className="bubble-counter">
          <span>12</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
