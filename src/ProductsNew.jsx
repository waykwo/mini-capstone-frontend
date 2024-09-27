export function ProductsNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
    // console.log(event);
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    // console.log(event.target[3].value);
    // console.log(event.target[4].value);
    // console.log(event.target.length);
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="number" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Supplier ID: <input name="supplier_id" type="number" />
        </div>
        {/* <div>
          Image: <input name="images" type="text" />
        </div> */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}