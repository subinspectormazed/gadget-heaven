import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const { product_image, product_title, price, product_id: id } = product;

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product_image} alt={product_title} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}$</p>
        <div className="card-actions">
          <button
            onClick={() => handleDetails(id)}
            className="mt-4  px-6 rounded-[32px] btn btn-outline border-2 text-[#9538E2] border-b-indigo-600 border-fuchsia-500"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
