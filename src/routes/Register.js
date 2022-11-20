import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

function Register() {
  const [errorUserData, setErrorUserData] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);
  const handleSetName = useCallback((e) => setName(e.target.value), []);
  const handleSetRepeatPassword = useCallback(
    (e) => setRepeatPassword(e.target.value),
    []
  );

  const navigate = useNavigate();

  const handleRegister = () => {
    const user = {
      id: Date.now().toString(),
      email: email,
      password: password,
      name: name,
      date: new Date(),
    };

    if (password === repeatPassword) {
      fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(navigate("/login"))
        .catch(setErrorUserData("Bad user data"));
    } else {
      setErrorUserData("Passwords are not equal");
    }
  };

  return (
    <div className="flex flex-col items-center gap-7 p-20 bg-slate-300 rounded-md h-fit w-fit mx-auto my-24 ">
      <h1 className="text-2xl">Registration form</h1>
      <h2 className="text-red-500">{errorUserData}</h2>
      <input
        onChange={handleSetEmail}
        placeholder="email"
        className="border-black border-b-2 h-10 bg-slate-300 w-50"
      />
      <input
        placeholder="password"
        value={password}
        type="password"
        onChange={handleSetPassword}
        className="border-black border-b-2 h-10 bg-slate-300 w-50"
      />
      <input
        placeholder="repeat password"
        type="password"
        onChange={handleSetRepeatPassword}
        value={repeatPassword}
        className="border-black border-b-2 h-10 bg-slate-300 w-50"
      />
      <input
        placeholder="name"
        onChange={handleSetName}
        className="border-black border-b-2 h-10 bg-slate-300 w-50"
      />
      <button
        onClick={handleRegister}
        className="bg-violet-500 cursor-pointer p-1 w-full rounded-md text-lg"
      >
        Register
      </button>
    </div>
  );
}

export default Register;
