import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.text.secondary};
  }

  button {
    font-family: ${props => props.theme.fonts.primary};
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles; 