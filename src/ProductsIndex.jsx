import { useState } from "react";


export function ProductsIndex({ products, onShow, onShowAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <h1>All products</h1>
      <label htmlFor="search_products">Search</label>
      <input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <hr />
      {products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.descripiton}</p>
          <img src={product.images[0] && product.images[0].url} />
          <div>
            <button onClick={() => onShow(product)}>More info</button>
            <button onClick={() => onShowAddToCart(product)}>Add To Cart</button>
            <button onClick={() => onShowEditProduct(product)}>Edit Product</button>
          </div>
        </div>
      ))}
    </div>
  );
}