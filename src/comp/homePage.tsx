import { Link } from "react-router-dom";
import Mas from "./../assets/mas.avif";

// const pictureUrl =
//   "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png";

const HomePage = () => {
  return (
    <div className="relative box-border flex h-[600px] flex-col items-end pr-20 pt-10 text-8xl">
      <img
        className="absolute inset-0 left-5 top-[-100px] m-0 box-border select-none p-0"
        width={700}
        height={700}
        src={Mas}
        alt="Mascara Image"
      ></img>
      <div className="main-text ml-20 mr-12 box-border flex items-center justify-center gap-6">
        <span>Welcome to </span>
        <span className="pinkColor"> Sea shop</span>
      </div>
      <div className="mr-44 mt-20 box-border flex w-fit flex-col items-center gap-10 text-4xl">
        <div>
          Shop{" "}
          <span className="pinkColor box-border animate-pulse">
            world class{" "}
          </span>
          beauty Products
        </div>
        <Link to={"/shop"}>
          <button className="ml-2/4 bg-pink k rounded-xl border-2 border-white p-6 font-light text-white brightness-90 transition-all hover:brightness-110 active:scale-90">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
