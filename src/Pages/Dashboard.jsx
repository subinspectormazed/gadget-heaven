import { useState } from "react";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/WIshlist/Wishlist";

const Dashboard = () => {
  const [active, setActive] = useState(true);

  const handleActive = (status) => {
    status === 'cart'? setActive(true): setActive(false);
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-white text-center">
        <div className="w-8/12 mx-auto">
          <h2 className="font-bold text-3xl pb-4 pt-8">Dashboard</h2>
          <p className="pb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="pb-8 text-xl">
          <button
            onClick={() => handleActive("cart")}
            className={`${active?"btn bg-white text-[#9538E2] py-3 px-16 rounded-3xl font-extrabold":'btn py-3 px-16 rounded-3xl bg-transparent text-white font-medium hover:text-black'}`}
          >
            Cart
          </button>

          <button
            onClick={handleActive}
            className={`ml-6 ${!active?"btn bg-white text-[#9538E2] py-3 px-16 rounded-3xl font-extrabold":'btn py-3 px-16 rounded-3xl bg-transparent text-white font-medium hover:text-black'}`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-12">
      {
        active? <Cart></Cart>:<Wishlist></Wishlist>
      }
      </div>
    </div>
  );
};

export default Dashboard;
