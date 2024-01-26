import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  color: #fff;
`;

export const InputText = styled.input`
  padding: 10px;
  width: 175px;
  border-radius: 3px;
  background-color: #dddddd44;
  border: none;

  &:focus{
    outline: none;
  }

  &::placeholder{
    color: #141414;
  }
`;