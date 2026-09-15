import { useMemo, useState } from 'react';

import { AuthContext } from './AuthContext';

import type { AuthState } from './auth.types';
import type { PropsWithChildren } from 'react';
import { Role } from '@enterprise/shared-types';

const initialState: AuthState = {
  status: 'unauthenticated',
  user: null,
};

export function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  function signIn(role: Role) {
    setAuthState({
      status: 'authenticated',

      user: {
        id: 'user-1',
        name: 'Abhishek',
        email: 'abhishek@example.com',
        role,
      },
    });
  }

  function signOut() {
    setAuthState({
      status: 'unauthenticated',
      user: null,
    });
  }

  const value = useMemo(
    () => ({
      ...authState,
      signIn,
      signOut,
    }),
    [authState],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
