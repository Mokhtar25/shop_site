import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Card from "./comp/Card";
import ShopPage from "./comp/ShopPage";
import { Outlet } from "react-router-dom";
import { likedItems } from "./context";

function App() {
  const [likedProudcts, setLikedProducts] = useState<Product[]>([]);
  const [items, setItems] = useState("as");

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/?limit=5")
  //     .then((res) => res.json())
  //     .then((json) => setItems(json.products));
  // }, []);

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

  const ss = () => console.log("ckicjed");
  return (
    <>
      <likedItems.Provider value={setItems}>
        <Header />
      </likedItems.Provider>
      {items}

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
