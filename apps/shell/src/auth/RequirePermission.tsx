import type { Permission } from '@enterprise/shared-types';

import { Navigate, Outlet, useLocation } from 'react-router';

import { usePermissions } from './usePermissions';

interface RequirePermissionProps {
  permission: Permission;
}

export function RequirePermission({ permission }: RequirePermissionProps) {
  const { hasPermission } = usePermissions();
  const location = useLocation();

  if (!hasPermission(permission)) {
    return <Navigate to="/forbidden" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
