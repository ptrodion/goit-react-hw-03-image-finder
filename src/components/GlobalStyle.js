import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${props => props.theme.color.color};
  background-color: ${props => props.theme.color.bkgColor};
  letter-spacing: 0.04em;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Moanco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
  object-fit: cover;
}
`;
