import "./CartWidget.css"

import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = () => {
  return (
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
  )
}

export default CartWidget