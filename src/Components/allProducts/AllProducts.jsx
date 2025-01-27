import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const products = useLoaderData();

  const { category } = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...products].filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredByCategory);
    } else {
      setFilteredProducts(products);
    }
  }, [products, category]);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
        {filteredProducts.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
