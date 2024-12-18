import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    font-size: 18px;
}
`
