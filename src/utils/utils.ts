export async function getItemsByCat(cat: string, abort: AbortController) {
  if (cat === "all") {
    return fetch("https://dummyjson.com/products/", {
      signal: abort.signal,
    }).then((res) => res.json());
  } else {
    const datas = await fetch(`https://dummyjson.com/products/category/${cat}`);
    const data = await datas.json();
    return data.products;
  }
}

export async function getBasicItems() {
  const baseUrl = "https://dummyjson.com/products/category/";
  const list = [
    baseUrl + "beauty",
    baseUrl + "sunglasses",
    baseUrl + "mens-watches",
    baseUrl + "skin-care",
  ];
  const data = await Promise.all(list.map((e) => fetch(e)))
    .then((res) => Promise.all(res.map((re) => re.json())))
    .then((r) => r.flatMap((ss) => ss.products));

  return data;
}
