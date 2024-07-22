import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './assets/components/ErrorPage.tsx';
import PrivateRoutes from './routes/PrivateRoutes.tsx';
import Dashboard from './routes/Dashboard.tsx';
import History from './routes/History.tsx';
import Settings from './routes/Settings.tsx';
import Login from './routes/Login.tsx';
import SignUp from './routes/SignUp.tsx';
import { AuthProvider } from './assets/hooks/useAuth.tsx';
import PublicLayout from './assets/layouts/PublicLayout.tsx';
import WorkOut from './routes/WorkOut.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route errorElement={<ErrorPage />} element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/edit/:id" element={<WorkOut />} />
            <Route path="/create" element={<WorkOut />} />
          </Route>
          <Route errorElement={<ErrorPage />} element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
