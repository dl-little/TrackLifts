import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../assets/hooks/useAuth';

const PrivateRoutes = () => {
  //@ts-expect-error We're not providing a default.
  const { user } = useAuth();

  return (
    user ? <Outlet /> : <Navigate to={"/login/"} />
  )
}

export default PrivateRoutes;