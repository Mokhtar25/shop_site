import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";
import { products } from "../context";
import { Product } from "../types";
import { getItemsByCat } from "../utils/utils";
import { LoadingCard } from "./Loadingcard";

const catgories = ["beauty", "mens-watches", "skin-care", "sunglasses"];

interface Catgories {
  id: string;
  name: string;
  selected: boolean;
}
const setCat = () => {
  const items = [];

  for (const item of catgories) {
    const temp = {
      id: uuidv4(),
      name: item,
      selected: false,
    };
    items.push(temp);
  }
  return items;
};

export default function ShopPage() {
  const [selection, setSelection] = useState<Catgories[]>(setCat());
  const [currentCat, setCurrentCat] = useState("all");
  const [loading, setLoading] = useState(false);

  const allItems = useContext(products);
  const [items, setItems] = useState<Product[]>([]);
  const checkBoxStyle = " accent-black";

  const fetchItems = (e: string, abort: AbortController) => {
    setLoading(true);
    if (e === "all") {
      setItems(allItems);
      setLoading(false);
    } else {
      getItemsByCat(e, abort)
        .then((e) => setItems(e))
        .then(() => setLoading(false));
    }
  };

  useEffect(() => {
    const abort = new AbortController();
    fetchItems(currentCat, abort);

    return () => abort.abort();
  }, [currentCat, allItems]);

  const handelChange = (
    e: ChangeEvent<HTMLInputElement>,
    elementId: string,
  ) => {
    const newArray = selection.map((ele) =>
      ele.id === elementId
        ? { ...ele, selected: e.target.checked }
        : { ...ele, selected: false },
    );
    setSelection(newArray);

    const all = newArray.findIndex((e) => e.selected === true);
    if (all === -1) {
      setCurrentCat("all");
      return;
    }

    const index = selection.findIndex((e) => e.id === elementId);
    setCurrentCat(selection[index].name);
  };

  return (
    <div className="relative flex h-fit border-2 border-pink-50">
      <aside className="flex w-1/3 flex-col gap-8 bg-white text-black">
        <h2 className="pinkColor mt-2 p-2 px-4 text-5xl font-medium">
          Sea Shop
        </h2>
        <ul className="flex flex-col gap-3 p-4">
          <h2 className="text-xl text-slate-600 before:block before:h-[2px] before:w-10/12 before:bg-slate-400">
            Categories
          </h2>
          {selection.map((e) => (
            <CheckBox
              id={e.id}
              key={e.id}
              title={e.name}
              className={checkBoxStyle}
              onChange={handelChange}
              checked={e.selected}
            />
          ))}
        </ul>
      </aside>
      <main
        className={
          "relative flex min-h-dvh w-[100%] flex-wrap gap-24 p-12 pl-20 transition-all after:absolute after:inset-0 after:h-full after:w-full after:animate-pulse after:bg-white after:bg-opacity-30" +
          (loading ? " " : " after:hidden")
        }
      >
        {items && items.length > 0 ? (
          items.map((e: Product) => <Card key={e.id} product={e} />)
        ) : (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        )}
      </main>
    </div>
  );
}

interface checkBoxProps {
  title: string;
  className: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  id: string;
}

const CheckBox = ({
  title,
  id,
  className,
  checked,
  onChange,
}: checkBoxProps) => {
  const inputElm = useRef<HTMLInputElement>(null);

  const handelClick = (e: any) => {
    // prevent double clicks
    if (inputElm.current && inputElm.current.contains(e.target)) {
      return;
    }
    inputElm.current?.click();
  };
  return (
    <span
      className="group flex cursor-pointer flex-row-reverse items-center justify-end gap-2 rounded text-slate-600 transition-all hover:bg-slate-100"
      onClick={handelClick}
    >
      <label htmlFor="makeup" className="cursor-pointer select-none">
        {title}
      </label>
      <input
        ref={inputElm}
        type="checkbox"
        className={className + " size-4 cursor-pointer accent-black"}
        checked={checked}
        onChange={(e) => onChange(e, id)}
      />
    </span>
  );
};
