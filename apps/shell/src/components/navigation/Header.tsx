import { useNavigate } from 'react-router';

import { useAuth } from '../../auth/useAuth';

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();

    navigate('/login', {
      replace: true,
    });
  }

  return (
    <header>
      <strong>Enterprise Operations Platform</strong>

      <div>
        <span>{user?.name}</span>

        <button type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </header>
  );
}
