import React from "react";
import { createGlobalStyle } from "styled-components";
import StarterPage from "./pages/page1/StarterPage";
import PersonalInfo from "./pages/page2/PersonalInfo";
import ExperienceInfo from "./pages/page3/ExperienceInfo";
import EducationInfo from "./pages/page4/EducationInfo";
function App() {
  return (
    <>
      <GlobalStyle />
      <EducationInfo />
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
