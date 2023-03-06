import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

// import DotLoader from "react-spinners/DotLoader ";
import { DotLoader } from "react-spinners";

// IMPORTAR LA  DB 
import { db } from "../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore"


const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {

  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {

    const itemCollection = collection( db , "products" )

    if( categoryName ){

      const q =  query( itemCollection, where( "category", "==", categoryName ) )

      getDocs(q)
      .then( (res)=> {
        const products = res.docs.map( product => {
            return {
              ...product.data(),
              id: product.id
            }
        })

        setItems( products )
      })
      .catch((err)=> console.log("error: " + err) )



    }else{

      getDocs(itemCollection)
      .then( (res)=> {
        const products = res.docs.map( product => {
            return {
              ...product.data(),
              id: product.id
            }
        })

        setItems( products )
      })
      .catch((err)=> console.log("error: " + err) )

    }

    

   
  }, [categoryName]);


  // useEffect(() => {
  //   const productsFiltered = products.filter(
  //     (product) => product.category === categoryName
  //   );

  //   const task = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(categoryName ? productsFiltered : products);
  //     }, 1000);

  //     // reject(errorMessage);
  //   });

  //   task
  //     .then((res) => {
  //       setItems(res);
  //     })
  //     .catch((error) => {
  //       console.log("aca se rechazo: ", error);
  //     });
  // }, [categoryName]);

  return (
    <div>
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

    </div>
  );
};

export default ItemListContainer;
