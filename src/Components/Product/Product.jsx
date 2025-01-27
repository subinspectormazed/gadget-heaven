import { useLocation, useNavigate } from "react-router-dom";
// import { removeFromCart } from "../../utilities/utils";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    product_image,
    product_title,
    price,
    product_id: id,
    description,
  } = product;

  // const handleRemove=(id)=>{
  //   removeFromCart(id);
  // }

  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      {location.pathname === "/dashboard" ? (
        <div className="flex gap-6">
          <figure className="p-6 w-48 border">
            <img
              src={product_image}
              alt={product_title}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p className="text-lg text-[#09080F99] py-4">{description}</p>
            <p>Price: {price}$</p>
          </div>
          <button className="pr-10">Delete</button>
        </div>
      ) : (
        <div>
          <figure className="px-10 pt-10">
            <img
              src={product_image}
              alt={product_title}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>Price: {price}$</p>
            <div className="card-actions">
              <button
                onClick={() => handleDetails(id)}
                className="mt-4 px-6 rounded-[32px] btn btn-outline border-2 text-[#9538E2] border-b-indigo-600 border-fuchsia-500"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
