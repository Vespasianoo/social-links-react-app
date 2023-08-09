import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.background};
    transition: background  300ms;
  }

  body * {
    font-family: "Roboto" , sans-serif;
    color: ${({ theme }) => theme.colors.textColor1};
  }
`
