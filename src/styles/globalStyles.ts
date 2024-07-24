import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    background-attachment: fixed;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
