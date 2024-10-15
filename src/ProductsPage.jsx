import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
// import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { CartedProductsNew } from "./CartedProductsNew";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [isAddToCartShowVisible, setIsAddToCartShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/products.json").then((response) => {
      // console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
    setIsAddToCartShowVisible(false);
  };

  const handleShowAddToCart = (product) => {
    console.log("handleAddToCart");
    setIsAddToCartShowVisible(true);
    setCurrentProduct(product);
  }

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          };
        })
      );
      successCallback();
      handleClose();
    })
  }
  
  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/products/${id}.json`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
      handleClose();
    });
  };
  
  useEffect(handleIndex, []);
  
  return (
    <main>
    {/* <ProductsNew onCreate={handleCreate}/> */}
    <ProductsIndex
      products={products}
      onShow={handleShow}
      onShowAddToCart={handleShowAddToCart}
      />
    <Modal show={isProductsShowVisible} onClose={handleClose}>
      <h1>{currentProduct.name}</h1>
      <ProductsShow
        product={currentProduct}
        // onAddtoCart={handleAddToCart}
        onUpdate={handleUpdate}
        onDestroy={handleDestroy}
        />
    </Modal>
    <Modal show={isAddToCartShowVisible} onClose={handleClose}>
      <h1>{currentProduct.name}</h1>
      <CartedProductsNew
        product={currentProduct}
        onAddtoCart={handleShowAddToCart}
        />
    </Modal>
    </main>
  );
}


  // This is used if you don't put the ProductsNew on a separate page
  // const handleCreate = (params, successCallback) => {
  // // const handleCreate = (params) => {
  //   console.log("handleCreate", params);
  //   axios.post("http://localhost:3000/products.json", params).then((response) => {
  //     setProducts([...products, response.data]);
  //     successCallback();
  //   });
  // }

  // const handleAddToCart = (addToCartEvent, params) => {
//   console.log("Adding to cart");
//   console.log(addToCartEvent.target);
//   onAddtoCart(product.id, params)
//   axios.post("http://localhost:3000/carted-products.json", params).then(response => {
//     console.log(response.data);
//   })
// }

// const handleUpdateImage = (id, params, successCallback) => {
//   console.log("handleUpdate", params);
//   axios.patch(`http://localhost:3000/images/${id}.json`, params).then((response) => {
//     setProducts(
//       products.map((product) => {
//         if (product.id === response.data.id) {
//           return response.data;
//         } else {
//           return product;
//         };
//       })
//     );
//     successCallback();
//     handleClose();
//   });
// };

// const handleDestroy = (id) => {
//   console.log("handleDestroy", id);
//   axios.delete(`http://localhost:3000/products/${id}.json`).then(() => {
//     setProducts(products.filter((product) => product.id !== id));
//     handleClose();
//   });
// };