import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
  }
`;
