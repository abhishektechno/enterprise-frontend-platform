import type { Role } from '@enterprise/shared-types';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: Role;
}
export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthState {
  status: AuthStatus;
  user: AuthUser | null;
}
