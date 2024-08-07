import { useNavigate, Link } from "react-router-dom";
import { CardItem } from "../context";
import { SetStateAction, useRef, useMemo } from "react";

interface CardDropProps {
  ProductList: CardItem[];
  hide: boolean;
  open: React.Dispatch<SetStateAction<boolean>>;
}

export default function CardDrop({ ProductList, hide, open }: CardDropProps) {
  const nav = useNavigate();

  const finialPrice = useMemo(
    () =>
      ProductList.reduce((a, b) => a + b.product.price * b.amount, 0).toFixed(
        2,
      ),
    [ProductList],
  );

  const div = useRef<HTMLDivElement>(null);
  div.current?.addEventListener("mouseleave", () => {
    open(true);
  });

  const handelClick = (ele: CardItem) => {
    nav(`/shop/${ele.product.id}`);
    open(true);
  };

  return (
    <div
      title="card items"
      ref={div}
      className={
        "no-scrollbar absolute right-[51%] top-16 z-[99] box-border w-96 divide-y-2 divide-black overflow-hidden rounded-lg bg-neutral-200 transition-all duration-300" +
        (hide ? " h-0" : " h-[500px] border-2 border-neutral-600")
      }
    >
      {ProductList.map((ele) => (
        <div
          key={ele.product.id + 1000}
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
          <div className="absolute bottom-8 right-4">{ele.product.price}€</div>
          <div className="absolute bottom-1 right-2">
            Quanity : {ele.amount}
          </div>
        </div>
      ))}

      {ProductList.length === 0 && (
        <h2 className="mx-auto mt-[50%] w-fit">Your cart is empty</h2>
      )}

      {ProductList.length !== 0 && (
        <div className="absolute bottom-0 flex h-12 w-full items-center justify-between bg-slate-100 p-10 px-4">
          <Link to={"/checkout"}>
            <button
              onClick={() => open(true)}
              className="rounded-lg border-2 border-slate-300 bg-slate-100 bg-opacity-60 p-3 hover:brightness-90"
            >
              Checkout
            </button>
          </Link>
          <span> Total : {finialPrice}€</span>
        </div>
      )}
    </div>
  );
}
