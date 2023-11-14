import { products } from "./products.js";
function Rating() {
  products.sort((a, b) => b.price - a.price);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
           {products[0].title}
           
          </p>
          <button>
          {products[0].price}
          </button>
        </div>
      </div>
    </>
  );
}
export default Rating;
