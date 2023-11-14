import { products } from "./products.js";
function Forprice() {
  products.sort((a, b) => a.price - b.price)
 return<>
 {products.map((pro) => {
    return (
      <>
        <p key={pro.id}>
          {pro.title},{pro.price}
        </p>
      </>
    );
  })}
 </> 
}
export default Forprice;
