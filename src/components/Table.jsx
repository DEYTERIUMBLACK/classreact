import { products } from "./products.js";
function Table() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <>
                <tr>
                  <th key={product.id} scope="row">
                    {product.id}
                  </th>
                  <td key={product.id}>{product.title}</td>
                  <td key={product.id}>{product.price}</td>
                  <td key={product.id}>{product.category}</td>
                  <td key={product.id}>{product.rating.rate}</td>
                  <td key={product.id}>{product.rating.count}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Table;
