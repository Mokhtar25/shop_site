import { useState } from "react";

// enum States { "home" | "about" | "shop"}

export default function Header() {
  const [current, setCurrent] = useState("home");

  const handelClick = (type: string) => {
    console.log(type);
    switch (type) {
      case "home":
        return setCurrent("home");
      case "about":
        return setCurrent("about");
      case "shop":
        setCurrent("shop");
    }
  };

  const stylelink =
    "cursor-pointer select-none drop-shadow-md hover:text-slate-600 hover:shadow-black active:text-slate-900";
  return (
    <nav className="flex h-16 bg-slate-100">
      <ul className="flex w-full items-center justify-center gap-8 text-xl text-slate-800">
        <li
          className={stylelink + " border-2 border-fuchsia-700"}
          onClick={() => handelClick("home")}
        >
          Home
        </li>
        <li className={stylelink} onClick={() => handelClick("about")}>
          About
        </li>
        <li className={stylelink} onClick={() => handelClick("shop")}>
          Shop
        </li>
      </ul>
    </nav>
  );
}
