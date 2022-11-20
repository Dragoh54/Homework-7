import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "../components/CustomLink";
import { useUserContext } from "../components/userContext";

export default function Layout() {
  const user = useUserContext();
  const handleLogout = () => {
    user.setUser({});
  };
  console.log(user);
  return (
    <div className="p-2">
      <header className=" flex gap-4 justify-between h-10 items-center mx-10">
        <div className="flex font-bold text-2xl">
          <NavLink to="/about">{user.user.name}</NavLink>
        </div>
        <div className="flex gap-4 text-2xl">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/notes">Notes</CustomLink>
          <button onClick={handleLogout} className="cursor-pointer">
            Log out
          </button>
        </div>
      </header>
      <main className="min-h-85vh py-10 px-10">
        <Outlet />
      </main>
      <footer className="sticky border-t-black top-full flex justify-between text-2xl text-gray-500 mx-10">
        <h2>created by: Nikita Drako</h2>
        <h2>BSU 2022</h2>
      </footer>
    </div>
  );
}
