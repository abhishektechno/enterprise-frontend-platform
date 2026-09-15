import type { Permission, Role } from '@enterprise/shared-types';

export const rolePermissions: Record<Role, readonly Permission[]> = {
  viewer: ['dashboard:view', 'orders:view'],

  manager: ['dashboard:view', 'catalog:view', 'orders:view', 'orders:edit'],

  admin: ['dashboard:view', 'catalog:view', 'orders:view', 'orders:edit', 'admin:view'],
};
