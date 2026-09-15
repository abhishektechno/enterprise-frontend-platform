import { useLocation, useNavigate } from 'react-router';

import { useAuth } from '../auth/useAuth';
import { Role } from '@enterprise/shared-types';
import { useState } from 'react';

export function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState<Role>('viewer');
  interface LoginLocationState {
    from?: {
      pathname?: string;
    };
  }
  const locationState = location.state as LoginLocationState | null;

  const destination = locationState?.from?.pathname ?? '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signIn(role);
    navigate(destination, { replace: true });
  }

  return (
    <section>
      <h1>Sign in</h1>

      <p>Sign in to access the Enterprise Operations Platform.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <p>Demo only: select a role to test authorization behaviour.</p>
          <label htmlFor="role">Demo role</label>

          <select id="role" value={role} onChange={(event) => setRole(event.target.value as Role)}>
            <option value="viewer">Viewer</option>

            <option value="manager">Manager</option>

            <option value="admin">Administrator</option>
          </select>
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input id="password" name="password" type="password" autoComplete="current-password" />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </section>
  );
}
