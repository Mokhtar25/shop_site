import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Card from "./comp/Card";
import ShopPage from "./comp/ShopPage";

function App() {
  const [items, setItems] = useState<Product[]>();

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=5")
      .then((res) => res.json())
      .then((json) => setItems(json.products));
  }, []);

  return (
    <>
      <Header />
      <ShopPage>
        {items &&
          items.map((e) => (
            <Card
              key={e.id}
              product={e}
              handelClickOpen={() => void 0}
              handelClickAddToCard={() => void 0}
            />
          ))}
      </ShopPage>

      <Footer />
    </>
  );
}

export default App;
