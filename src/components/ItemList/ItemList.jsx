import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "steelblue",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "60vh",
      }}
    >
      {items.map((element) => {
        return <ProductCard element={element} key={element.id} />;
      })}
    </div>
  );
};

export default ItemList;
