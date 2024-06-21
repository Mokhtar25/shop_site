import { useNavigate } from "react-router-dom";
import { CardItem } from "../context";
import { SetStateAction, useRef, useState } from "react";

interface CardDropProps {
  ProductList: CardItem[];
  hide: boolean;
  open: React.Dispatch<SetStateAction<boolean>>;
}

export default function CardDrop({ ProductList, hide, open }: CardDropProps) {
  const nav = useNavigate();
  const finialPrice = ProductList.reduce(
    (a, b) => a + b.product.price * b.amount,
    0,
  ).toFixed(2);

  const div = useRef<HTMLDivElement>(null);
  div.current?.addEventListener("mouseleave", () => {
    console.log("run mouseleabe"), open(true);
  });
  window.addEventListener("scroll", () => {
    if (hide !== true) return open(true);
  });

  const handelClick = (ele: CardItem) => {
    nav(`/shop/${ele.product.id}`);
    open(true);
  };
  return (
    <div
      ref={div}
      className={
        "absolute right-[50%] top-10 z-[99] mx-auto box-border w-96 divide-y-2 divide-black overflow-hidden rounded-lg bg-neutral-200 transition-all duration-300" +
        (hide ? " h-0" : " h-[500px] border-2")
      }
    >
      {ProductList.map((ele) => (
        <div
          onClick={() => handelClick(ele)}
          className="relative flex h-fit min-h-14 cursor-pointer items-center justify-start bg-white py-4 text-lg hover:bg-slate-100"
        >
          <img
            className="size-14"
            src={ele.product.thumbnail}
            alt={ele.product.title}
          ></img>
          <div className="line-clamp-1 max-w-[60%] text-ellipsis">
            {ele.product.title}
          </div>
          <div className="absolute right-2 top-1">{ele.product.price}€</div>
          <div className="absolute bottom-1 right-2">
            Quanity : {ele.amount}
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 h-12 w-full bg-red-100">
        {finialPrice}€
      </div>
    </div>
  );
}
