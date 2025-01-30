import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Product from "../Components/Product/Product";

const UpComingProducts = () => {
  const products = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Upcoming | Gadget Heaven</title>
      </Helmet>
      <div>
        <div className="w-11/12 mx-auto relative top-24 py-10 mb-36">
          <h2 className="text-center mb-20 font-bold text-[#9538E2] text-5xl">Upcoming Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
            {products.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingProducts;
