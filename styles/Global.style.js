import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Dosis';
    }
`;

export default GlobalStyle;