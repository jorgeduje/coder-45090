import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css"

import Swal from 'sweetalert2'

const ItemDetail = ({ product }) => {

  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = ( cantidad ) => {

    const obj = {
      ...product,
      quantity: cantidad
    }

    addToCart( obj )

    Swal.fire({
      icon: 'success',
      title: 'Se agrego su producto al carrito',
    })
  };

  const quantity = getQuantityById(product.id)

  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
          <h2 style={{fontFamily: "monospace"}}><span style={{fontSize:"23px"}}>Nombre:</span> {product.title}</h2>
          <h2 style={{fontFamily: "monospace"}}><span style={{fontSize:"23px"}}>Descripcion:</span> {product.description}</h2>
          <h2 style={{fontFamily: "monospace"}}><span style={{fontSize:"23px"}}>Precio:</span> ${product.price}.-</h2>

        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  );
};

export default ItemDetail;
