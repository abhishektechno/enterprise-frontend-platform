import { createContext } from 'react';

import type { AuthState } from './auth.types';
import { Role } from '@enterprise/shared-types';

export interface AuthContextValue extends AuthState {
  signIn: (role: Role) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
