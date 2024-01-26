import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;