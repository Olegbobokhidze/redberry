import React from "react";
import EducationInfo from "./page4/EducationInfo";
import Resume from "./resume/resume";
import styled from "styled-components";
import PersonalInfo from "./page2/PersonalInfo";
import { useLocalStorage } from "usehooks-ts";
import { Route, Routes, useLocation } from "react-router-dom";
import { EduTypes, ExpTypes, InfoSchemaType } from "./InfoTypes";
import StarterPage from "./page1/StarterPage";
import ExperienceInfo from "./page3/ExperienceInfo";
import LastPage from "./lastpage/lastPage";
const Holder = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;
export default function PageResume() {
  const [infoData, setInfoData] = useLocalStorage<InfoSchemaType>("infodata", {
    name: "",
    surname: "",
    email: "",
    about_me: "",
    phone_number: "",
  });
  const [expData, setExpData] = useLocalStorage<ExpTypes>("expdata", {
    experiences: [
      {
        position: "",
        description: "",
        employer: "",
        due_date: "",
        start_date: "",
      },
    ],
  });
  const [eduData, setEduData] = useLocalStorage<EduTypes>("edudata", {
    educations: [
      {
        institute: "",
        degree_id: 0,
        due_date: "",
        description: "",
      },
    ],
  });
  const [photo, setPhoto] = useLocalStorage<string>("file", "");
  const location = useLocation();
  return (
    <Holder>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route
          path="/personalinfo"
          element={
            <PersonalInfo
              setInfoData={setInfoData}
              infoData={infoData}
              photo={photo}
              setPhoto={setPhoto}
              setExpData={setExpData}
              setEduData={setEduData}
            />
          }
        />
        <Route
          path="/experienceinfo"
          element={
            <ExperienceInfo
              setInfoData={setInfoData}
              expData={expData}
              setExpData={setExpData}
              setPhoto={setPhoto}
              setEduData={setEduData}
            />
          }
        />
        <Route
          path="/educationinfo"
          element={
            <EducationInfo
              setInfoData={setInfoData}
              setExpData={setExpData}
              setPhoto={setPhoto}
              eduData={eduData}
              expData={expData}
              infoData={infoData}
              photo={photo}
              setEduData={setEduData}
            />
          }
        />
        <Route
          path="resume"
          element={
            <LastPage
              setInfoData={setInfoData}
              setExpData={setExpData}
              setPhoto={setPhoto}
              setEduData={setEduData}
            />
          }
        />
      </Routes>
      {location.pathname === "/" || location.pathname === "/resume" ? null : (
        <Resume
          eduData={eduData}
          expData={expData}
          infoData={infoData}
          photo={photo}
        />
      )}
    </Holder>
  );
}
