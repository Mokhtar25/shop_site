import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ShopPage from "./comp/ShopPage";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import ErrorPage from "./comp/ErrorPage";
import Card from "./comp/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",

        element: <Footer />,
      },
    ],
  },
]);

export default router;
