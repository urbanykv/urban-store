import styled from "styled-components";

export const LoginFormContainer = styled.form<{ isActiveLogin: boolean }>`
  width: 460px;
  height: 460px;
  background-color: #26272A;
  display: ${props => props.isActiveLogin? 'flex': 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SignFormContainer = styled.form<{ isActiveSign: boolean }>`
  width: 460px;
  height: 460px;
  background-color: #26272A;
  display: ${props => props.isActiveSign? 'flex': 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const XButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover{
    opacity: 60%;
  }
`;