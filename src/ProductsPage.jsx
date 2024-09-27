import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/products.json").then(response => {
      // console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
  // const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/products.json", params).then(response => {
      setProducts([...products, response.data]);
      successCallback();
    })
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate}/>
      <ProductsIndex products={products}/>
    </main>
  );
}