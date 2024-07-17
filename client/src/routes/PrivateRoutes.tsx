import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../assets/hooks/useAuth';
import LoadingSpinner from '../assets/components/LoadingSpinner';

const PrivateRoutes = () => {
  //@ts-expect-error We're not providing a default.
  const { user, loading } = useAuth();

  return (
    user ? <Outlet /> : loading ? <LoadingSpinner /> : <Navigate to={"/login/"} />
  )
}

export default PrivateRoutes;