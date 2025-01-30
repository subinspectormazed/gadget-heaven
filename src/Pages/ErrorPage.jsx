import { NavLink } from "react-router-dom";

const ErrorPage = () => {

  return (
    <div>

      <div className="relative top-20 mb-36 text-center py-10  font-bold ">
        <h1 className="text-[#9538E2] text-5xl pb-4">Page not found</h1>
        <p className="text-2xl">Error 404</p>
        <NavLink to={'/'}><button className="btn btn-outline btn-primary mt-10">Back to homepage</button></NavLink>
      </div>

    </div>
  );
};

export default ErrorPage;
