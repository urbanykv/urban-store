import styled from "styled-components";

export const ButtonContainer = styled.button<{direction: string}>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  left: ${props => (props.direction === "left" ? "0" : "auto")};
  right: ${props => (props.direction === "right" ? "0" : "auto")};

  & > img{
    width: 40px;
    height: 40px;
  }
`;