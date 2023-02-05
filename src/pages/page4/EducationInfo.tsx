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
  SelectInput,
  Option,
} from "../styled";
import Arrow from "../../assets/Vector.png";
export default function EducationInfo() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <ArrowBackDiv>
          <ArrowImg src={Arrow} alt="arrowback" />
        </ArrowBackDiv>
        <HeaderHolder>
          <Title>განათლება</Title>
          <Paragraph>3/3</Paragraph>
        </HeaderHolder>
        <Line />
      </HeaderWrapper>
      <Holder>
        <ParagraphBold>სასწავლებელი</ParagraphBold>
        <Input />
        <Paragraph>მინიმუმ 2 სიმბოლო</Paragraph>
      </Holder>
      <HolderNameSurname>
        <Holder style={{ width: "50%" }}>
          <ParagraphBold>ხარისხი</ParagraphBold>
          <SelectInput
            defaultValue="აირჩიეთ ხარისხი"
            style={{ paddingRight: "10px" }}
          >
            <Option>საშუალო სკოლის დიპლომი</Option>
            <Option>ზოგადსაგანმანათლებლო დიპლომი</Option>
            <Option>ბაკალავრი</Option>
            <Option>მაგისტრი</Option>
            <Option>დოქტორი</Option>
            <Option>ასოცირებული ხარისხი</Option>
            <Option>სტუდენტი</Option>
            <Option>კოლეჯი (ხარისხის გარეშე)</Option>
            <Option>სხვა</Option>
          </SelectInput>
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
          სხვა სასწავლებლების დამატება
        </Button>
      </Holder>
      <Holder style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ButtonBold>უკან</ButtonBold>
        <ButtonBold>დასასრული</ButtonBold>
      </Holder>
    </Wrapper>
  );
}
