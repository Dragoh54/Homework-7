import { useCallback, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, setPassword] = useState("");
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
  }, [email, password]);
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
