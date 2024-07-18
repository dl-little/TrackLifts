import { Navigate, Outlet } from 'react-router-dom';
import { Column } from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { Heading } from '../components/Utils';
import LoadingSpinner from '../components/LoadingSpinner';

const PublicLayout = () => {
  // @ts-expect-error We don't provide a default.
  const { loading, user } = useAuth();

  return user ? (
    <Navigate replace to={'/'} />
  ) : loading ? (
    <LoadingSpinner />
  ) : (
    <Column $disabled={!!loading} className="p-4">
      <Heading>TrackLifts</Heading>
      <Outlet />
    </Column>
  );
};

export default PublicLayout;
