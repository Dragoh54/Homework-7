import { Outlet } from "react-router-dom";
import { CustomLink } from "../components/CustomLink";
import { useUserContext } from "../components/userContext";

export default function Layout() {
  const user = useUserContext();
  const handleLogout = () => {
    console.log(user);
    user.setUser({});
  };
  console.log(user);
  return (
    <div className="p-2">
      <header className="bg-slate-200 flex gap-4 justify-between mb-5 h-10 items-center">
        <div className="flex gap-4 p-10">Hello, {user.user.name}!</div>
        <div className="flex gap-4 p-10">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/notes">Notes</CustomLink>
          <button onClick={handleLogout} className="cursor-pointer">
            Log out
          </button>
        </div>
      </header>
      <main className="min-h-90hv">
        <Outlet />
      </main>
      <footer className="sticky border-t-black top-full flex justify-between">
        <h2>created by: Nikita Drako</h2>
        <h2>BSU 2022</h2>
      </footer>
    </div>
  );
}
