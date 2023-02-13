import React, { useEffect } from "react";
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
  ValidationImages,
} from "../styled";
import Arrow from "../../assets/Vector.png";
import { EduTypes, ExpSchema, ExpTypes, InfoSchemaType } from "../InfoTypes";
import { useNavigate } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BackToStarterPage,
  BorderColorFunction,
  FunctionShowLogo,
  isRequired,
  removeEmptyObjects,
} from "../../utils";
interface Props {
  setInfoData: React.Dispatch<React.SetStateAction<InfoSchemaType>>;
  setExpData: React.Dispatch<React.SetStateAction<ExpTypes>>;
  setEduData: React.Dispatch<React.SetStateAction<EduTypes>>;
  expData: ExpTypes;
  setPhoto: (val: string) => void;
}
export default function ExperienceInfo({
  setExpData,
  expData,
  setPhoto,
  setInfoData,
  setEduData,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<ExpTypes>({
    resolver: zodResolver(ExpSchema),
    mode: "onChange",
    defaultValues: expData,
  });

  const { fields, append } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (data: ExpTypes) => {
    const everyValueIsEmpty = data.experiences.some((obj) => {
      return Object.values(obj).every((val) => val === "" || val === null);
    });
    if (everyValueIsEmpty) {
      removeEmptyObjects(data.experiences, setExpData);
      navigate("/educationinfo");
    } else {
      console.log(ExpSchema.parse(data));
      navigate("/educationinfo");
    }
  };

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
            <Title>გამოცდილება</Title>
            <Paragraph>2/3</Paragraph>
          </HeaderHolder>
          <Line />
        </HeaderWrapper>
        <Button type="button">remove aba</Button>
        {fields.map((field, index) => {
          return (
            <React.Fragment key={field.id}>
              <Holder>
                <ParagraphBold
                  style={
                    errors.experiences?.[index]?.position
                      ? { color: "#EF5050" }
                      : {}
                  }
                >
                  თანამდებობა
                </ParagraphBold>
                <ValidationImages>
                  <Input
                    {...register(`experiences.${index}.position`)}
                    style={BorderColorFunction(
                      watch(`experiences.${index}.position`),
                      errors.experiences?.[index]?.position
                    )}
                    onChange={(e) => {
                      setExpData({
                        ...expData,
                        experiences: expData.experiences.map((job, i) =>
                          i === index
                            ? { ...job, position: e.currentTarget.value }
                            : job
                        ),
                      });
                    }}
                  />
                  {FunctionShowLogo(
                    watch(`experiences.${index}.position`),
                    errors.experiences?.[index]?.position,
                    control._formState.isSubmitted
                  )}
                </ValidationImages>

                <Paragraph>მინიმუმ 2 სიმბოლო</Paragraph>
              </Holder>
              <Holder>
                <ParagraphBold
                  style={
                    errors.experiences?.[index]?.employer
                      ? { color: "#EF5050" }
                      : {}
                  }
                >
                  დამსაქმებელი
                </ParagraphBold>
                <ValidationImages>
                  <Input
                    {...register(`experiences.${index}.employer`)}
                    minLength={2}
                    style={
                      index > 0 && !watch(`experiences.${index}.position`)
                        ? { border: "1px solid #bcbcbc" }
                        : BorderColorFunction(
                            watch(`experiences.${index}.position`),
                            errors.experiences?.[index]?.position
                          )
                    }
                    onChange={(e) => {
                      setExpData({
                        ...expData,
                        experiences: expData.experiences.map((job, i) =>
                          i === index
                            ? { ...job, employer: e.currentTarget.value }
                            : job
                        ),
                      });
                    }}
                  />
                  {FunctionShowLogo(
                    watch(`experiences.${index}.employer`),
                    errors.experiences?.[index]?.employer,
                    control._formState.isSubmitted
                  )}
                </ValidationImages>

                <Paragraph>მინიმუმ 2 სიმბოლო</Paragraph>
              </Holder>
              <HolderNameSurname>
                <Holder style={{ width: "50%" }}>
                  <ParagraphBold
                    style={
                      errors.experiences?.[index]?.start_date
                        ? { color: "#EF5050" }
                        : {}
                    }
                  >
                    დაწყების რიცხვი
                  </ParagraphBold>
                  <ValidationImages>
                    <Input
                      {...register(`experiences.${index}.start_date`)}
                      type="date"
                      style={
                        index > 0 && !watch(`experiences.${index}.start_date`)
                          ? { border: "1px solid #bcbcbc" }
                          : BorderColorFunction(
                              watch(`experiences.${index}.start_date`),
                              errors.experiences?.[index]?.start_date
                            )
                      }
                      onChange={(e) => {
                        setExpData({
                          ...expData,
                          experiences: expData.experiences.map((job, i) =>
                            i === index
                              ? { ...job, start_date: e.currentTarget.value }
                              : job
                          ),
                        });
                      }}
                    />
                  </ValidationImages>
                </Holder>
                <Holder style={{ width: "50%" }}>
                  <ParagraphBold
                    style={
                      errors.experiences?.[index]?.due_date
                        ? { color: "#EF5050" }
                        : {}
                    }
                  >
                    დამთავრების რიცხვი
                  </ParagraphBold>
                  <ValidationImages>
                    <Input
                      {...register(`experiences.${index}.due_date`)}
                      type="date"
                      style={
                        index > 0 && !watch(`experiences.${index}.due_date`)
                          ? { border: "1px solid #bcbcbc" }
                          : BorderColorFunction(
                              watch(`experiences.${index}.due_date`),
                              errors.experiences?.[index]?.due_date
                            )
                      }
                      onChange={(e) => {
                        setExpData({
                          ...expData,
                          experiences: expData.experiences.map((job, i) =>
                            i === index
                              ? { ...job, due_date: e.currentTarget.value }
                              : job
                          ),
                        });
                      }}
                    />
                  </ValidationImages>
                </Holder>
              </HolderNameSurname>
              <Holder>
                <ParagraphBold>აღწერა</ParagraphBold>
                <InputArea
                  {...register(`experiences.${index}.description`)}
                  style={
                    index > 0 && !watch(`experiences.${index}.description`)
                      ? { border: "1px solid #bcbcbc" }
                      : BorderColorFunction(
                          watch(`experiences.${index}.description`),
                          errors.experiences?.[index]?.description
                        )
                  }
                  onChange={(e) => {
                    setExpData({
                      ...expData,
                      experiences: expData.experiences.map((job, i) =>
                        i === index
                          ? { ...job, description: e.currentTarget.value }
                          : job
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
                position: "",
                employer: "",
                start_date: "",
                due_date: "",
                description: "",
              });
              setExpData((prevExpData) => ({
                ...prevExpData,
                experiences: [
                  ...prevExpData.experiences,
                  {
                    position: "",
                    employer: "",
                    start_date: "",
                    due_date: "",
                    description: "",
                  },
                ],
              }));
            }}
          >
            მეტი გამოცდილების დამატება
          </Button>
        </Holder>
        <Holder
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ButtonBold onClick={() => navigate("/personalinfo")} type="button">
            უკან
          </ButtonBold>
          <ButtonBold type="submit">შემდეგი</ButtonBold>
        </Holder>
      </Wrapper>
    </form>
  );
}
