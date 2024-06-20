export async function getItemsByCat(cat: string) {
  if (cat === "all") {
    return fetch("https://dummyjson.com/products/").then((res) => res.json());
  } else {
    const datas = await fetch(`https://dummyjson.com/products/category/${cat}`);
    const data = await datas.json();
    return data.products;
  }
}
