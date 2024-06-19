import React, { useState } from "react";
import { Product } from "../types";

interface Props {
  product: Product;
  fav?: boolean;
  handelClickOpen: () => void;
  handelClickAddToCard: () => void;
}

const Card = ({
  product,
  fav = false,
  handelClickOpen,
  handelClickAddToCard,
}: Props) => {
  const [isfav, setFav] = useState(fav);

  return (
    <div className="group flex h-72 w-52 cursor-pointer flex-col items-center rounded border-2 border-white p-4">
      <img
        src={product.images[0]}
        alt={"Picture of " + product.title}
        className="size-40 drop-shadow-lg transition-all duration-500 group-hover:z-50 group-hover:mb-10 group-hover:scale-[250%] group-hover:pb-10"
      ></img>

      <h1 className="text-center"> {product.title} </h1>
      <span className="overflow-hidden">{product.price}€</span>
    </div>
  );
};

export default Card;
