import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

// import DotLoader from "react-spinners/DotLoader ";
import { DotLoader } from "react-spinners";

const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [isRed, setIsRed] = useState(false);

  // const [show, setShow] = useState(false)

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.category === categoryName
    );

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products);
      }, 1000);

      // reject(errorMessage);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("aca se rechazo: ", error);
      });
  }, [categoryName]);

  // IF CON RETURN TEMPRANO
  // if(items.length < 1){
  //   return <h1>Cargando.....</h1>
  // }

  return (
    <div>
      {/* style={{ backgroundColor: isRed ? "red" : "blue" }} */}
      <button className={isRed ? "btn-red" : "btn-blue"} 
      onClick={()=>setIsRed(!isRed)}
      >
        {isRed ? "Estoy en rojo" : "Estoy en azul"}
      </button>
      {items.length < 1 ? (
        <DotLoader
          color={"purple"}
          cssOverride={styles}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}

      {/* {
         items.length < 1 && <h1>Cargando....</h1> 
      }
      <ItemList items={items} /> */}
    </div>
  );
};

export default ItemListContainer;
