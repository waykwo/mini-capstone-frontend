export function ProductsShow({ product }) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Url: {product.url}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Supplier ID: {product.supplier_id}</p>
    </div>
  );
}