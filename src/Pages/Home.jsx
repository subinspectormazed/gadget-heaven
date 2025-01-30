import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Components/Categories/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-11/12 mx-auto md:relative md:-top-[120px]">
        <h1 className="font-bold text-[40px] text-center text-[#9538E2] py-9">
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
