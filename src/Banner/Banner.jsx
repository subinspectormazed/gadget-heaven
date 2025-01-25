import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="relative top-14">
      <div className="p-2 border rounded-b-lg">
        <div className="bg-[#9538E2] rounded-b-lg text-white text-center">
          <h1 className="font-bold md:text-[56px] pt-14 pb-6 w-8/12 mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="w-5/6 lg:w-3/6 mx-auto pb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="md:mb-[268px] mb-[108px] text-[#9538E2] font-bold text-xl py-4 px-8 bg-white rounded-[32px] btn-ghost hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative -top-[70px] md:-top-[220px] w-full mx-auto">
        <div className="lg:w-8/12 w-9/12 mx-auto p-3 border-2 rounded-xl">
          <img
            className="rounded-xl w-full object-fill lg:h-[450px]"
            src={bannerImg}
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
