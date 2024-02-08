import styled from "styled-components";

export const ProdutoContainer = styled.div`
  width: 220px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  border: 3px solid #303030;
  border-radius: 20px;
  margin: 15px;
  & > img{
    border-radius: 20px 20px 0 0;
    width: 215px;
    height: 250px;
    background: #fff;
  }
`;

export const InfoContainer = styled.div`
  width: 220px;
  height: 240px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
  background: #303030;
`;