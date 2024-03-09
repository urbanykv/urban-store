import styled from "styled-components";

export const ProdutoContainer = styled.div`
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #303030;
  border: 3px solid #303030;
  border-radius: 20px;
  margin: 15px;
  color: white;
  & > img{
    border-radius: 20px 20px 0 0;
    width: 235px;
    min-height: 215px;
  }
`;

export const InfoContainer = styled.div`
  width: 220px;
  height: 250px;
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-radius: 20px;
  background: #303030;
`;

export const PrecoContainer = styled.span`
  font-size: 20px;

`;