import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
*{
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;
}

a{
  text-decoration: none;
}

a:visisted{
  color: #070710;
}
   
`;

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
