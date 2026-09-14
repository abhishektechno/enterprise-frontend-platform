import { NavLink } from 'react-router';

import { adminNavigation } from '../navigation/admin-navigation.config';

export function AdminNavigation() {
  return (
    <nav aria-label="Administration navigation">
      <ul>
        {adminNavigation.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
