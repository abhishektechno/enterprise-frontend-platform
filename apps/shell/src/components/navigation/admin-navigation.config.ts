import type { NavigationItem } from './navigation.config';

export const adminNavigation: NavigationItem[] = [
  {
    label: 'Users',
    to: '/admin/users',
  },
  {
    label: 'Roles',
    to: '/admin/roles',
  },
  {
    label: 'Settings',
    to: '/admin/settings',
  },
];
