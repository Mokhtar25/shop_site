export const LoadingCard = () => {
  return (
    <div className="group relative flex h-72 w-52 cursor-pointer select-none flex-col items-center justify-between rounded border-2 border-white p-4 before:absolute before:bottom-0 before:-z-30 before:h-[40%] before:w-full before:bg-zinc-500 before:content-['']">
      <div
        // add not hover to avoid mouse issues
        className="size-32 animate-pulse rounded-3xl bg-gray-100 drop-shadow-lg transition-all duration-500 ease-out group-hover:pointer-events-none group-hover:z-50 group-hover:mb-10 group-hover:-translate-y-16 group-hover:scale-[200%]"
      ></div>

      <h1 className="h-2 w-20 animate-pulse rounded-xl bg-slate-200 text-center">
        {" "}
      </h1>
      <span className="mb-2 h-2 w-10 animate-pulse overflow-hidden rounded-xl bg-slate-200 duration-500 ease-in-out group-hover:mt-10 group-hover:transition-all"></span>
    </div>
  );
};
