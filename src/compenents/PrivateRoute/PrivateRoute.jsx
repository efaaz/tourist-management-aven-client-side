import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Spinner from "../Loading/Spinner";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Spinner></Spinner>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/Sign-in"></Navigate>;
}

export default PrivateRoute;