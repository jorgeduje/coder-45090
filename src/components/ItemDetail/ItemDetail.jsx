import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

  const agregarAlCarrito = (cantidad) => {
    const obj = {
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: cantidad,
    };

    console.log(obj);
  };

  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
      </div>

      <ItemCount
        stock={product.stock}
        // initial={1}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
