export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.descripiton}</p>
          <img src={product.images[0] && product.images[0].url} />
        </div>
      ))}
    </div>
  );
}