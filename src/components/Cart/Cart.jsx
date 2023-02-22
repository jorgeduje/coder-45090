import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

import Swal from "sweetalert2";

import NoData from "../../assets/images/noData.svg";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  console.log(cart);

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado con exito!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Carrito NO eliminado", "", "info");
      }
    });
  };

  // if(cart.length < 1){
  //   return <img src={NoData} alt="" />
  // }

  return (
    <div className="cart-container">
      {cart.length < 1 ? (
        <img src={NoData} alt="" />
      ) : (
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
      )}

      <div className="cart-info">
        <h2>Descripcion del carrito:</h2>
        <h3>Cantidad de productos: </h3>
        <h3>
          Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}
        </h3>
        <h3>Descuento: </h3>
        <h3>Precio final: </h3>

        {
          cart.length > 0 && <div className="btn-cart">
            <Button variant="contained">Comprar</Button>
            <Button onClick={() => clearCartAlert()} variant="contained">
              Vaciar carrito
            </Button>
          </div>
        }

        <h1>El total del carrito es ${getTotalPrice()}</h1>
      </div>
    </div>
  );
};

export default Cart;
