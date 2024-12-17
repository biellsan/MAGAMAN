import React from 'react';
import { RouteObject } from 'react-router-dom';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';
import { Products } from '../pages/Products';
import { Customers } from '../pages/Customers';
import { Content } from '../pages/Content';
import { Analytics } from '../pages/Analytics';
import { Marketing } from '../pages/Marketing';
import { Settings } from '../pages/Settings/Settings';
import { GeneralSettings } from '../pages/Settings/GeneralSettings';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '',
    element: <DashboardLayout><Home /></DashboardLayout>
  },
  {
    path: 'orders',
    element: <DashboardLayout><Orders /></DashboardLayout>
  },
  {
    path: 'products',
    element: <DashboardLayout><Products /></DashboardLayout>
  },
  {
    path: 'customers',
    element: <DashboardLayout><Customers /></DashboardLayout>
  },
  {
    path: 'content',
    element: <DashboardLayout><Content /></DashboardLayout>
  },
  {
    path: 'analytics',
    element: <DashboardLayout><Analytics /></DashboardLayout>
  },
  {
    path: 'marketing',
    element: <DashboardLayout><Marketing /></DashboardLayout>
  },
  {
    path: 'settings/*',
    element: <DashboardLayout><Settings /></DashboardLayout>,
    children: [
      {
        path: '',
        element: <GeneralSettings />
      },
      // Outras rotas de configurações serão adicionadas aqui
    ]
  }
];