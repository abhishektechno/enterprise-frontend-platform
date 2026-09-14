import { NavLink } from 'react-router';

import { primaryNavigation } from './navigation.config';

export function Sidebar() {
  return (
    <aside aria-label="Primary navigation">
      <nav>
        <ul>
          {primaryNavigation.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? 'navigation-link navigation-link--active' : 'navigation-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
