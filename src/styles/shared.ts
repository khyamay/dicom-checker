import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 2rem);
`;

export const Main = styled.main`
  padding: 1rem;
  padding-bottom: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
  span {
    font-family: "Bad Script", cursive;
    color: #0070f3;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
