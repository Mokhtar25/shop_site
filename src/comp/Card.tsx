import { useState } from "react";
import { Product } from "../types";
import { redirectDocument } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const [isFav, setFav] = useState(fav);
  const nav = useNavigate();
  const handelClick = () => {
    return nav(`/shop/${product.id}`);
  };

  const handelFavClick = (e) => {
    e.stopPropagation();

    setFav(!isFav);
  };

  return (
    <div
      className="group relative flex h-72 w-52 cursor-pointer select-none flex-col items-center justify-between rounded border-2 border-white p-4 before:absolute before:bottom-0 before:-z-30 before:h-[40%] before:w-full before:bg-pink-400 before:content-['']"
      onClick={handelClick}
    >
      <img
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
        className="absolute bottom-2 right-2 z-50 size-6 active:animate-ping"
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
  onClick: () => void;
}

const HeartIcon = ({ className, active, onClick, ...props }: IconProps) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={(active ? "fill-rose-600 " : "fill-white ") + className}
    {...props}
  >
    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
);
export default Card;
