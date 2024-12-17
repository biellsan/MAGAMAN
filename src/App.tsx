import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Orders } from './pages/Orders';
import { Products } from './pages/Products';
import { Dashboard } from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { PolarisProvider } from './providers/PolarisProvider';
import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './pages/Home';
import { Customers } from './pages/Customers';
import { Content } from './pages/Content';
import { Analytics } from './pages/Analytics';
import { Marketing } from './pages/Marketing';
import { OnlineStore } from './pages/OnlineStore';
import { Settings } from './pages/Settings';
import ThemeUpload from './pages/ThemeUpload';

function App() {
  return (
    <PolarisProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register/*" element={<Register />} />
            
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
                <Route path="customers" element={<Customers />} />
                <Route path="content" element={<Content />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="marketing" element={<Marketing />} />
                <Route path="online-store" element={<OnlineStore />} />
                <Route path="settings/*" element={<Settings />} />
              </Route>
            </Route>

            <Route path="/themes/upload" element={<ThemeUpload />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </PolarisProvider>
  );
}

export default App;