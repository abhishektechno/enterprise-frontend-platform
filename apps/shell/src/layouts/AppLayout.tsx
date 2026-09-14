import { Outlet } from 'react-router';

import { Header } from '../components/navigation/Header';
import { Sidebar } from '../components/navigation/Sidebar';

export function AppLayout() {
  return (
    <div>
      <Header />

      <div>
        <Sidebar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
