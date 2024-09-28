export function ProductsShow({ product, onUpdate, onDestroy, onDestroy }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(event.target)
    onUpdate(product.id, params, () => event.target.reset());
  }
  
  // const handleSubmitImage = (event) => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   console.log(event.target)
  //   onUpdate(image.id, params, () => event.target.reset());
  // }
  
  return (
    <div>
      <div>
        <h3>Product information</h3>
        {/* <p>Name: {product.name}</p> */}
        <p>ID: {product.id}</p>
        <p>ID: {product.id}</p>
        {/* <p>URL: {product.url}</p> */}
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Supplier ID: {product.supplier_id}</p>
      </div>
      <div>
        <h3>Edit</h3>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input defaultValue={product.name} name="name" type="text" />
          </div>
          {/* <div>
            URL: <input defaultValue={product.url} name="url" type="text" />
          </div> */}
          <div>
            Price: <input defaultValue={product.Price} name="price" type="text" />
          </div>
          <div>
            Description: <input defaultValue={product.description} name="description" type="text" />
          </div>
          <div>
            Supplier ID: <input defaultValue={product.supplier_id} name="supplier_id" type="text" />
          </div>
          <button type="submit">Update</button>
        </form>
        <div>
          <button onClick={() => onDestroy(product.id)}>Delete</button>
        </div>
        <button onClick={() => onDestroy(product.id)}>Delete</button>
      </div>
    </div>
  );
}