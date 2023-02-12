import React from "react";
import { createGlobalStyle } from "styled-components";
import PageResume from "./pages";
import "./font/HelveticaNeue.ttc";
function App() {
  return (
    <>
      <GlobalStyle />
      <PageResume />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:"Helvetica Neue";
    src: local("HelveticaNeue"), url("./font/HelveticaNeue.ttc") format("TTC");
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", sans-serif;
  }
  body{
    height: 100vh;
    width: 100vw;
    
  }
`;
export default App;
