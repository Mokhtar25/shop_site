import { useState } from "react";

export default function Header() {
  const [current, setCurrent] = useState("home");

  const handelClick = (type: "home" | "about" | "shop") => {
    setCurrent(type);
  };

  const activeStyle = "drop-shadow-[0_1.2px_1.2px_rgba(168,85,247,.8)]";
  const stylelink =
    "cursor-pointer select-none drop-shadow-md hover:text-slate-600 hover:shadow-black active:text-slate-900 ";
  return (
    <nav className="flex h-16 bg-slate-100">
      <ul className="flex w-full items-center justify-center gap-8 text-xl text-slate-800">
        <li
          className={stylelink + (current === "home" ? " " + activeStyle : "")}
          onClick={() => handelClick("home")}
        >
          Home
        </li>
        <li
          className={stylelink + (current === "about" ? " " + activeStyle : "")}
          onClick={() => handelClick("about")}
        >
          About
        </li>
        <li
          className={stylelink + (current === "shop" ? " " + activeStyle : "")}
          onClick={() => handelClick("shop")}
        >
          Shop
        </li>
      </ul>
    </nav>
  );
}
