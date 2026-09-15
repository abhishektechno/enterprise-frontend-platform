import { usePermissions } from '../auth/usePermissions';
import { ForbiddenPage } from './ForbiddenPage';

export function CatalogPage() {
  const { hasPermission } = usePermissions();

  if (!hasPermission('catalog:view')) {
    return <ForbiddenPage />;
  }
}
