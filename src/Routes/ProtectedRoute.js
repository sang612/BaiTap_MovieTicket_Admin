import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // kiem tra xem user da dang nhap hay chua
  const { user } = useSelector((state) => state.AuthReducer);

  if (!user) {
    // chua dang nhap
    return <Navigate to="/login" />;
  }

  // da dang nhap

  return children;
};

export default ProtectedRoute;
