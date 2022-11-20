import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import UserContextProvider from "./components/userContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./routes/Register";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import Notes, { notesLoader } from "./routes/Notes";
import CreateNote from "./routes/CreateNote";
import NoteContextProvider from "./components/NoteContext";

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
        path: "about",
        element: <About />,
      },
      {
        path: "notes",
        element: <Notes />,
        loader: notesLoader,
      },
      {
        path: "create",
        element: <CreateNote />,
      },
      {
        path: "*",
        element: <NotFound />,
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
      <NoteContextProvider>
        <RouterProvider router={router} />
      </NoteContextProvider>
    </UserContextProvider>
  );
}
