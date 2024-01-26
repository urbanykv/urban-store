import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  gap: 80px;
  align-items: center;
  background-color: #000;

  & .logo-urban{
    width: 100px;
  }
`;

export const HeaderPerfilArea = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ButtonColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonHeader = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
export const ButtonLogin = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #fff;
  cursor: pointer;
  background: none;
  color: #fff;
  font-weight: bold;
  transition: 0.4s ease;

  &:hover{
    background: #fff;
    color: #000;
  }
`;