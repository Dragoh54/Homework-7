import { NavLink } from "react-router-dom";
import { useUserContext } from "../components/userContext";

function Home() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="flex flex-col p-40">
      <div className="text-center text-5xl">Hello, {user.name}!</div>
      <h2 className="text-center text-4xl p-7">Choose what you want!</h2>
      <div className="text-3xl flex justify-around font-bold py-10">
        <NavLink
          to="/notes"
          className="flex justify-center p-2 border-2 w-44 h-16 rounded-md bg-slate-100 hover:bg-slate-300"
        >
          Notes
        </NavLink>
        <NavLink
          to="/about"
          className="flex justify-center p-2 border-2 w-44 h-16 rounded-md bg-slate-100 hover:bg-slate-300"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
