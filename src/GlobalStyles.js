import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      width: 100%;
      height: 100vh;
      line-height: 2.1rem;
      font-family: ${(props) => props.theme.primaryFont};
      font-style: normal;
      font-weight: 400;
    }

    h1,
    h2 {
      font-weight: 800;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
    }
`;

export default GlobalStyles;
