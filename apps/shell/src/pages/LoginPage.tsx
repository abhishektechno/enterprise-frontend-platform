import { useLocation, useNavigate } from 'react-router';

import { useAuth } from '../auth/useAuth';

export function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  interface LoginLocationState {
    from?: {
      pathname?: string;
    };
  }
  const locationState = location.state as LoginLocationState | null;

  const destination = locationState?.from?.pathname ?? '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signIn();
    navigate(destination, { replace: true });
  }

  return (
    <section>
      <h1>Sign in</h1>

      <p>Sign in to access the Enterprise Operations Platform.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input id="email" name="email" type="email" autoComplete="email" />
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
