import { createContext } from 'react';

import type { AuthState } from './auth.types';

export interface AuthContextValue extends AuthState {
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
