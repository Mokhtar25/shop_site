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

      <img
        src="https://www.chanel.com/us/img/constant-products/eau-de-parfum-spray-1.7oz-fno-5/p64296/zoom-1.jpg"
        alt=""
      ></img>

      {items &&
        items.map((e) => (
          <>
            <img src={e.images[0]} alt={e.title} key={e.id}></img>
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
