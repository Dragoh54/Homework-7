import { NavLink, Outlet } from "react-router-dom";
import { useUserContext } from "../components/userContext";

export default function Layout() {
  const user = useUserContext();

  const handleLogout = () => {
    user.setUser({ user: "" });
  };

  return (
    <div className="p-2">
      <header className="bg-slate-200 flex gap-4 justify-center mb-5">
        <NavLink to="/" end={true}>
          Home
        </NavLink>
        <button onClick={handleLogout} className="text-red-600">
          Log out
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
