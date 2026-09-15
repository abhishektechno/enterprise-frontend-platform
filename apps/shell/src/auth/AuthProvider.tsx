import { useMemo, useState } from 'react';

import { AuthContext } from './AuthContext';

import type { AuthState } from './auth.types';
import type { PropsWithChildren } from 'react';

const initialState: AuthState = {
  status: 'unauthenticated',
  user: null,
};

export function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  function signIn() {
    setAuthState({
      status: 'authenticated',

      user: {
        id: 'user-1',
        name: 'Abhishek',
        email: 'abhishek@example.com',
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
