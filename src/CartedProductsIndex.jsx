// This is "My Cart"
import { useLoaderData, useNavigate } from "react-router-dom";

export function MyCart() {
  const cartedProducts = useLoaderData();
  console.log(cartedProducts);

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
    </div>
  )
}