import { useLoaderData } from "react-router-dom"

export function OrderShow() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div>
      {/* <div>
        <p>Order: {JSON.stringify(order)}</p>      
      </div> */}
      <div>
        <ul>
          <li>ID: {order.id}</li>
          <li>Subtotal: {order.subtotal}</li>
          <li>Tax: {order.tax}</li>
          <li>Total: {order.total}</li>
          <li>Date and Time: {order.order_datetime}</li>
          <li>Items:</li>
          {/* <li>Product: {order.carted_products[0].product.name}</li> */}
          {order.carted_products.map(cp => (
            <ul key={cp.id}>
              <li>Product: {cp.product.name}</li>
              <li>Quantity: {cp.quantity}</li>
              <li>Price: {cp.product.price}</li>
              <hr />
            </ul>
          ))}
        </ul>
      </div>
    </div>
  )
}