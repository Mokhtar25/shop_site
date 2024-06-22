import { useNavigate } from "react-router-dom";
import { SetStateAction } from "react";
import { Product } from "../types";

interface CardDropProps {
  favList: Product[];
  hide: boolean;
  open: React.Dispatch<SetStateAction<boolean>>;
}

export default function CardDrop({ favList, hide, open }: CardDropProps) {
  const nav = useNavigate();

  const handelClick = (ele: Product) => {
    nav(`/shop/${ele.id}`);
    open(true);
  };

  return (
    <div
      className={
        "absolute right-[50%] top-10 z-[99] mx-auto box-border w-96 divide-y-2 divide-black overflow-hidden rounded-lg bg-neutral-200 transition-all duration-300" +
        (hide ? " h-0" : " h-[500px] border-2")
      }
    >
      {favList.map((ele) => (
        <div
          key={ele.id + 1000}
          onClick={() => handelClick(ele)}
          className="relative flex h-fit min-h-14 cursor-pointer items-center justify-start bg-white py-4 text-lg hover:bg-slate-100"
        >
          <img className="size-14" src={ele.thumbnail} alt={ele.title}></img>
          <div className="line-clamp-1 max-w-[60%] text-ellipsis">
            {ele.title}
          </div>
          <div className="absolute right-2 top-1">{ele.price}€</div>
        </div>
      ))}

      {favList.length === 0 && (
        <h2 className="mx-auto mt-[50%] w-fit">No fav Items yet</h2>
      )}
    </div>
  );
}
