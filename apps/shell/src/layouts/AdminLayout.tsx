import { Outlet } from 'react-router';

import { AdminNavigation } from '../components/navigation/AdminNavigation';

export function AdminLayout() {
  return (
    <section>
      <header>
        <h1>Administration</h1>
      </header>

      <AdminNavigation />

      <div>
        <Outlet />
      </div>
    </section>
  );
}
