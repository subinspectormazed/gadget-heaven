import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-white p-10 flex flex-col justify-center items-center">
      <div className="items-center flex flex-col pb-4 border-b-2 lg:border-0">
        <Link to={"/"} className="font-bold text-3xl pb-3">Gadget Heaven</Link>
        <p className="font-medium text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-20 lg:gap-80 lg:border-t-2 pt-12 ">
        <nav className="flex flex-col text-center space-y-2">
          <h6 className="font-bold text-lg">Services</h6>
          <a className="link link-hover text-[#09080F99]">Product Support</a>
          <a className="link link-hover text-[#09080F99]">Order Tracking</a>
          <a className="link link-hover text-[#09080F99]">Shipping & Delivery</a>
          <a className="link link-hover text-[#09080F99]">Returns</a>
        </nav>
        <nav className="flex flex-col text-center space-y-2">
          <h6 className="font-bold text-lg">Company</h6>
          <a className="link link-hover text-[#09080F99]">About us</a>
          <a className="link link-hover text-[#09080F99]">Career</a>
          <a className="link link-hover text-[#09080F99]">Contact</a>
        </nav>
        <nav className="flex flex-col text-center space-y-2">
          <h6 className="font-bold text-lg">Legal</h6>
          <a className="link link-hover text-[#09080F99]">Terms of use</a>
          <a className="link link-hover text-[#09080F99]">Privacy policy</a>
          <a className="link link-hover text-[#09080F99]">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
