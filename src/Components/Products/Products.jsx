import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-[40px] text-center pt-20">Explore Cutting-Edge Gadgets</h1>
      <div className="md:flex gap-6 mt-10 justify-evenly">
        <div className="bg-base-100 shadow-xl md:flex flex-col gap-6 p-4 max-h-[380px] rounded-xl">
          <button className="btn py-3 px-6 text-start rounded-[32px]">All Product</button>
          <button className="btn py-3 px-6 text-start rounded-[32px]">Computers</button>
          <button className="btn py-3 px-6 text-start rounded-[32px]">SmartHome</button>
          <button className="btn py-3 px-6 text-start rounded-[32px]">Audio</button>
          <button className="btn py-3 px-6 text-start rounded-[32px]">Accessories</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
