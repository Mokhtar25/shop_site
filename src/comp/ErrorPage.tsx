import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="h-[500px] border-2 border-t-black bg-slate-50">
      <div className="w-full p-8 text-8xl font-medium text-black">
        404 Not Found
      </div>
      <span className="p-9 text-xl text-black">
        It seems like you got lost, Dont worry it happens to everyone! Click{" "}
        <Link className="text-fuchsia-600" to="/">
          here{" "}
        </Link>{" "}
        to go back to the main page.
      </span>
    </div>
  );
}

export default ErrorPage;
