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
    box-shadow:none;
    border: none;
    border-radius:0;
    overflow:visible;
    cursor:pointer;
  }
  
  form {
    padding: 20px;

    .field {
      margin-bottom: 10px;

      input{
        margin-bottom: 3px;
      }

      p {
        color: crimson;
      }
    }
  }
  
  input[type="email"],
  input[type="text"],
  input[type="password"] {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 10px;
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