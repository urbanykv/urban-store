import styled from "styled-components";

export const BackgroundContainer = styled.div<{ isActiveLogin: boolean, isActiveSign: boolean }>`
  width: 100%;
  height: 100%;
  background-color: #00000075;
  justify-content: center;
  align-items: center;
  position: fixed;
  display: ${props => props.isActiveLogin || props.isActiveSign ? 'flex': 'none'};
`;

export const LoginFormContainer = styled.form<{ isActiveLogin: boolean }>`
  width: 460px;
  height: 460px;
  background-color: #26272A;
  display: ${props => props.isActiveLogin ? 'flex': 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: relative;
  border-radius: 20px;
`;

export const SignFormContainer = styled.form<{ isActiveSign: boolean }>`
  width: 460px;
  height: 460px;
  background-color: #26272A;
  display: ${props => props.isActiveSign ? 'flex': 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: relative;
  border-radius: 20px;
`;

export const XButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover{
    opacity: 40%;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;