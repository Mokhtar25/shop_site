import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState<any>();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/?limit=200")
  //     .then((res) => res.json())
  //     .then((json) => setItems(json.products));
  // }, []);

  return (
    <>
      <div>Hello, world</div>
      <img
        src="https://www.chanel.com/us/img/constant-products/eau-de-parfum-spray-1.7oz-fno-5/p64296/zoom-1.jpg"
        alt=""
      ></img>

      {items &&
        items.map((e: any) => (
          <>
            <img src={e.images[0]} alt={e.title} key={e.id}></img>
            <h1>{e.title}</h1>
            <h2>{e.description}</h2>
          </>
        ))}
    </>
  );
}

export default App;
