import { useContext } from "react";
import { itemsContext } from "../context";
import { Product } from "../types";

export const CheckoutPage = () => {
  const items = useContext(itemsContext);

  return <div className="min-h-96 bg-rose-50"> hello world </div>;
};

const ItemCard = (product: Product) => {
  return <div></div>;
};
