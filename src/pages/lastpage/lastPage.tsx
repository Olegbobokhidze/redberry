import React from "react";
import {
  Image,
  Line,
  Logo,
  Name,
  NameSurnameHolder,
  Paragraph,
  PersonalInfoHolder,
  PhoneMailLogo,
  Surname,
  TextHolder,
  Title,
  Wrapper,
} from "../resume/styled";
import Arrow from "../../assets/Vector.png";
import { Holder } from "../styled";
import Phone from "../../assets/Phone.png";
import Mail from "../../assets/Mail.png";
import RedLogo from "../../assets/RedLogo.png";
import { BackToStarterPage, FormattedNumber } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EduTypes, ExpTypes, InfoSchemaType } from "../InfoTypes";
const ResumeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: white;
  padding: 40px;
`;
const ArrowImage = styled.img``;
const ArrowBack = styled.div`
  position: absolute;
  left: 70px;
  top: 50px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e2e2;
  cursor: pointer;
  &:hover {
    background-color: #f93b1d;
  }
`;
const Div = styled.div`
  width: 427px;
  height: 167px;
  padding: 30px;
  border-radius: 10px;
  align-self: flex-start;
  background-color: white;
  box-shadow: 5px 10px 20px 3px rgba(0, 0, 0, 0.25);
`;
interface Props {
  setInfoData: React.Dispatch<React.SetStateAction<InfoSchemaType>>;
  setPhoto: (val: string) => void;
  setExpData: React.Dispatch<React.SetStateAction<ExpTypes>>;
  setEduData: React.Dispatch<React.SetStateAction<EduTypes>>;
}

export default function LastPage({
  setInfoData,
  setPhoto,
  setExpData,
  setEduData,
}: Props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <ResumeDiv>
      <ArrowBack
        onClick={() => {
          BackToStarterPage(setInfoData, setPhoto, setExpData, setEduData);
          navigate("/");
        }}
      >
        <ArrowImage src={Arrow} alt="arrowback" />
      </ArrowBack>
      <Wrapper
        style={{
          border: "2px solid black",
          height: "100%",
          marginRight: "50px",
        }}
      >
        <PersonalInfoHolder>
          <TextHolder>
            <NameSurnameHolder>
              <Name>{state.name}</Name>
              <Surname>{state.surname}</Surname>
            </NameSurnameHolder>
            {state.email ? (
              <Holder style={{ display: "flex", flexDirection: "row" }}>
                <PhoneMailLogo src={Mail} />
                <Paragraph
                  style={{ maxWidth: "300px", wordWrap: "break-word" }}
                >
                  {state.email}
                </Paragraph>
              </Holder>
            ) : null}

            {state.phone_number ? (
              <Holder style={{ display: "flex", flexDirection: "row" }}>
                <PhoneMailLogo src={Phone} />
                <Paragraph
                  style={{ maxWidth: "200px", wordWrap: "break-word" }}
                >
                  {FormattedNumber(state.phone_number)}
                </Paragraph>
              </Holder>
            ) : null}

            {state.about_me ? (
              <>
                <Title>????????? ?????????????????????</Title>
                <Paragraph
                  style={{ maxWidth: "400px", wordWrap: "break-word" }}
                >
                  {state.about_me}
                </Paragraph>
              </>
            ) : null}
          </TextHolder>
          <div>
            {state.image ? (
              <Image
                src={`https://resume.redberryinternship.ge/${state.image}`}
                alt="image"
              />
            ) : null}
          </div>
        </PersonalInfoHolder>
        {state.experiences.map((exp: any, id: any) => {
          if (
            exp.description.length === 0 &&
            exp.due_date.length === 0 &&
            exp.start_date.length === 0 &&
            exp.position.length === 0 &&
            exp.employer.length === 0
          ) {
            return null;
          } else
            return (
              <React.Fragment key={id}>
                <Line />
                <Title>?????????????????????????????????</Title>
                <Paragraph style={{ fontWeight: "bold" }}>
                  {exp.position}
                </Paragraph>
                <Paragraph style={{ fontWeight: "bold" }}>
                  {exp.employer}
                </Paragraph>
                <Paragraph style={{ fontStyle: "italic", opacity: "0.7" }}>
                  {exp.start_date} - {exp.due_date}
                </Paragraph>
                <Paragraph>{exp.description}</Paragraph>
              </React.Fragment>
            );
        })}
        {state.educations.map((edu: any, id: any) => {
          if (
            edu.description.length === 0 &&
            edu.due_date.length === 0 &&
            edu.institute.length === 0 &&
            edu.degree_id === 0
          ) {
            return null;
          } else
            return (
              <div
                key={id}
                style={
                  state.educations[state.educations.length - 1]
                    ? { marginBottom: "100px" }
                    : { marginBottom: "30px" }
                }
              >
                <Line />
                <Title>???????????????????????????</Title>
                <Paragraph>
                  {edu.institute}, {edu.degree}
                </Paragraph>
                <Paragraph style={{ fontStyle: "italic", opacity: "0.7" }}>
                  {edu.due_date}
                </Paragraph>
                <Paragraph>{edu.description}</Paragraph>
              </div>
            );
        })}
        <Logo src={RedLogo} alt="logo" />
      </Wrapper>
      <Div>
        <Paragraph>????????????????????? ?????????????????????????????? ??????????????????????????? ????</Paragraph>
      </Div>
    </ResumeDiv>
  );
}
