import React, { useEffect, useState } from "react";
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
  ValidationImages,
} from "../styled";
import Arrow from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { EduSchema, EduTypes, ExpTypes, InfoSchemaType } from "../InfoTypes";
import {
  BackToStarterPage,
  BorderColorFunction,
  FunctionShowLogo,
  isRequired,
  removeEmpty,
  removeEmptyObjects,
  setDegreeTitle,
} from "../../utils";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetchDegrees from "../../hooks/useFetchDegrees";
import usePostData from "../../hooks/usePostData";
interface Props {
  setInfoData: React.Dispatch<React.SetStateAction<InfoSchemaType>>;
  setExpData: React.Dispatch<React.SetStateAction<ExpTypes>>;
  setPhoto: (val: string) => void;
  setEduData: React.Dispatch<React.SetStateAction<EduTypes>>;
  eduData: EduTypes;
  expData: ExpTypes;
  photo: string;
  infoData: InfoSchemaType;
}
export default function EducationInfo({
  setInfoData,
  setExpData,
  setPhoto,
  eduData,
  infoData,
  photo,
  expData,
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
  const data = {
    name: infoData.name,
    surname: infoData.surname,
    email: infoData.email,
    phone_number: infoData.phone_number,
    experiences: expData.experiences,
    educations: eduData.educations,
    image: photo,
    about_me: infoData.about_me,
  };
  const postData = usePostData(data);
  const { fields, append } = useFieldArray({
    control,
    name: "educations",
  });
  const onSubmit = async (data: EduTypes) => {
    await postData();
  };

  const degreeList = useFetchDegrees();
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                <ValidationImages>
                  <Input
                    value={eduData.educations[index]?.institute}
                    {...register(`educations.${index}.institute`, {
                      required: isRequired(eduData.educations[index], index),
                    })}
                    style={BorderColorFunction(
                      watch(`educations.${index}.institute`),
                      errors.educations?.[index]?.institute
                    )}
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
                  {FunctionShowLogo(
                    watch(`educations.${index}.institute`),
                    errors.educations?.[index]?.institute,
                    control._formState.isSubmitted
                  )}
                </ValidationImages>
                <Paragraph>მინიმუმ 2 სიმბოლო</Paragraph>
              </Holder>
              <HolderNameSurname>
                <Holder style={{ width: "50%" }}>
                  <ParagraphBold>ხარისხი</ParagraphBold>
                  <SelectInput
                    value={Number(eduData.educations?.[index].degree_id)}
                    {...(register(`educations.${index}.degree_id`),
                    {
                      onChange: (e) => {
                        setEduData({
                          ...eduData,
                          educations: eduData.educations.map((edu, i) =>
                            i === index
                              ? {
                                  ...edu,
                                  degree_id: Number(e.target.value),
                                }
                              : edu
                          ),
                        });
                      },
                    })}
                  >
                    {degreeList
                      ? degreeList.map((deg) => (
                          <Option key={deg.id} value={deg.id}>
                            {deg.title}
                          </Option>
                        ))
                      : null}
                  </SelectInput>
                </Holder>
                <Holder style={{ width: "50%" }}>
                  <ParagraphBold>დამთავრების რიცხვი</ParagraphBold>
                  <Input
                    type="date"
                    style={BorderColorFunction(
                      watch(`educations.${index}.due_date`),
                      errors.educations?.[index]?.due_date
                    )}
                    {...register(`educations.${index}.due_date`, {
                      required: isRequired(eduData.educations[index], index),
                    })}
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
                  {...register(`educations.${index}.description`, {
                    required: isRequired(eduData.educations[index], index),
                  })}
                  style={BorderColorFunction(
                    watch(`educations.${index}.description`),
                    errors.educations?.[index]?.description
                  )}
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
            type="button"
            style={{ height: "48px", width: "100%" }}
            onClick={() => {
              append({
                institute: "",
                degree_id: 0,
                due_date: "",
                description: "",
              });
              setEduData((prevEduData) => ({
                ...prevEduData,
                educations: [
                  ...prevEduData.educations,
                  {
                    institute: "",
                    degree_id: 0,
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
        <Holder
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ButtonBold type="button" onClick={() => navigate("/experienceinfo")}>
            უკან
          </ButtonBold>
          <ButtonBold type="submit">დასასრული</ButtonBold>
        </Holder>
      </Wrapper>
    </form>
  );
}
