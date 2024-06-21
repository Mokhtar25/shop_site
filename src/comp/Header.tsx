import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { itemsContext } from "../context";
import CardDrop from "./CardDrop";

export default function Header() {
  const [current, setCurrent] = useState("home");
  const items = useContext(itemsContext);
  const [openCart, setOpenCart] = useState(false);

  const handelOpenCart = () => {
    setOpenCart(!openCart);
  };
  const handelClick = (type: "home" | "about" | "shop") => {
    setOpenCart(true);
    setCurrent(type);
  };

  // fix this
  const activeStyle =
    "drop-shadow-[0_1.2px_1.2px_rgba(168,85,247,.8)] text-slate-600";
  const stylelink =
    "cursor-pointer select-none drop-shadow-md hover:text-slate-600 hover:shadow-black active:text-slate-900 ";
  return (
    <nav className="relative flex h-16 bg-slate-100">
      <ul className="flex w-full flex-row-reverse items-center justify-center gap-8 text-xl text-slate-800">
        <Link
          to="/about"
          className={stylelink + (current === "about" ? " " + activeStyle : "")}
          onClick={() => handelClick("about")}
        >
          About
        </Link>
        <Link
          to="/"
          className={stylelink + (current === "home" ? " " + activeStyle : "")}
          onClick={() => handelClick("home")}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={stylelink + (current === "shop" ? " " + activeStyle : "")}
          onClick={() => handelClick("shop")}
        >
          Shop
        </Link>
        <div className="relative">
          <CartIcon
            className="size-6 cursor-pointer select-none fill-black hover:scale-105 active:fill-gray-400"
            onClick={handelOpenCart}
          />
          <CardDrop
            open={handelOpenCart}
            ProductList={items.card.cardItems}
            hide={openCart}
          ></CardDrop>
        </div>
      </ul>
    </nav>
  );
}

const CartIcon = ({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
    </svg>
  );
};
