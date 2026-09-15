import { NavLink } from 'react-router';

import { primaryNavigation } from './navigation.config';
import { usePermissions } from '../../auth/usePermissions';
export function Sidebar() {
  const { hasPermission } = usePermissions();

  const visibleNavigation = primaryNavigation.filter(
    (item) => !item.requiredPermission || hasPermission(item.requiredPermission),
  );

  return (
    <aside aria-label="Primary navigation">
      <nav>
        <ul>
          {visibleNavigation.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
