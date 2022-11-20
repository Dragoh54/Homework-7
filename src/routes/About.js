import { NavLink } from "react-router-dom";
import { useUserContext } from "../components/userContext";

function About() {
  const { user } = useUserContext();
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-center">About you</h1>
      <div className="flex gap-16 justify-center py-10">
        <div className="flex flex-col my-auto">
          <img src="avatar.jpg" width="320px" alt="avatar" />
        </div>
        <div className="flex flex-col border-4 rounded-md w-6/12 h-80 text-3xl gap-5 justify-between py-10 px-7">
          <h1>Email: {user.email}</h1>
          <h1>Name: {user.name}</h1>
          <h1>Date of registeration: {user.date}</h1>
        </div>
      </div>
      <div className="text-3xl flex justify-around font-bold py-10">
        <NavLink
          to="/notes"
          className="flex justify-center p-2 border-2 w-44 h-16 rounded-md bg-slate-100"
        >
          Notes
        </NavLink>
        <NavLink
          to="/"
          className="flex justify-center p-2 border-2 w-44 h-16 rounded-md bg-slate-100"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default About;
