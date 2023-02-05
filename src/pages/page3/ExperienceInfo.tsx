import React from "react";
import {
  HeaderWrapper,
  Wrapper,
  Title,
  Paragraph,
  ParagraphBold,
  Input,
  Button,
  ButtonBold,
  Line,
  Holder,
  HolderNameSurname,
  InputArea,
  HeaderHolder,
  ArrowBackDiv,
  ArrowImg,
} from "../styled";
import Arrow from "../../assets/Vector.png";
export default function ExperienceInfo() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <ArrowBackDiv>
          <ArrowImg src={Arrow} alt="arrowback" />
        </ArrowBackDiv>
        <HeaderHolder>
          <Title>გამოცდილება</Title>
          <Paragraph>2/3</Paragraph>
        </HeaderHolder>
        <Line />
      </HeaderWrapper>
      <Holder>
        <ParagraphBold>თანამდებობა</ParagraphBold>
        <Input />
        <Paragraph>მინიმუმ 2 სიმბოლო</Paragraph>
      </Holder>
      <Holder>
        <ParagraphBold>დამსაქმებელი</ParagraphBold>
        <Input />
        <Paragraph>მინიმუმ 2 სიმბოლო</Paragraph>
      </Holder>
      <HolderNameSurname>
        <Holder style={{ width: "50%" }}>
          <ParagraphBold>დაწყების რიცხვი</ParagraphBold>
          <Input type="date" style={{ paddingRight: "10px" }} />
        </Holder>
        <Holder style={{ width: "50%" }}>
          <ParagraphBold>დამთავრების რიცხვი</ParagraphBold>
          <Input type="date" style={{ paddingRight: "10px" }} />
        </Holder>
      </HolderNameSurname>
      <Holder>
        <ParagraphBold>აღწერა</ParagraphBold>
        <InputArea />
      </Holder>
      <Line style={{ border: "1px solid #C1C1C1" }} />
      <Holder style={{ maxWidth: "289px" }}>
        <Button style={{ height: "48px", width: "100%" }}>
          მეტი გამოცდილების დამატება
        </Button>
      </Holder>
      <Holder style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ButtonBold>უკან</ButtonBold>
        <ButtonBold>შემდეგი</ButtonBold>
      </Holder>
    </Wrapper>
  );
}
