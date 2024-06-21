import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import { Outlet } from "react-router-dom";
import { ContextItems, itemsContext } from "./context";
import { products as productsProvider } from "./context";
import ErrorPage from "./comp/ErrorPage";

function App({ Error = false }) {
  const [likedProudcts, setLikedProducts] = useState<Product[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [cardItems, setCardItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=50")
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

  const set = (e: any) => {
    console.log(e, "run");
    setLikedProducts(e);
  };
  const context: ContextItems = {
    liked: {
      likedItems: likedProudcts,
      //@ts-ignore
      setLikedItems: set,
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
    <>
      <itemsContext.Provider value={context}>
        <Header />
      </itemsContext.Provider>

      <itemsContext.Provider value={context}>
        <productsProvider.Provider value={items}>
          <Outlet />
        </productsProvider.Provider>
      </itemsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
