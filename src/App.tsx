import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import { Outlet } from "react-router-dom";
import { ContextItems, itemsContext } from "./context";
import { products as productsProvider } from "./context";

function App() {
  const [likedProudcts, setLikedProducts] = useState<Product[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [cardItems, setCardItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=5")
      .then((res) => res.json())
      .then((json) => setItems(json.products));
  }, []);

  // <ShopPage>
  // {items &&
  //     items.map((e) => (
  //         <Card
  //         key={e.id}
  //         product={e}
  //         handelClickOpen={() => void 0}
  //         handelClickAddToCard={() => void 0}
  //         />
  // ))}
  // </ShopPage>

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

  return (
    <>
      <itemsContext.Provider value={context}>
        <Header />
      </itemsContext.Provider>

      <productsProvider.Provider value={items}>
        <Outlet />
      </productsProvider.Provider>

      <Footer />
    </>
  );
}

export default App;
