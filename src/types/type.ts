import { ReactNode } from "react";

export interface IUser {
  id?: number;
  username?: string;
  email: string;
  password: string;
}

export interface ChildrenProvider {
  children: ReactNode;
};