import React from "react";
import EducationInfo from "./page4/EducationInfo";
import Resume from "./resume/resume";
import styled from "styled-components";
import PersonalInfo from "./page2/PersonalInfo";
const Holder = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;
export default function PageResume() {
  return (
    <Holder>
      <PersonalInfo />
      <Resume />
    </Holder>
  );
}
