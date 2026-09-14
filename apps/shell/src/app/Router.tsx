import { createBrowserRouter } from 'react-router';

import { AppLayout } from '../layouts/AppLayout';
import { AdministrationPage } from '../pages/AdministrationPage';
import { CatalogPage } from '../pages/CatalogPage';
import { DashboardPage } from '../pages/DashboardPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OrdersPage } from '../pages/OrdersPage';

export const router = createBrowserRouter([
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
        path: 'administration',
        Component: AdministrationPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
