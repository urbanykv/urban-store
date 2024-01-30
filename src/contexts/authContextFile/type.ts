import { ReactNode } from "react";
import { IUser } from "../../types/type";

export interface IAuthContext {
  user: IUser;
  handleLogin: (loginData: ILoginData) => void
};

export interface IAuthProvider {
  children: ReactNode;
};

export interface ILoginData {
  email: string;
  password: string;
};