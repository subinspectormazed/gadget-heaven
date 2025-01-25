import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Components/Categories/Categories";

import bannerImg from "../assets/banner.jpg";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="md:relative md:-top-[220px] w-full mx-auto">
        <div className="lg:w-8/12 w-9/12 mx-auto p-3 border-2 rounded-xl">
          <img
            className="rounded-xl w-full object-fill lg:h-[450px]"
            src={bannerImg}
            alt="Banner Image"
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto md:relative md:-top-[120px]">
      <h1 className="font-bold text-[40px] text-center ">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex gap-6 mt-12 justify-evenly">
        <Categories categories={categories}></Categories>
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Home;
