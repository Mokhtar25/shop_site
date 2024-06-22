import { CardItem, itemsContext } from "../context";

export function getTotalPrice(items: CardItem[]) {
  const total = items
    .reduce((a, b) => a + b.product.price * b.amount, 0)
    .toFixed(2);
  return total;
}
