import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    display: inline-block;
    border: 1px solid gray;
    height: 33px;
    padding: 0 10px;
    box-shadow:none; 
    border-radius:0; 
    overflow:visible; 
    cursor:pointer
  }
  
  input {
    outline: none;
    border: 2px solid #ccc;
    padding: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  body {
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
`;
export default GlobalStyles;