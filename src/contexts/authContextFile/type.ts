import { IUser } from "../../types/type";

export interface IAuthContext {
  user: IUser;
  handleLogin: (loginData: ILoginData) => void
};

export interface ILoginData {
  email: string;
  password: string;
};