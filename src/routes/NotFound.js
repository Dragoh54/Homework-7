import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col font-bold text-7xl items-center p-20 gap-4">
      <h1>ERROR 404</h1>
      <h2>page not found</h2>
      <div>
        <NavLink to="/" className="text-blue-200">
          <h2>Go Home</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
