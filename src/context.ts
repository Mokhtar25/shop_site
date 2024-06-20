import { createContext } from "react";
import { Product } from "./types";

export const likedItems = createContext<Product[]>([]);
export const setLikedItems = createContext<(e: any) => void>(() => void 0);
export const cardItems = createContext<Product[]>([]);
export const setCardItems = createContext<(e: any) => void>(() => void 0);
