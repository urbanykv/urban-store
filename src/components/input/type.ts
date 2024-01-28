import { Control } from "react-hook-form";
import { IInputsLogin, IInputsSign } from "../sign/type";

export interface IInput {
  label: string;
  idInputSign?: "username" | "emailCadastro" | "senhaCadastro" | "confirmSenha";
  idInputLogin?: "email" | "senha";
  typeInput:string;
  placeholder: string;
  inputTypeForm: "loginForm" | "signForm";
  controlLogin?: Control<IInputsLogin>;
  controlSign?: Control<IInputsSign>;
}