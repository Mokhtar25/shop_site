import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ShopPage from "./comp/ShopPage";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import ErrorPage from "./comp/ErrorPage";
import Card from "./comp/Card";
import DisplayProduct from "./comp/DisplayProduct";
import { CheckoutPage } from "./comp/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App Error={true} />,

    children: [
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <DisplayProduct />,
      },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

export default router;
