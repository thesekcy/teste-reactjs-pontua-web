import { createContext } from 'react'
import { IUser } from '../../types'

export type AuthContextType = {
  user: IUser | null | undefined;
  isAuthenticated: null | boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  recoveryPassword: (email: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!)
