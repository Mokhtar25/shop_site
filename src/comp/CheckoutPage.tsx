import { useContext } from "react";
import { CardItem, ContextItems, itemsContext } from "../context";
import {
  addItemToCart,
  getTotalPrice,
  removeFromCard,
} from "../utils/utilsItems";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  const items = useContext(itemsContext);
  const total = getTotalPrice(items.card.cardItems);

  // add pinkish and the cool gradents to ttitels
  // add buttons to add and remove the stuff and incress stuff
  // use inset to make abouslte divs centered
  return (
    <div className="flex min-h-[500px] border-2 bg-slate-100 pb-36">
      <div className="flex-grow flex-col bg-slate-100">
        <h1 className="pinkColor p-10 text-3xl font-bold">Shopping Cart</h1>
        <div className="divide-y-2 divide-slate-300 pl-1">
          {items.card.cardItems.length !== 0 &&
            items.card.cardItems.map((ele) => (
              <ItemCard
                key={ele.product.id - 1000}
                product={ele}
                contextItems={items}
              />
            ))}
        </div>
      </div>

      <div className="relative flex w-1/3 justify-center pt-16 text-black">
        <div className="fixed flex h-fit flex-col rounded-lg border-[1px] border-slate-400 p-8 px-16 py-12">
          <h2 className="text-2xl text-black">Order Summary</h2>
          <span className="my-8 text-xl font-bold text-black">{total}€</span>
          <span className="text-slate-700">
            Includes Free shipping and Taxes
          </span>
          <span className="mx-auto my-8 mt-16 h-1 w-[100%] rounded-lg bg-slate-600 bg-opacity-50"></span>
          <button
            disabled={true}
            className="shake mx-auto h-16 w-2/3 cursor-not-allowed rounded-lg bg-rose-700 text-xl text-neutral-200 transition-all hover:brightness-75"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const ItemCard = ({
  contextItems,
  product,
}: {
  contextItems: ContextItems;
  product: CardItem;
}) => {
  const nav = useNavigate();

  const handelPage = () => {
    nav(`/shop/${product.product.id}`);
  };
  const handelRemove = () => {
    removeFromCard(contextItems, product.product, 1);
  };
  const handelAdd = () => {
    addItemToCart(contextItems, product.product);
  };
  const handelClick = () => {
    removeFromCard(contextItems, product.product, 0);
  };
  const countStyle =
    "flex size-6 items-center justify-center rounded border-[1px] border-slate-400 p-2 text-xl font-light text-slate-500";
  return (
    <div className="relative flex border-neutral-700 bg-neutral-100 bg-opacity-20 text-black transition-all hover:rounded-lg hover:bg-neutral-200 hover:bg-opacity-50">
      <img
        onClick={handelPage}
        src={product.product.thumbnail}
        alt={product.product.title}
        className="size-40 cursor-pointer overflow-hidden"
      ></img>
      <div className="flex flex-col p-8">
        <h3 className="cursor-pointer text-xl" onClick={handelPage}>
          {product.product.title}
        </h3>
        <h3> Quantity : {product.amount}</h3>
        <span>{product.product.shippingInformation}</span>
        <span className=""> {product.product.price}€</span>
        <span className="absolute right-1/4 top-2/4 flex items-center justify-center gap-x-4">
          <button className={countStyle} onClick={handelClick}>
            -
          </button>
          <p className="w-2">{product.amount}</p>
          <button className={countStyle} onClick={handelAdd}>
            +
          </button>
        </span>
        <button
          className="absolute right-4 top-8 size-6 fill-red-300 transition-all hover:fill-rose-500"
          onClick={handelRemove}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
