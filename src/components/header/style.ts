import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  & .logo-urban{
    width: 80px;
  }
`;

export const HeaderPerfilArea = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;