import { ChangeEvent, useState } from "react";

import { v4 as uuidv4 } from "uuid";

interface PropsPage {
  children: React.ReactNode;
}

const catgories = ["Make up", "duften", "clothes", "all"];

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

export default function ShopPage({ children }: PropsPage) {
  const [selection, setSelection] = useState<Catgories[]>(setCat());
  const handelChange = (
    e: ChangeEvent<HTMLInputElement>,
    elementId: string,
  ) => {
      const newArray = [...selection]
      const index = newArray.findIndex((id) id === elementId)
    return 0;
  };
  const checked = false;
  const checkBoxStyle = " ";
  return (
    <div className="flex h-fit border-2 border-pink-50">
      <aside className="flex w-1/3 flex-col gap-8 bg-white text-black">
        <h2 className="p-4">side bar</h2>
        <ul className="flex flex-col gap-2 p-4">
          <h2 className="text-xl text-slate-600 before:block before:h-[2px] before:w-10/12 before:bg-slate-400">
            catgories
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
      <main className="flex flex-wrap gap-24 p-12 pl-20">{children}</main>
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
  return (
    <span className="group flex cursor-pointer flex-row-reverse items-center justify-end gap-2 rounded text-slate-600 transition-all hover:bg-slate-100">
      <label htmlFor="makeup">{title}</label>
      <input
        type="checkbox"
        className={className + " size-4 cursor-pointer accent-black"}
        checked={checked}
        onChange={(e) => onChange(e, id)}
      />
    </span>
  );
};
