import React from "react";
import { createGlobalStyle } from "styled-components";
import PageResume from "./pages";
import StarterPage from "./pages/page1/StarterPage";
import PersonalInfo from "./pages/page2/PersonalInfo";
import ExperienceInfo from "./pages/page3/ExperienceInfo";
import EducationInfo from "./pages/page4/EducationInfo";
import Resume from "./pages/resume/resume";
import "./font/HelveticaNeue.ttc";
import { useLocalStorage } from "usehooks-ts";
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
    src: local("HelveticaNeue"), url("./font/HelveticaNeue.ttc") format("truetype");
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
