import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SpinnerElement = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #0050d3;
  animation: ${spin} 1s ease-in-out infinite;
`;

export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerElement />
  </SpinnerContainer>
);
