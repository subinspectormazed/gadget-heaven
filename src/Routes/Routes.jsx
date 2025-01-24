import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Components/Root/Root";
import Dashboard from "../Pages/Dashboard";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/WIshlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,

      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
