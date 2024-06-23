import { Link } from "react-router-dom";

const pictureUrl =
  "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png";

export default function HomePage() {
  return (
    <div className="flex h-[600px] flex-col text-8xl">
      <div className="absolute bottom-3/4 right-40">
        Welcome to{" "}
        <span className="pinkColor animate-pulse font-medium">Sea shop</span>
      </div>

      <img
        className="absolute left-[-80px] top-[-80px] size-[700px] rotate-12 select-none"
        src={pictureUrl}
      ></img>

      <div className="absolute right-40 top-[40%] flex flex-col items-center justify-center gap-10 text-4xl">
        <div>
          Shop <span className="pinkColor">world class </span>beauty Products
        </div>
        <Link to={"/shop"}>
          <button className="ml-2/4 bg-pink rounded-xl border-2 border-white p-6 transition-all hover:brightness-110 active:scale-50">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
}
