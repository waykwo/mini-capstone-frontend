import { useLoaderData } from "react-router-dom"

export function OrderShow() {
  const order = useLoaderData();

  return (
    <div>
      <p>Order: {JSON.stringify(order)}</p>
    </div>
  )
}