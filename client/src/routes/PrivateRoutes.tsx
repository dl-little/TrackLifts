import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../assets/hooks/useAuth";
import LoadingSpinner from "../assets/components/LoadingSpinner";
import AuthLayout from "../assets/layouts/AuthLayout";

const PrivateRoutes = () => {
  //@ts-expect-error We're not providing a default.
  const { user, loading } = useAuth();

  return user ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : loading ? (
    <LoadingSpinner />
  ) : (
    <Navigate to={"/login/"} />
  );
};

export default PrivateRoutes;
