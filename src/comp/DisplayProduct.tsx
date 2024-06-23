import { FC, useContext, useEffect } from "react";
import { itemsContext, products } from "../context";
import { useNavigate, useParams } from "react-router-dom";

const DisplayProduct = () => {
  const nav = useNavigate();
  const items = useContext(products);
  const listItems = useContext(itemsContext);
  let { id }: any = useParams();
  if (!id) id = -1;
  const item = items.find((e) => e.id === +id);

  useEffect(() => {
    if (!id || !items || items.length < +id) {
      nav("/");
      return;
    }
    if (!item) {
      nav("/");
      return;
    }
  }, []);

  if (!item) return;
  const addToCart = () => {
    const index = listItems.card.cardItems.findIndex(
      (e) => e.product.id === item.id,
    );

    if (index === -1) {
      listItems.card.setCardItems([
        ...listItems.card.cardItems,
        { product: item, amount: 1 },
      ]);
    } else {
      listItems.card.setCardItems(
        listItems.card.cardItems.map((ele) =>
          ele.product.id === item.id
            ? { product: ele.product, amount: ele.amount + 1 }
            : ele,
        ),
      );
    }
  };

  return (
    <div className="flex min-h-[500px] flex-grow flex-col justify-start p-20 sm:flex-row">
      <img
        className="size-[450px] min-h-96 min-w-96 cursor-pointer rounded-lg bg-slate-100 bg-opacity-25 transition-all duration-700 hover:scale-110"
        src={item?.images[0]}
        alt={item?.title}
      ></img>
      <div className="relative flex h-full w-full flex-col border-white p-10">
        <h2 className="text-4xl font-bold text-slate-50">{item?.title}</h2>
        <h2 className="text-slate-300">{item?.brand}</h2>
        <span className="flex items-center gap-1 py-4 text-sm text-gray-100">
          <InStock className="size-6 fill-slate-200"></InStock>
          {item?.availabilityStatus}
        </span>
        <span className="text-xl font-medium tracking-wide text-zinc-200">
          {item?.price}€
        </span>
        <p className="mt-16">{item?.description}</p>
        <span className="absolute right-2 top-12 text-lg text-amber-50">
          {item?.rating}/5 ({item?.reviews.length})
        </span>
        <button
          onClick={addToCart}
          className="mt-16 h-10 rounded-xl border-2 border-white transition-all duration-200 hover:bg-neutral-500 hover:bg-opacity-25 active:bg-opacity-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const InStock = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 -960 960 960"
    >
      <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path>{" "}
    </svg>
  );
};

export default DisplayProduct;
