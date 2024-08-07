import React, { useContext, useEffect, useState } from "react";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { itemsContext } from "../context";
import { toggleToFav } from "../utils/utilsItems";

interface Props {
  product: Product;
  fav?: boolean;
}

const Card = ({ product }: Props) => {
  const itemsHandeler = useContext(itemsContext);

  const itemFav = itemsHandeler.liked.likedItems.some(
    (ele) => ele.id === product.id,
  );
  const [isFav, setFav] = useState(itemFav);

  useEffect(() => {
    setFav(itemFav);
  }, [itemFav]);
  const nav = useNavigate();

  if (itemsHandeler.liked.likedItems && !isFav) {
    const index = itemsHandeler.liked.likedItems.findIndex(
      (e) => e.id === product.id,
    );
    if (index !== -1) setFav(true);
  }

  const handelClick = () => {
    return nav(`/shop/${product.id}`);
  };

  const handelFavClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setFav(!isFav);
    toggleToFav(itemsHandeler, product);
  };

  return (
    <div
      className="group relative flex h-72 w-52 cursor-pointer select-none flex-col items-center justify-between rounded border-2 border-white p-4 before:absolute before:bottom-0 before:-z-30 before:h-[40%] before:w-full before:bg-pink-400 before:content-['']"
      onClick={handelClick}
    >
      <img
        loading="lazy"
        src={product.images[0]}
        alt={"Picture of " + product.title}
        // add not hover to avoid mouse issues
        className="size-40 drop-shadow-lg transition-all duration-500 ease-out group-hover:pointer-events-none group-hover:z-50 group-hover:mb-10 group-hover:-translate-y-16 group-hover:scale-[200%]"
      ></img>
      <h1 className="text-center"> {product.title} </h1>
      <span className="mb-2 overflow-hidden duration-500 ease-in-out group-hover:mt-10 group-hover:transition-all">
        {product.price}€
      </span>
      <HeartIcon
        className="absolute bottom-2 right-2 z-10 size-6 active:animate-ping"
        active={isFav}
        onClick={(e) => handelFavClick(e)}
      />
    </div>
  );
};

interface IconProps {
  className: string;
  [key: string]: any; // Allow any additional props
  active: boolean;
  onClick: (e: React.MouseEvent<SVGElement>) => void;
}

export const HeartIcon = ({
  className,
  active,
  onClick,
  ...props
}: IconProps) => (
  <svg
    onClick={(e) => onClick(e)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label="Toggle Like"
    className={(active ? "fill-rose-600 " : "fill-white ") + className}
    {...props}
  >
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
);
export default Card;
