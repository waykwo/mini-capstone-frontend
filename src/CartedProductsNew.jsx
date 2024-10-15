import axios from "axios";

export function CartedProductsNew({ product, onAddToCart }) {
  const handleAddToCart = (event) => {
    console.log("hello from handleSubmit");
    event.preventDefault()
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/carted-products.json", params).then(response => {
      console.log(response.data);
    })

  }

  return (
    <div>
      <p>How many would you like to add to your cart?</p>
      <form onSubmit={handleAddToCart}>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" />
        <input
          type="hidden"
          name="product_id"
          defaultValue={product.id}
        />
        <button>Confirm</button>
      </form>
    </div>
  )
}
