import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div>
      <header>
        <strong>Enterprise Operations Platform</strong>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
