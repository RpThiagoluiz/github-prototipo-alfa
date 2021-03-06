import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:  "Helvetica Neue", Arial, sans-serif;
}

html,body, #root{
  height: 100%;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.background.primary};
}

*, button, input {
  border:0;
  outline:0;
}

button {
  cursor: pointer;
}

`;
