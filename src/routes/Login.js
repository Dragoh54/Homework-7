import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, setPassword] = useState("");
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const userContext = useUserContext();

  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    userContext.setUser({ email, password });
    navigate("/");
  }, [email, password, navigate, userContext]);

  return (
    <div className="flex flex-col items-center gap-2">
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
