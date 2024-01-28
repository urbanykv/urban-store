import Input from "../input/input";
import { BackgroundContainer, LoginFormContainer, SignFormContainer, SubmitButton, XButton } from "./style";
import xis from "../../assets/icons/x.svg"
import { useContext } from "react";
import { SignContext } from "../../contexts/signModalContext/signModalContext";
import { useForm, SubmitHandler } from "react-hook-form"
import { IInputsLogin, IInputsSign } from "./type";

const SignForm = () => {

  const {toogleLoginModal, toogleSignModal, activeLogin, activeSign} = useContext(SignContext)

  const {
    control: controlLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorLogin },
  } = useForm<IInputsLogin>({
    mode: "onChange",
  })
  const onSubmitSign: SubmitHandler<IInputsLogin> = (data) => console.log(data)

  const {
    control: controlSign,
    handleSubmit: handleSubmitSign,
    formState: { errors: errorSign },
  } = useForm<IInputsSign>()
  const onSubmitLogin: SubmitHandler<IInputsSign> = (data) => console.log(data)


  return(
    <BackgroundContainer isActiveLogin={activeLogin} isActiveSign={activeSign}>
      <LoginFormContainer isActiveLogin={activeLogin}>
        <XButton type="button" onClick={() => toogleLoginModal()}><img src={xis} alt="X" /></XButton>
        <Input controlLogin={controlLogin} inputTypeForm="loginForm" label="Email" idInputLogin="email" typeInput="email" placeholder="example@mail.com"/>
        <Input controlLogin={controlLogin} inputTypeForm="loginForm" label="Senha" idInputLogin="senha" typeInput="password" placeholder="Ex4mple123."/>
        <SubmitButton type="submit">Entrar</SubmitButton>
      </LoginFormContainer>
      <SignFormContainer isActiveSign={activeSign}>
        <XButton type="button" onClick={() => toogleSignModal()}><img src={xis} alt="X" /></XButton>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Username"  idInputSign="username" typeInput="text" placeholder="username"/>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Email" idInputSign="emailCadastro" typeInput="text" placeholder="example@mail.com"/>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Senha" idInputSign="senhaCadastro" typeInput="password" placeholder="Ex4mple123."/>
        <Input controlSign={controlSign} inputTypeForm="signForm" label="Confirme a Senha" idInputSign="confirmSenha" typeInput="password" placeholder="Ex4mple123."/>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </SignFormContainer>
    </BackgroundContainer>
  );
};

export default SignForm;