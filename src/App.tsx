import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./comp/Header";
import Footer from "./comp/Footer";

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

      {items &&
        items.map((e) => (
          <>
            <img
              src={e.images[0]}
              alt={e.title}
              key={e.id}
              height={300}
              width={200}
            ></img>
            <h1>{e.title}</h1>
            <h2>{e.description}</h2>
            <div>
              {e.reviews.map((re) => (
                <h2>
                  {re.comment} {re.rating} {re.date.toString()}{" "}
                  {re.reviewerName}
                </h2>
              ))}
            </div>
          </>
        ))}
      <Footer />
    </>
  );
}

export default App;
