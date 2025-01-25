const Product = ({ product }) => {

  const { product_image, product_title, price } = product;

  return (
    <div className="card bg-base-100 shadow-xl mb-20">
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
          <button className="mt-4 py-3 px-6 rounded-[32px] btn btn-outline border border-b-indigo-600 border-fuchsia-500">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
