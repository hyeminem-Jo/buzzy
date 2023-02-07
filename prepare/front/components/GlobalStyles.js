import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    border: none; 
    box-shadow:none; 
    border-radius:0; 
    padding:0; 
    overflow:visible; 
    cursor:pointer
  }
  
  input {
    border: none;
    border: 1px solid gray;
  }

  body {
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }
`;
export default GlobalStyles;