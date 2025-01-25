import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="bg-base-100 shadow-xl flex md:flex-col flex-wrap gap-6 p-4 max-h-[300px] rounded-xl">
      <NavLink
        to={"/"}
        className="btn py-3 px-6 justify-start rounded-[32px]"
      >
        All Product
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          className="btn py-3 px-6 justify-start rounded-[32px]"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
