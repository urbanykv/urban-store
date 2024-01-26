import { ReactNode } from "react";

export interface ISignModalContext {
  activeLogin: boolean;
  activeSign:boolean;
  toogleLoginModal: () => void;
  toogleSignModal: () => void;
};

export interface ISignModalProvider {
  children: ReactNode;
};