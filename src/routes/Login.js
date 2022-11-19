import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
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
          navigate("/");
        } else {
          setErrorUserData("Неправильный email или пароль");
        }
      });
  }, [email, password, navigate, userContext]);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-red-500">{errorUserData}</h2>
      <input placeholder="email" value={email} onChange={handleSetEmail} />
      <input
        placeholder="password"
        value={password}
        type="password"
        onChange={handleSetPassword}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
