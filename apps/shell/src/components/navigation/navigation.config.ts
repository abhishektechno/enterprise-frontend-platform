export interface NavigationItem {
  label: string;
  to: string;
  end?: boolean;
  requiredPermission?: Permissions;
}
export const primaryNavigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    to: '/',
    end: true,
  },
  {
    label: 'Catalog',
    to: '/catalog',
  },
  {
    label: 'Orders',
    to: '/orders',
  },
  {
    label: 'Administration',
    to: '/admin',
  },
];
