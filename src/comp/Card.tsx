import React, { useState } from "react";
import { Product } from "../types";

interface Props {
  product: Product;
  fav: boolean;
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
    <div className="flex h-52 w-36 flex-col border-2 border-white">
      <h1> {product.title} </h1>
      <img
        src={product.images[0]}
        alt={"Picture of " + product.title}
        className="size-28"
      ></img>

      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  );
};

export default Card;
