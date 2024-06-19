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
    <div className="group flex h-72 w-52 cursor-pointer flex-col items-center justify-between rounded border-2 border-white p-4">
      <img
        src={product.images[0]}
        alt={"Picture of " + product.title}
        className="size-40 drop-shadow-lg transition-all duration-500 ease-out group-hover:z-50 group-hover:mb-10 group-hover:-translate-y-16 group-hover:scale-[200%]"
      ></img>

      <h1 className="text-center"> {product.title} </h1>
      <span className="mb-4 overflow-hidden duration-500 ease-in-out group-hover:mt-10 group-hover:transition-all">
        {product.price}€
      </span>
    </div>
  );
};

export default Card;
