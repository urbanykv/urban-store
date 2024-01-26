import Input from "../input/input";
import { LoginFormContainer, SignFormContainer, XButton } from "./style";
import xis from "../../assets/icons/x.svg"
import { useContext } from "react";
import { SignContext } from "../../contexts/signModalContext/signModalContext";

const SignForm = () => {

  const {toogleLoginModal, toogleSignModal, activeLogin, activeSign} = useContext(SignContext)

  return(
    <>
      <LoginFormContainer isActiveLogin={activeLogin}>
        <XButton type="button" onClick={() => toogleLoginModal}><img src={xis} alt="X" /></XButton>
        <Input label="Email" idInput="emailLogin" typeInput="email" placeholder="example@mail.com"/>
        <Input label="Senha" idInput="passwordLogin" typeInput="password" placeholder="Ex4mple123."/>
      </LoginFormContainer>
      <SignFormContainer isActiveSign={activeSign}>
        <XButton type="button" onClick={() => toogleSignModal()}><img src={xis} alt="X" /></XButton>
        <Input label="Username" idInput="usernameCadastro" typeInput="text" placeholder="username"/>
        <Input label="Email" idInput="emailCadastro" typeInput="email" placeholder="example@mail.com"/>
        <Input label="Senha" idInput="passwordCadastro" typeInput="password" placeholder="Ex4mple123."/>
        <Input label="Confirme a Senha" idInput="passwordSecCadastro" typeInput="password" placeholder="Ex4mple123."/>
      </SignFormContainer>
    </>
  );
};

export default SignForm;