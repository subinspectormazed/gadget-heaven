import { getWishList } from "../../utilities/utils";
import Product from "../Product/Product";
import { useState } from "react";

const Wishlist = () => {
  // const [products, setProducts] = useState([]);
  // const [wishedProduct, setWishedProduct] = useState([]);

  // useEffect(() => {
  //   const wishList = getWishList();

  //   const addedToWishList = products.filter((product) =>
  //     wishList.includes(product.product_id)
  //   );
  //   setWishedProduct(addedToWishList);
  // }, [products]);


  // useEffect(() => {
  //   fetch("./products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <div className="w-11/12 mx-auto pb-20">
      <div>
        <h1 className="font-bold text-2xl">WishList</h1>
      </div>

      {/* <div>
        <h2 className="pt-20 pb-20 space-y-5">
          {wishedProduct.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </h2>
      </div> */}
    </div>
  );
};

export default Wishlist;
