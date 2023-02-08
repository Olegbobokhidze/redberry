import React from "react";
import EducationInfo from "./page4/EducationInfo";
import Resume from "./resume/resume";
import styled from "styled-components";
import PersonalInfo from "./page2/PersonalInfo";
import { useLocalStorage } from "usehooks-ts";
import { Route, Routes, useLocation } from "react-router-dom";
import { InfoSchemaType } from "./page2/InfoTypes";
import StarterPage from "./page1/StarterPage";
const Holder = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;
export default function PageResume() {
  const [infoData, setInfoData] = useLocalStorage<InfoSchemaType>("data", {
    name: "",
    surname: "",
    email: "",
    about_me: "",
    phone_number: "",
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
              setPhoto={setPhoto}
            />
          }
        />
      </Routes>
      {location.pathname === "/" ? null : (
        <Resume infoData={infoData} photo={photo} />
      )}
    </Holder>
  );
}
