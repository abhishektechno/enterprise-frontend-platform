import { createBrowserRouter, redirect } from 'react-router';
import { AppLayout } from '../layouts/AppLayout';
import { AuthLayout } from '../layouts/AuthLayout';

import { AdminLayout } from '../layouts/AdminLayout';

import { RolesPage } from '../pages/admin/RolesPage';
import { SettingsPage } from '../pages/admin/SettingsPage';
import { UsersPage } from '../pages/admin/UsersPage';

import { CatalogPage } from '../pages/CatalogPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OrdersPage } from '../pages/OrdersPage';
import { RequireAuth } from '../auth/RequireAuth';

export const router = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: LoginPage,
      },
    ],
  },

  {
    Component: RequireAuth,

    children: [
      {
        path: '/',
        Component: AppLayout,

        children: [
          {
            index: true,
            Component: DashboardPage,
          },
          {
            path: 'catalog',
            Component: CatalogPage,
          },
          {
            path: 'orders',
            Component: OrdersPage,
          },
          {
            path: 'admin',
            Component: AdminLayout,

            children: [
              {
                index: true,
                loader: () => redirect('/admin/users'),
              },
              {
                path: 'users',
                Component: UsersPage,
              },
              {
                path: 'roles',
                Component: RolesPage,
              },
              {
                path: 'settings',
                Component: SettingsPage,
              },
            ],
          },
          {
            path: '*',
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
]);
