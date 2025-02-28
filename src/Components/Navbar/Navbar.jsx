import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const menu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink
          className={`${
            location.pathname === "/" ? "text-[#00FFFF]" : "text-[#FF1493]"
          } font-bold`}
          to={"/upcoming-products"}
        >
          Upcoming
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`${
        location.pathname === "/"
          ? "bg-[#9538E2] text-white w-full rounded-t-lg backdrop-blur-xl border-x-[9px] z-50 fixed"
          : "bg-white/30 w-full backdrop-blur-xl z-50 fixed text-[#9538E2]"
      } `}
    >
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-black">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="p-3 bg-white rounded-full">
            <IoCartOutline className="text-2xl text-black cursor-pointer"></IoCartOutline>
          </div>
          <div className="p-3 bg-white rounded-full">
            <FaRegHeart className="text-2xl text-black cursor-pointer"></FaRegHeart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
