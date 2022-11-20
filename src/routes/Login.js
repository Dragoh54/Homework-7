import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useUserContext();
  const navigate = useNavigate();
  const [errorUserData, setErrorUserData] = useState("");

  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
          console.log(userContext);
          navigate("/");
        } else {
          setErrorUserData("Incorrect email or password");
        }
      });
  }, [email, password, navigate, userContext]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate("/");
    }
  }, [userContext.user, navigate]);

  return (
    <div className="flex flex-col items-center gap-7 p-20 bg-slate-300 rounded-md h-fit w-fit mx-auto my-24 ">
      <h1 className="text-2xl">Log in</h1>
      <h2 className="text-red-500">{errorUserData}</h2>
      <input
        placeholder="email"
        value={email}
        onChange={handleSetEmail}
        className="border-black border-b-2 h-10 bg-slate-300 w-50"
      />
      <input
        placeholder="password"
        value={password}
        type="password"
        onChange={handleSetPassword}
        className="border-black border-b-2 h-10 bg-slate-300 w-50"
      />
      <button
        onClick={handleLogin}
        className="bg-violet-500 cursor-pointer p-1 w-full rounded-md text-lg"
      >
        Login
      </button>
      <Link
        to="/register"
        className="bg-violet-500 cursor-pointer p-1 w-full rounded-md text-lg text-center"
      >
        Register
      </Link>
    </div>
  );
}

export default Login;
