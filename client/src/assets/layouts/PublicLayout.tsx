import { Outlet } from 'react-router-dom';
import { Column } from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { Heading } from '../components/Utils';

const PublicLayout = () => {
  // @ts-expect-error We don't provide a default.
  const { loading } = useAuth();
  return (
    <Column $disabled={!!loading}>
      <Heading>TrackLifts</Heading>
      <Outlet />
    </Column>
  );
};

export default PublicLayout;
