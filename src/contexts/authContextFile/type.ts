import { ReactNode } from "react";
import { IUser } from "../../types/type";

export interface IAuthContext {
  user: IUser
};

export interface IAuthProvider {
  children: ReactNode;
};

export interface ILoginData {
  email: string;
  password: string;
};