import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form, div, p, h1, ul, li, input {
    height: auto;
  }
`;