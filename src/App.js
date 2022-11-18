import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Login from "./routes/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
