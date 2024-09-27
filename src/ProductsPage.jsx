import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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
    });
  }

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate}/>
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <ProductsShow product={currentProduct} />
      </Modal>
    </main>
  );
}