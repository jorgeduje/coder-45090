import axios from "axios";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isCreated, setIsCreated] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data));

    // axios.get("http://localhost:5000/products/2")
    //   .then( res => console.log(res.data) )

    setIsCreated(false)
  }, [isCreated]);

  const createProduct = () => {
    const newProduct = {
      title: "zapatillas viejasss",
      price: 12,
      stock: 4,
      description: "Zapatillas de ultima generacion para el deporte",
      category: "urbanas",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669430220/rtokwmt3j03bblbfhwhb.jpg",
    };

    axios.post("http://localhost:5000/products", newProduct);

    setIsCreated(true)
  };

  const updateProduct = ()=>{

    axios.patch("http://localhost:5000/products/2", {price: 100})

  }

  const deleteProduct = ()=>{

    axios.delete("http://localhost:5000/products/2")

  }

  // Create Read Update Delete ---> CRUD


  return (
    <div>
      {products.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}

      <button onClick={createProduct}>Agregar producto</button>
      <button onClick={updateProduct}>Modificar producto</button>
      <button onClick={deleteProduct}>Eliminar producto</button>

    </div>
  );
};

export default ItemListContainer;
