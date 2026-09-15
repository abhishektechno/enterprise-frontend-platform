import type { Permission } from '@enterprise/shared-types';

export interface NavigationItem {
  label: string;
  to: string;
  end?: boolean;
  requiredPermission?: Permission;
}
export const primaryNavigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    to: '/',
    end: true,
    requiredPermission: 'dashboard:view',
  },
  {
    label: 'Catalog',
    to: '/catalog',
    requiredPermission: 'catalog:view',
  },
  {
    label: 'Orders',
    to: '/orders',
    requiredPermission: 'orders:view',
  },
  {
    label: 'Administration',
    to: '/admin',
    requiredPermission: 'admin:view',
  },
];
