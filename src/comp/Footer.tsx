export default function Footer() {
  return (
    <footer className="flex w-full justify-between border-b-0 border-t-2 border-slate-200 bg-neutral-800 px-28 py-4 font-light text-slate-300">
      <ul className="cursor-pointer">
        <li>About</li>
        <li>Print</li>
        <li>Terms & Conditions</li>
        <li>Privacy Notice</li>
        <li className="pt-8 text-slate-500 hover:cursor-auto">
          *This is not a real Service or a real Store. Demo only{" "}
        </li>
      </ul>
      <div>
        <ul className="mr-80 cursor-pointer">
          <li>
            <a
              className="hover:text-white active:text-slate-300"
              href="https://github.com/Mokhtar25"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>Instagram</li>
          <li>FaceBook</li>
          <li>Email</li>
          <li className="cursor-auto pt-8 text-slate-400">
            &copy; 2024 Mokhtar
          </li>
        </ul>
      </div>
    </footer>
  );
}
