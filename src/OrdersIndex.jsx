// This is Order History
import { useLoaderData } from "react-router-dom";

export function OrdersIndex() {
  const orders = useLoaderData();
  console.log(orders);

  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>
          <p>Order: {JSON.stringify(order)}</p>
          {/* <p>Product: {order.product.name}</p>
          <p>Price: {order.product.price}</p>
          <p>Quantity: {order.quantity}</p> */}
          <hr />
        </div>
      ))}
    </div>
  )
}