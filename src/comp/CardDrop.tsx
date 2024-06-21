import { CardItem } from "../context";

interface CardDropProps {
  ProductList: CardItem[];
  hidden: boolean;
}

export default function CardDrop({ ProductList, hidden }: CardDropProps) {
  return (
    <div className="absolute right-[50%] top-10 z-[99] mx-auto h-[500px] w-96 divide-y-2 divide-black overflow-scroll rounded-lg border-2">
      {ProductList.map((ele) => (
        <div className="relative flex h-fit min-h-14 items-center justify-start bg-white py-4 text-lg">
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
    </div>
  );
}
