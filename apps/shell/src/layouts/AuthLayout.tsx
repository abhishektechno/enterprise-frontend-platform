import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <main>
      <header>
        <strong>Enterprise Operations Platform</strong>
      </header>

      <section>
        <Outlet />
      </section>
    </main>
  );
}
