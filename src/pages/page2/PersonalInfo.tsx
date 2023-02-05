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
export default function PersonalInfo() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <ArrowBackDiv>
          <ArrowImg src={Arrow} alt="arrowback" />
        </ArrowBackDiv>
        <HeaderHolder>
          <Title>პირადი ინფო</Title>
          <Title>1/3</Title>
        </HeaderHolder>
        <Line />
      </HeaderWrapper>
      <HolderNameSurname>
        <Holder style={{ width: "50%" }}>
          <ParagraphBold>სახელი</ParagraphBold>
          <Input />
          <Paragraph>მინიმუმ 2 ასო, ქართული ასოები</Paragraph>
        </Holder>
        <Holder style={{ width: "50%" }}>
          <ParagraphBold>გვარი</ParagraphBold>
          <Input />
          <Paragraph>მინიმუმ 2 ასო, ქართული ასოები</Paragraph>
        </Holder>
      </HolderNameSurname>
      <Holder style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ParagraphBold>პირადი ფოტოს ატვირთვა</ParagraphBold>
        <Button>ატვირთვა</Button>
      </Holder>
      <Holder>
        <ParagraphBold>ჩემ შესახებ (არასავალდებულო)</ParagraphBold>
        <InputArea />
      </Holder>
      <Holder>
        <ParagraphBold>ელ.ფოსტა</ParagraphBold>
        <Input />
        <Paragraph>უნდა მთავრდებოდეს @redberry.ge-თი</Paragraph>
      </Holder>
      <Holder>
        <ParagraphBold>მობილურის ნომერი</ParagraphBold>
        <Input />
        <Paragraph>უნდა აკმაყოფილებდეს ქართული მობილურის ფორმატს</Paragraph>
      </Holder>
      <ButtonBold>შემდეგი</ButtonBold>
    </Wrapper>
  );
}
