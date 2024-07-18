import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./assets/components/ErrorPage.tsx";
import PrivateRoutes from "./routes/PrivateRoutes.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import History from "./routes/History.tsx";
import Login from "./routes/Login.tsx";
import { AuthProvider } from "./assets/hooks/useAuth.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route errorElement={<ErrorPage />} element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
