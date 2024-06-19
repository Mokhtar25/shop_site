import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Card from "./comp/Card";

function App() {
  const [items, setItems] = useState<Product[]>();

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=1")
      .then((res) => res.json())
      .then((json) => setItems(json.products));
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-full min-h-96 flex-wrap gap-24 p-8">
        {items &&
          items.map((e) => (
            <Card
              product={e}
              handelClickOpen={() => void 0}
              handelClickAddToCard={() => void 0}
            />
          ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
