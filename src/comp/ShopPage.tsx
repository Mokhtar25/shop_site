import { ChangeEvent, useState } from "react";

interface PropsPage {
  children: React.ReactNode;
}

export default function ShopPage({ children }: PropsPage) {
  const [selection, setSelection] = useState();
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    return e;
  };
  const checked = false;
  const checkBoxStyle = " sa";
  return (
    <div className="flex h-fit border-2 border-pink-50">
      <aside className="flex w-1/3 flex-col gap-8 bg-white text-black">
        <h2 className="p-4">side bar</h2>
        <ul className="flex flex-col gap-2 p-4">
          <h2 className="text-xl text-slate-600 before:block before:h-[2px] before:w-10/12 before:bg-slate-400">
            catgories
          </h2>
          <label htmlFor="makeup">Make Up</label>
          <input
            id="makeup"
            type="checkbox"
            className={checkBoxStyle}
            checked={checked}
            onChange={(e) => handelChange(e)}
          />
          <input
            type="checkbox"
            className={checkBoxStyle}
            checked={checked}
            onChange={(e) => handelChange(e)}
          />
          <input
            type="checkbox"
            className={checkBoxStyle}
            checked={checked}
            onChange={(e) => handelChange(e)}
          />
          <input
            type="checkbox"
            className={checkBoxStyle}
            checked={checked}
            onChange={(e) => handelChange(e)}
          />
          <input
            type="checkbox"
            className={checkBoxStyle}
            checked={checked}
            onChange={(e) => handelChange(e)}
          />
        </ul>
      </aside>
      <main className="flex flex-wrap gap-24 p-12 pl-20">{children}</main>
    </div>
  );
}
