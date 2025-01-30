import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div className="relative top-16">
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white text-center">
        <div className="w-8/12 mx-auto">
          <h2 className="font-bold text-3xl pb-4 pt-8">Statistics</h2>
          <p className="pb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto py-10 mb-36 font-bold">
        <h2 className="text-3xl">Statistics</h2>
        <h1 className="mt-10 text-center text-[#9538E2] text-5xl">
          No Statistics to Show
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
