import { CardItem, ContextItems } from "../context";
import { Product } from "../types";

export function getTotalPrice(items: CardItem[]) {
  const total = items
    .reduce((a, b) => a + b.product.price * b.amount, 0)
    .toFixed(2);
  return total;
}

export function addItemToFav(itemsHandeler: ContextItems, product: Product) {
  const addFunc = itemsHandeler.liked.setLikedItems;

  const index = itemsHandeler.liked.likedItems.findIndex(
    (e) => e.id === product.id,
  );

  if (index !== -1) {
    addFunc(itemsHandeler.liked.likedItems.filter((e) => e.id !== product.id));

    return;
  }

  if (index === -1) {
    addFunc([...itemsHandeler.liked.likedItems, product]);
  }
}

export function addItemToCart(listItems: ContextItems, product: Product) {
  const index = listItems.card.cardItems.findIndex(
    (e) => e.product.id === product.id,
  );

  if (index === -1) {
    listItems.card.setCardItems([
      ...listItems.card.cardItems,
      { product: product, amount: 1 },
    ]);
  } else {
    listItems.card.setCardItems(
      listItems.card.cardItems.map((ele) =>
        ele.product.id === product.id
          ? { product: ele.product, amount: ele.amount + 1 }
          : ele,
      ),
    );
  }
}

// 1 to remove the whole thing or 0 to discount
export function removeFromCard(
  listItems: ContextItems,
  product: Product,
  type: number,
) {
  const index = listItems.card.cardItems.findIndex(
    (e) => e.product.id === product.id,
  );
  if (index === -1) return true;

  const newList = [...listItems.card.cardItems];
  if (newList[index].amount === 1 || type === 1) {
    newList.splice(index, 1);
    listItems.card.setCardItems(newList);
    return true;
  } else {
    newList[index] = { ...newList[index], amount: newList[index].amount - 1 };
    listItems.card.setCardItems(newList);
  }
}
