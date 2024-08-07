import { useNavigate } from "react-router-dom";
import { SetStateAction, useContext, useRef } from "react";
import { Product } from "../types";
import { HeartIcon } from "./Card";
import { itemsContext } from "../context";
import { toggleToFav } from "../utils/utilsItems";

interface FavDropProps {
  favList: Product[];
  hide: boolean;
  open: React.Dispatch<SetStateAction<boolean>>;
}

export default function FavDropDown({ favList, hide, open }: FavDropProps) {
  const nav = useNavigate();
  const div = useRef<HTMLDivElement>(null);
  // you can use destructing to get the values that are wanted only
  // const {liked} = ...
  const items = useContext(itemsContext);

  div.current?.addEventListener("mouseleave", () => {
    open(true);
  });
  const handelClick = (ele: Product) => {
    nav(`/shop/${ele.id}`);
    open(true);
  };
  const handelToggle = (e: React.MouseEvent<SVGElement>, ele: Product) => {
    e.stopPropagation();
    toggleToFav(items, ele);
  };

  return (
    <div
      title="Liked items"
      ref={div}
      className={
        "no-scrollbar absolute right-[25%] top-16 z-[99] mx-auto box-border w-96 select-none divide-y-2 divide-rose-200 overflow-y-scroll rounded-lg bg-neutral-200 outline-red-300 transition-all duration-300" +
        (hide ? " h-0" : " h-[500px] border-2 border-neutral-500")
      }
    >
      {favList.map((ele) => (
        <div
          key={ele.id + 8000}
          onClick={() => handelClick(ele)}
          className="relative flex h-fit min-h-14 cursor-pointer items-center justify-start bg-white py-4 text-lg transition-all hover:bg-slate-100"
        >
          <img className="size-14" src={ele.thumbnail} alt={ele.title}></img>
          <div className="p-1">{ele.title}</div>

          <HeartIcon
            className="ml-auto mr-4 size-5"
            active={true}
            onClick={(e) => handelToggle(e, ele)}
          />
        </div>
      ))}

      {favList.length === 0 && (
        <h2 className="mx-auto mt-[50%] w-fit">No fav Items yet</h2>
      )}
    </div>
  );
}
