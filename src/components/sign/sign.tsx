import Input from "../input/input";
import { BackgroundContainer, LoginFormContainer, SignFormContainer, SubmitButton, XButton } from "./style";
import xis from "../../assets/icons/x.svg"
import { useContext } from "react";
import { SignContext } from "../../contexts/signModalContext/signModalContext";
import { useForm, SubmitHandler } from "react-hook-form"
import { IInputsLogin, IInputsSign } from "./type";
import { AuthContext } from "../../contexts/authContextFile/authContext";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schemaLogin = yup
  .object({
    email: yup.string().email("Email não possui formato válido").required('Preencha esse campo.').trim()
    .lowercase(),
    password: yup.string().min(8).required('Preencha esse campo.'),
  })
  .required()

const SignForm = () => {

  const { toogleLoginModal, toogleSignModal, activeLogin, activeSign } = useContext(SignContext)

  const { user, handleLogin } = useContext(AuthContext)

  const {
    control: controlLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorLogin },
  } = useForm<IInputsLogin>({
    mode: "onChange",
    resolver: yupResolver(schemaLogin),
  })

  const onSubmitLogin: SubmitHandler<IInputsLogin> = (data) => {
    console.log(data);
    handleLogin(data)
  }

  const {
    control: controlSign,
    handleSubmit: handleSubmitSign,
    formState: { errors: errorSign },
  } = useForm<IInputsSign>()

  const onSubmitSign: SubmitHandler<IInputsSign> = (data) => console.log(data)


  return(
    <BackgroundContainer isActiveLogin={activeLogin} isActiveSign={activeSign} onSubmit={handleSubmitLogin(onSubmitLogin)}>
      <LoginFormContainer isActiveLogin={activeLogin}>
        <XButton type="button" onClick={() => toogleLoginModal()}><img src={xis} alt="X" /></XButton>
        <Input controlLogin={controlLogin} inputTypeForm="loginForm" label="Email" idInputLogin="email" idInputSign={null} typeInput="email" placeholder="example@mail.com"/>
        <Input controlLogin={controlLogin} inputTypeForm="loginForm" label="Senha" idInputLogin="password" idInputSign={null} typeInput="password" placeholder="Ex4mple123."/>
        <SubmitButton type="submit">Entrar</SubmitButton>
      </LoginFormContainer>
      <SignFormContainer isActiveSign={activeSign} onSubmit={handleSubmitSign(onSubmitSign)}>
        <XButton type="button" onClick={() => toogleSignModal()}><img src={xis} alt="X" /></XButton>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Username"  idInputSign="username" idInputLogin={null} typeInput="text" placeholder="username"/>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Email" idInputSign="emailCadastro" idInputLogin={null} typeInput="text" placeholder="example@mail.com"/>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Senha" idInputSign="passwordCadastro" idInputLogin={null} typeInput="password" placeholder="Ex4mple123."/>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Confirme a Senha" idInputSign="confirmPassword" idInputLogin={null} typeInput="password" placeholder="Ex4mple123."/>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </SignFormContainer>
    </BackgroundContainer>
  );
};

export default SignForm;