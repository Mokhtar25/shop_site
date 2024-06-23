import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import { Outlet } from "react-router-dom";
import { CardItem, ContextItems, itemsContext } from "./context";
import { products as productsProvider } from "./context";
import ErrorPage from "./comp/ErrorPage";
import { getBasicItems } from "./utils/utils";

function App({ Error = false }) {
  const [likedProudcts, setLikedProducts] = useState<Product[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [cardItems, setCardItems] = useState<CardItem[]>([]);

  // fixing the issue of missing data is a must and which catagories to fetch
  useEffect(() => {
    getBasicItems().then((re) => setItems(re));
  }, []);

  const context: ContextItems = {
    liked: {
      likedItems: likedProudcts,
      setLikedItems: setLikedProducts,
    },
    card: {
      cardItems: cardItems,
      setCardItems: setCardItems,
    },
  };

  if (Error)
    return (
      <>
        <itemsContext.Provider value={context}>
          <Header />
        </itemsContext.Provider>

        <ErrorPage />

        <Footer />
      </>
    );

  return (
    <div className="flex flex-col justify-between">
      <itemsContext.Provider value={context}>
        <Header />
      </itemsContext.Provider>

      <itemsContext.Provider value={context}>
        <productsProvider.Provider value={items}>
          <Outlet />
        </productsProvider.Provider>
      </itemsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
