import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import {
  addToCartList,
  addToWishList,
  getWishList,
} from "../../utilities/utils";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const wishList = getWishList();
    if (wishList.includes(id)) {
      setIsAdded(true);
    }
  }, []);
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

  const addToCart = (id) => {
    addToCartList(id);
    toast.success("Successfully added to cart");
  };

  const addToWish = (id) => {
    addToWishList(id);
    setIsAdded(true);
  };

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
          <p className="font-semibold text-xl text-[#09080FCC]">
            Price: $ {price}
          </p>
          <p className="py-4 text-center">
            {availability ? (
              <p className="bg-[#309C081A] border-2 text-green-700 border-green-800 px-4 py-2 w-28 rounded-[32px]">
                In Stock
              </p>
            ) : (
              <p className="bg-red-100 border-2 text-red-700 border-red-800 px-4 py-2 w-32 rounded-[32px]">
                Stock Out
              </p>
            )}
          </p>
          <p className="text-lg text-[#09080F99] pb-2">{description}</p>
          <p className="font-bold text-lg"> Specification: </p>
          <ol className="text-[#09080F99] text-lg">
            {Specification.map((features, idx) => (
              <li key={idx}>
                {idx + 1}. {features}
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

          <div className="card-actions justify-start py-2">
            <button
              onClick={() => addToCart(product_id)}
              className={`${
                !availability
                  ? "btn-disabled rounded-[32px] px-6 btn bg-[#9538E2] text-white font-bold text-lg hover:bg-white hover:text-[#9538E2]"
                  : "rounded-[32px] px-6 btn bg-[#9538E2] text-white font-bold text-lg hover:bg-white hover:text-[#9538E2]"
              }`}
            >
              Add To Cart <IoCartOutline className="text-3xl"></IoCartOutline>
            </button>
            <button
              disabled={isAdded}
              onClick={() => addToWish(product_id)}
              className="rounded-full text-[#9538E2] border-2 border-[#9538E2] btn text-xl hover:bg-[#9538E2] hover:text-white"
            >
              <FaRegHeart></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
