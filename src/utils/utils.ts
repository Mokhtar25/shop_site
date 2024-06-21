export async function getItemsByCat(cat: string, abort: AbortController) {
  if (cat === "all") {
    return fetch("https://dummyjson.com/products/", {
      signal: abort.signal,
    }).then((res) => res.json());
  } else {
    const datas = await fetch(`https://dummyjson.com/products/category/${cat}`);
    const data = await datas.json();
    console.log(data);
    return data.products;
  }
}
