import { useContext } from "react";
import { CardItem, itemsContext } from "../context";
import { getTotalPrice } from "../utils/utilsItems";

export const CheckoutPage = () => {
  const items = useContext(itemsContext);
  const total = getTotalPrice(items.card.cardItems);

  // add pinkish and the cool gradents to ttitels
  // add buttons to add and remove the stuff and incress stuff
  // use inset to make abouslte divs centered
  return (
    <div className="flex min-h-[500px] border-2 bg-slate-100 pb-36">
      <div className="flex-grow flex-col bg-slate-100">
        <h1 className="p-10 text-3xl text-black">Shopping Cart</h1>
        <div className="divide-y-2 divide-slate-300 pl-1">
          {items.card.cardItems.length !== 0 &&
            items.card.cardItems.map((ele) => (
              <ItemCard key={ele.product.id - 1000} product={ele} />
            ))}
        </div>
      </div>

      <div className="relative flex w-1/3 justify-center pt-16 text-black">
        <div className="fixed flex h-fit flex-col rounded-lg border-[1px] border-black p-8 px-16 py-12">
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

const ItemCard = ({ product }: { product: CardItem }) => {
  return (
    <div className="flex border-neutral-700 bg-neutral-100 bg-opacity-20 text-black hover:bg-neutral-200 hover:bg-opacity-50">
      <img
        src={product.product.thumbnail}
        alt={product.product.title}
        className="size-40 overflow-hidden bg-slate-100 bg-opacity-60"
      ></img>
      <div className="flex flex-col p-8">
        <h3 className="text-xl">{product.product.title}</h3>
        <h3> Quantity : {product.amount}</h3>
        <span>{product.product.shippingInformation}</span>
        <span className=""> {product.product.price}€</span>
      </div>
    </div>
  );
};
