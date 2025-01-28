import { useEffect, useState } from "react";
import { ImEqualizer2 } from "react-icons/im";
import { getCartList } from "../../utilities/utils";
import Product from "../Product/Product";
import { Helmet } from "react-helmet";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const productPrice = cartItem.map((p) => p.price);

  useEffect(() => {
    const pp = productPrice.reduce((pre, cur) => pre + cur, 0);
    setPrice(pp.toFixed(2));
  }, [productPrice]);


  useEffect(() => {
    const cartList = getCartList();

    const addedCartList = products.filter((product) =>
      cartList.includes(product.product_id)
    );
    setCartItem(addedCartList);
  }, [products]);

  const handleSort = () => {
    const sortedItem = [...cartItem].sort((a, b) => b.price - a.price);
    setCartItem(sortedItem);
  };

  return (
    <div className="w-11/12 mx-auto pb-20">
      <Helmet>
        <title>Cart | Gadget Heaven</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Cart</h1>
        </div>

        <div className="flex items-center">
          <h2 className="font-bold text-2xl">Total Cost: {price} </h2>
          <div>
            <button
              onClick={handleSort}
              className="ml-4 px-6 rounded-[32px] btn btn-outline border-2 border-b-indigo-600 border-fuchsia-500 text-[#9538E2] font-semibold"
            >
              Sort By Price <ImEqualizer2 className="text-lg"></ImEqualizer2>
            </button>
            <button className="px-6 ml-3 rounded-[32px] btn bg-gradient-to-t to-[#9538E2] from-[#DD6BF0] text-white font-medium">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="pt-20 pb-20 space-y-5">
          {cartItem.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
