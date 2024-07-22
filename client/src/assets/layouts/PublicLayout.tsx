import { Navigate, Outlet } from 'react-router-dom';
import { Column } from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { Heading } from '../components/Utils';

const PublicLayout = () => {
  // @ts-expect-error We don't provide a default.
  const { loading, user } = useAuth();

  return user ? (
    <Navigate replace to={'/'} />
  ) : (
    <Column $disabled={!!loading} $height={100} className="p-4">
      <Heading>TrackLifts</Heading>
      <Outlet />
    </Column>
  );
};

export default PublicLayout;
