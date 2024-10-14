export function CartedProductsNew({ product }) {
  const handleSubmit = (event) => {
    console.log("hello from handleSubmit");
    event.preventDefault()
  }

  return (
    <div>
      <p>Add to Cart</p>
      <form onSubmit="{handleSubmit}">
        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" />
        <button>Confirm</button>
      </form>
    </div>
  )
}
