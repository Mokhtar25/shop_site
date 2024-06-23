export async function getBasicItems() {
  const baseUrl = "https://dummyjson.com/products/category/";
  const list = [
    baseUrl + "mens-watches",
    baseUrl + "mens-watches",
    baseUrl + "skin-care",
    baseUrl + "sunglasses",
  ];
  const data = await Promise.all(list.map((e) => fetch(e)))
    .then((res) => Promise.all(res.map((re) => re.json())))
    .then((r) => r.flatMap((ss) => ss.products));

  return data;
}

getBasicItems();
