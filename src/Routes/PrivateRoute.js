import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth";

function PrivateRoute({ children }) {
  const auth = useAuth();

  const location = useLocation();

  if (!auth.user) return <Navigate to="/login" state={{ from: location }} />;
  return children;
}

export default PrivateRoute;
