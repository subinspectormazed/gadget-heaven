import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Components/Root/Root";
import Dashboard from "../Pages/Dashboard";
import ProductDetails from "../Components/productDetails/ProductDetails";
import AllProducts from "../Components/allProducts/AllProducts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children:[
          {
            path: "/",
            element: <AllProducts></AllProducts>,
            loader: ()=> fetch('../products.json'),
          },
          {
            path: "/category/:category",
            element: <AllProducts></AllProducts>,
            loader: ()=> fetch('../products.json'),
          },
        ]
      },
      {
        path: "products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('/products.json'),
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
