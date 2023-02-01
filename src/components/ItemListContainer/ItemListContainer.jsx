import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const errorMessage = "El servidor esta caido"
  
   useEffect( ()=>{
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 500);
      // reject(errorMessage);
    });
  
    task
      .then((res) => {
        setItems( res );
      })
      .catch( (error)=> {
        console.log("aca se rechazo: ", error)
      });
   }, [])

   console.log("mis items son: ",  items )

  return (
    <>
      <ItemList items={ items } />
    </>
  );
};

export default ItemListContainer;
