import styled from "styled-components";

export const ProdutoContainer = styled.div`
  width: 220px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  margin: 15px;
  & > img{
    width: 250px;
    height: 150px;
    object-fit: cover;
    background: #fff;
  }
`;

export const InfoContainer = styled.div`
  width: 280px;
  height: 250px;
  display: flex;
  justify-content: start;
  align-items: center;
`;