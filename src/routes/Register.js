import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [errorUserData, setErrorUserData] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = {
      id: Date.now().toString(),
      email: "123",
      password: "1234",
      name: "dodic",
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(navigate("/login"))
      .catch(setErrorUserData("Bad user data"));
  };

  return (
    <div>
      <h2 className="text-red-500">{errorUserData}</h2>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;

// import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

//   const [password, setPassword] = useState("");
//   const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

//   const [repeatPass, setRepeatPass] = useState("");
//   const handleSetRepeatPass = useCallback(
//     (e) => setRepeatPass(e.target.value),
//     []
//   );

//   const handleRegister = () => {
//     const user = {
//       email: email,
//       password: password,
//       createdAt: new Date().toLocaleString(),
//     };
//     password === repeatPass
//       ? fetch("http://localhost:5000/users", {
//           method: "POST",
//           body: JSON.stringify(user),
//           headers: {
//             "Content-type": "application/json",
//           },
//         })
//           .then(() => {
//             navigate("/login");
//           })
//           .catch(() => {
//             alert("Bad");
//           })
//       : alert("Repeat password correctly!");
//   };

//   return (
//     <div className="flex flex-col items-center gap-1 mt-10">
//       <input placeholder="email" value={email} onChange={handleSetEmail} />
//       <input
//         placeholder="password"
//         type="password"
//         value={password}
//         onChange={handleSetPassword}
//       />
//       <input
//         placeholder="repeat password"
//         type="password"
//         value={repeatPass}
//         onChange={handleSetRepeatPass}
//       />
//       <button onClick={handleRegister}>Sign up</button>
//     </div>
//   );
// }

// export default Register;
