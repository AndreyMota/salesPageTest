import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(50px); /* Desloca o elemento para baixo */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* Transformação final: sem deslocamento */
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #E0E0E0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #BB86FC;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5em;
      text-align: center;
    }
    h2 {
      font-size: 1.2em;
      text-align: center;
    }
    p, li {
      font-size: 1em;
    }
    button {
      font-size: 1em;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2em;
      text-align: center;
    }
    h2 {
      font-size: 1em;
      text-align: center;
    }
    p, li {
      font-size: 0.9em;
    }
    button {
      font-size: 0.9em;
      padding: 8px 16px;
    }
  }
`;

export default GlobalStyle;
