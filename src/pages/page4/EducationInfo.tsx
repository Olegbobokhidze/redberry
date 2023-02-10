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
import { useNavigate } from "react-router-dom";
import { EduSchema, EduTypes, ExpTypes, InfoSchemaType } from "../InfoTypes";
import { BackToStarterPage } from "../../utils";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface Props {
  setInfoData: React.Dispatch<React.SetStateAction<InfoSchemaType>>;
  setExpData: React.Dispatch<React.SetStateAction<ExpTypes>>;
  setPhoto: (val: string) => void;
  setEduData: React.Dispatch<React.SetStateAction<EduTypes>>;
  eduData: EduTypes;
}
export default function EducationInfo({
  setInfoData,
  setExpData,
  setPhoto,
  eduData,
  setEduData,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<EduTypes>({
    resolver: zodResolver(EduSchema),
    mode: "onChange",
    defaultValues: eduData,
  });

  const { fields, append, update } = useFieldArray({
    control,
    name: "educations",
  });
  const onSubmit = (data: EduTypes) => {
    if (EduSchema.safeParse(data).success) {
      navigate("/educationinfo");
    }
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderWrapper>
        <ArrowBackDiv
          onClick={() => {
            BackToStarterPage(setInfoData, setPhoto, setExpData, setEduData);
            navigate("/");
          }}
        >
          <ArrowImg src={Arrow} alt="arrowback" />
        </ArrowBackDiv>
        <HeaderHolder>
          <Title>განათლება</Title>
          <Paragraph>3/3</Paragraph>
        </HeaderHolder>
        <Line />
      </HeaderWrapper>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <Holder>
              <ParagraphBold>სასწავლებელი</ParagraphBold>
              <Input
                {...register(`educations.${index}.institute`)}
                onChange={(e) => {
                  setEduData({
                    ...eduData,
                    educations: eduData.educations.map((exp, i) =>
                      i === index
                        ? { ...exp, institute: e.currentTarget.value }
                        : exp
                    ),
                  });
                }}
              />
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
                <Input
                  type="date"
                  style={{ paddingRight: "10px" }}
                  {...register(`educations.${index}.due_date`)}
                  onChange={(e) => {
                    setEduData({
                      ...eduData,
                      educations: eduData.educations.map((exp, i) =>
                        i === index
                          ? { ...exp, due_date: e.currentTarget.value }
                          : exp
                      ),
                    });
                  }}
                />
              </Holder>
            </HolderNameSurname>
            <Holder>
              <ParagraphBold>აღწერა</ParagraphBold>
              <InputArea
                {...register(`educations.${index}.description`)}
                onChange={(e) => {
                  setEduData({
                    ...eduData,
                    educations: eduData.educations.map((exp, i) =>
                      i === index
                        ? { ...exp, description: e.currentTarget.value }
                        : exp
                    ),
                  });
                }}
              />
            </Holder>
            <Line style={{ border: "1px solid #C1C1C1" }} />
          </React.Fragment>
        );
      })}
      <Holder style={{ maxWidth: "289px" }}>
        <Button
          style={{ height: "48px", width: "100%" }}
          onClick={() => {
            append({
              institute: "",
              degree: "",
              due_date: "",
              description: "",
            });
            setEduData((prevEduData) => ({
              ...prevEduData,
              educations: [
                ...prevEduData.educations,
                {
                  institute: "",
                  degree: "",
                  due_date: "",
                  description: "",
                },
              ],
            }));
          }}
        >
          სხვა სასწავლებლების დამატება
        </Button>
      </Holder>
      <Holder style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ButtonBold onClick={() => navigate("/experienceinfo")}>
          უკან
        </ButtonBold>
        <ButtonBold>დასასრული</ButtonBold>
      </Holder>
    </Wrapper>
  );
}
