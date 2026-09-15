import type { Permission } from '@enterprise/shared-types';

import { rolePermissions } from './permissions';
import { useAuth } from './useAuth';

export function usePermissions() {
  const { user } = useAuth();

  function hasPermission(permission: Permission): boolean {
    if (!user) {
      return false;
    }

    return rolePermissions[user.role].includes(permission);
  }

  return {
    hasPermission,
  };
}
