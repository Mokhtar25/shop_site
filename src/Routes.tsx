import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ShopPage from "./comp/ShopPage";
import DisplayProduct from "./comp/DisplayProduct";
import { CheckoutPage } from "./comp/CheckoutPage";
import HomePage from "./comp/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <App Error={true} />,

    children: [
      { index: true, element: <HomePage /> },
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
