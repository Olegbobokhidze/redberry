import React from "react";
import {
  NameSurnameHolder,
  Name,
  Surname,
  Title,
  Paragraph,
  PhoneMailLogo,
  Line,
  Image,
  Wrapper,
  PersonalInfoHolder,
  TextHolder,
  Holder,
  Logo,
} from "./styled";
import Phone from "../../assets/Phone.png";
import Mail from "../../assets/Mail.png";
import RedLogo from "../../assets/RedLogo.png";
import { FormattedNumber } from "../../utils";
import { EduTypes, ExpTypes, InfoSchemaType } from "../InfoTypes";
interface Props {
  infoData: InfoSchemaType;
  photo: string;
  expData: ExpTypes;
  eduData: EduTypes;
}
export default function Resume({ infoData, photo, expData, eduData }: Props) {
  return (
    <Wrapper>
      <PersonalInfoHolder>
        <TextHolder>
          <NameSurnameHolder>
            <Name>{infoData.name}</Name>
            <Surname>{infoData.surname}</Surname>
          </NameSurnameHolder>
          <Holder>
            {infoData.email ? (
              <>
                <PhoneMailLogo src={Mail} />
                <Paragraph
                  style={{ maxWidth: "300px", wordWrap: "break-word" }}
                >
                  {infoData.email}
                </Paragraph>
              </>
            ) : null}
          </Holder>
          <Holder>
            {infoData.phone_number ? (
              <>
                <PhoneMailLogo src={Phone} />
                <Paragraph
                  style={{ maxWidth: "200px", wordWrap: "break-word" }}
                >
                  {FormattedNumber(infoData.phone_number)}
                </Paragraph>
              </>
            ) : null}
          </Holder>
          {infoData.about_me ? (
            <>
              <Title>ჩემ შესახებ</Title>
              <Paragraph style={{ maxWidth: "400px", wordWrap: "break-word" }}>
                {infoData.about_me}
              </Paragraph>
            </>
          ) : null}
        </TextHolder>
        <div>{photo ? <Image src={photo} alt="image" /> : null}</div>
      </PersonalInfoHolder>
      {expData.experiences.map((exp, id) => {
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
              <Title>გამოცდილება</Title>
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
      {eduData.educations.map((edu, id) => {
        if (
          edu.description.length === 0 &&
          edu.due_date.length === 0 &&
          edu.institute.length === 0
        ) {
          return null;
        } else
          return (
            <React.Fragment key={id}>
              <Line />
              <Title>განათლება</Title>
              <Paragraph>{edu.institute}, სტუდენტი</Paragraph>
              <Paragraph style={{ fontStyle: "italic", opacity: "0.7" }}>
                {edu.due_date}
              </Paragraph>
              <Paragraph>{edu.description}</Paragraph>
            </React.Fragment>
          );
      })}
      <Logo src={RedLogo} alt="logo" />
    </Wrapper>
  );
}
