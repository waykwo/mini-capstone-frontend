// This is "My Cart"
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export function MyCart() {
  const cartedProducts = useLoaderData();
  
  const checkout = () => {
    console.log("Checkout");
    axios.post("http://localhost:3000/orders.json").then(response => {
      console.log(response.data);
    })
  }

  return (
    <div>
      {cartedProducts.map(cp => (
        <div key={cp.id}>
          {/* <p>Product ID: {JSON.stringify(cp.product)}</p> */}
          <p>Product: {cp.product.name}</p>
          <p>Price: {cp.product.price}</p>
          <p>Quantity: {cp.quantity}</p>
          <hr />
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  )
}