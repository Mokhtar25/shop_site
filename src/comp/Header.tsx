import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { itemsContext } from "../context";

export default function Header() {
  const [current, setCurrent] = useState("home");
  const items = useContext(itemsContext);

  const handelClick = (type: "home" | "about" | "shop") => {
    setCurrent(type);
  };

  // fix this
  const activeStyle =
    "drop-shadow-[0_1.2px_1.2px_rgba(168,85,247,.8)] text-slate-600";
  const stylelink =
    "cursor-pointer select-none drop-shadow-md hover:text-slate-600 hover:shadow-black active:text-slate-900 ";
  return (
    <nav className="flex h-16 bg-slate-100">
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
      </ul>
    </nav>
  );
}
