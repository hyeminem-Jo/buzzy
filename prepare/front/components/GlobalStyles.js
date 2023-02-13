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
    border: 1px solid #E6B905;
    height: 34px;
    padding: 0 10px;
    box-shadow:none; 
    border-radius:0; 
    overflow:visible; 
    cursor:pointer;
    background-color: #E6B905;
    color: #fff;
  }
  
  input[type="email"],
  input[type="text"],
  input[type="password"] {
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