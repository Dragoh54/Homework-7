import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const user = localStorage.getItem("user");
      if (!user) {
        return redirect("/login");
      }
    },
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
