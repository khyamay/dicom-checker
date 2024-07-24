import styled from "styled-components";

export const DropzoneContainer = styled.div`
  border: 2px dashed #0070f3;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    border-color: #0050d3;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ResultItem = styled.li`
  margin-bottom: 8px;
`;
