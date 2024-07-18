import { PropsWithChildren } from 'react';
import { Column } from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
const routes = [
  {
    title: 'Home',
    path: '/',
    icon: 'house',
  },
  {
    title: 'History',
    path: '/history',
    icon: 'history',
  },
];

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Column $justify="space-between" className="relative">
      <Column
        $width={100}
        $justify="flex-start"
        $align="flex-start"
        className="p-4 pb-0"
      >
        {children}
      </Column>
      <NavigationBar routes={routes} />
    </Column>
  );
};

export default AuthLayout;
