import styled from "styled-components";

export const DropzoneContainer = styled.div`
  border: 2px dashed #0070f3;
  border-radius: 4px;
  padding: 1.25rem;
  text-align: center;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: #0050d3;
  }
`;

export const ResultsContainer = styled.div`
  max-height: calc(100vh - 17rem);
  overflow-y: auto;
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ResultItem = styled.li`
  margin-bottom: 0.5rem;
`;
