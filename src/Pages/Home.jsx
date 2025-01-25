import Banner from "../Banner/Banner";
import Products from "../Components/Products/Products";

import bannerImg from "../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="md:absolute lg:top-[600px] md:top-[800px] w-full mx-auto">
        <div className="lg:w-8/12 w-9/12 mx-auto p-3 border-2 rounded-xl">
          <img
            className="rounded-xl w-full object-cover lg:h-[400px]"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
      <div>
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
