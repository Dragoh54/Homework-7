import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col">
      <h1>ERROR 404</h1>
      <h2>page not found</h2>
      <div>
        <NavLink to="/">
          <h2>Go Home</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
