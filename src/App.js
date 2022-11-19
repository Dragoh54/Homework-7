import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import UserContextProvider from "./components/userContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./routes/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <h1>Not Found!</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}
