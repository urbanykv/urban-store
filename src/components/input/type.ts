import { Control } from "react-hook-form";
import { IInputsLogin, IInputsSign } from "../sign/type";

export interface IInputLoginController {
  label: string;
  idInputLogin: "email" | "password";
  typeInput:string;
  placeholder: string;
  inputTypeForm: "loginForm" | "signForm";
  controlLogin?: Control<IInputsLogin>;
  controlSign?: Control<IInputsSign>;
}

export interface IInputSignController {
  label: string;
  idInputSign: "username" | "emailCadastro" | "passwordCadastro" | "confirmPassword";
  typeInput:string;
  placeholder: string;
  inputTypeForm: "loginForm" | "signForm";
  controlLogin?: Control<IInputsLogin>;
  controlSign?: Control<IInputsSign>;
}