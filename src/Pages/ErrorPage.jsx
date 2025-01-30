import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative top-20 mb-36 text-center py-10  font-bold ">
        <h1 className="text-[#9538E2] text-5xl pb-4">Page not found</h1>
        <p className="text-2xl">Error 404</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
