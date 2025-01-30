import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const UpcomingProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();

  const product = products.find((product) => product.product_id === id);

  const {
    product_image,
    product_title,
    price,
    description,
    Specification,
    availability,
    rating,
    product_id,
  } = product;

  console.log(product)

  return (
    <div>
      <Helmet>
        <title>{product_id} | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white text-center relative top-20">
        <div>
          <h2 className="font-bold text-3xl pt-8 pb-4">Product Details</h2>
          <p className="w-1/2 mx-auto pb-[235px]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl w-4/6 mx-auto relative -top-28 justify-center items-center flex">
        <figure>
          <img className="pl-4 w-96" src={product_image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p className="font-semibold text-[#09080FCC]">
            Price: <span className="text-[#9538E2]">{price}</span>
          </p>
          <p className="bg-[#309C081A] text-center border-2 text-green-700 border-green-800 px-6 py-2 w-36 rounded-[32px]">
            {availability}
          </p>
          <p className="text-lg text-[#09080F99] pb-2">{description}</p>
          <p className="font-bold text-lg"> Specification: </p>
          <ol className="text-[#09080F99] text-lg">
            {Specification.map((features, idx) => (
              <li key={idx}>
                <span className="text-black">{idx + 1}</span>. {features}
              </li>
            ))}
          </ol>
          <p className="text-lg font-bold py-2">Rating:</p>
          <p className="flex items-center gap-3">
            <div className="rating ">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-orange-400"
              />
            </div>
            <div className="font-medium text-sm bg-slate-200 py-2 px-4 rounded-3xl">
              {rating}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProductDetails;
