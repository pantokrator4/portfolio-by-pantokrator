import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { font } from "./Common";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    color: ${theme.colors.font};
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: unset;
    color: ${theme.colors.font};
}

ul {
    list-style: none;
}

section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
}

p {
    ${font({Fmax: 18, Fmin: 16})}
    //font-size: 18px;
}
`