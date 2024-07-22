import { PropsWithChildren, useCallback } from 'react';
import { Column } from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import { Exit } from '../components/Icons';
import { useAuth } from '../hooks/useAuth';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // @ts-expect-error We don't provide a default.
  const { logOut } = useAuth();

  const handleClick = useCallback(() => {
    logOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Column $justify="space-between" className="relative mb-[4%]">
      <Column
        $width={100}
        $justify="flex-start"
        $align="flex-start"
        className="p-4"
      >
        <h1 className="screen-reader-text">TrackLifts</h1>
        <button
          onClick={handleClick}
          title="Sign Out"
          className="group fixed right-4 top-4"
        >
          <Exit />
          <p className="screen-reader-text">Sign Out</p>
        </button>
        <main>{children}</main>
      </Column>
      <NavigationBar />
    </Column>
  );
};

export default AuthLayout;
