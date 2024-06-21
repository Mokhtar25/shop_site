import { createContext } from "react";
import { Product } from "./types";

// export const likedItems = createContext<Product[]>([]);
// export const setLikedItems = createContext<(e: any) => void>(() => void 0);
// export const cardItems = createContext<Product[]>([]);
// export const setCardItems = createContext<(e: any) => void>(() => void 0);

export interface ContextItems {
  liked: {
    likedItems: Product[];
    setLikedItems: (e: Product[]) => void;
  };
  card: {
    cardItems: CardItem[];
    setCardItems: (e: CardItem[]) => void;
  };
}

export interface CardItem {
  product: Product;
  amount: number;
}
export const itemsContext = createContext<ContextItems>({
  liked: {
    likedItems: [],
    setLikedItems: () => void 0,
  },
  card: {
    cardItems: [],
    setCardItems: () => void 0,
  },
});

export const products = createContext<Product[]>([]);
