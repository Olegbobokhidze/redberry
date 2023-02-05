import React from "react";
import { createGlobalStyle } from "styled-components";
import StarterPage from "./pages/page1/StarterPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <StarterPage />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    height: 100vh;
    width: 100vw;
  }
`;
export default App;
