import { Navigate } from "react-router-dom";
import { useUserContext } from "./userContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }
  return children;
};
