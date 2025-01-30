import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Components/Root/Root";
import Dashboard from "../Pages/Dashboard";
import UpcomingProductDetails from "../Components/upcomingProductDetails/UpcomingProductDetails";
import AllProducts from "../Components/allProducts/AllProducts";
import Statistics from "../Pages/Statistics";
import UpComingProducts from "../Pages/UpComingProducts";
import ProductDetails from "../Components/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "upcoming-products",
        element: <UpComingProducts></UpComingProducts>,
        loader:()=>fetch('/upcoming.json'),
      },
      {
        path: "upcoming-details/:id",
        element: <UpcomingProductDetails></UpcomingProductDetails>,
        loader:()=>fetch('/upcoming.json'),
      },
    ],
  },
]);

export default router;
