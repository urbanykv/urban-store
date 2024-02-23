import styled, { css, keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
  }to {
    transform: rotate(360deg);
  }
`;

const opacityLoading = keyframes`
  from {
    opacity: 1;
  }to {
    opacity: 0;
  }
`;

export const LoadingContainer = styled.div<{toggLoading?: boolean}>`
  width: 100%;
  transition: 0.2s ease;
  height: 100%;
  background-color: #171717;
  justify-content: center;
  animation: ${props => props.toggLoading ? css` ${opacityLoading} 0.4s ease` : 'none'};
  align-items: center;
  position: fixed;
  z-index: 3;
  display: ${props => props.toggLoading ? 'flex': 'none'};
`;

export const Loading = styled.div`
  width: 60px;
  height: 60px;
  border-bottom: 3px solid #A20DFA;
  border-right: 3px solid #A20DFA;
  border-left: 3px solid #A20DFA;
  border-radius: 50%;
  animation: ${loadingAnimation} 0.6s infinite;
`;