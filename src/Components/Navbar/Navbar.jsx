import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <Link to={"/statistics"}>Statistics</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link to={'/'}>New Tab</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
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
        <Link to={'/'} className="btn btn-ghost text-xl font-bold">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end gap-4">
        <IoCartOutline className="text-3xl cursor-pointer"></IoCartOutline>
        <FaRegHeart className="text-2xl cursor-pointer"></FaRegHeart>
      </div>
    </div>
  );
};

export default Navbar;
