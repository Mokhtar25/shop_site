import { Link } from "react-router-dom";
import Mas from "./../assets/mas.png";

// const pictureUrl =
//   "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png";
//
// fix issue with postionen the picture on the web. it is possibly difference between reading

// <img
// className="absolute top-[-80px] size-[700px] rotate-12 select-none"
// src={Mas}
// ></img>
//
const HomePage = () => {
  return (
    <div className="relative box-border h-[600px] border-2 border-red-500 text-8xl">
      <div className="ml-20 box-border flex justify-center gap-6 border-2 border-green-700 p-10">
        <span>Welcome to</span>
        <span className="pinkColor w-fit animate-pulse border-2 border-blue-700">
          {" "}
          Sea shop
        </span>
      </div>
      <div className="box-border border-2 border-white text-4xl">
        <div>
          Shop{" "}
          <span className="box-border border-2 border-white">world class </span>
          beauty Products
        </div>
        <Link to={"/shop"}>
          <button className="ml-2/4 bg-pink rounded-xl border-2 border-white p-6 transition-all hover:brightness-110 active:scale-50">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
