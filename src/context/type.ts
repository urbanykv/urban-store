import { ReactNode } from "react";

export type AuthContextType = {
  login: boolean;
  handleLogin: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};