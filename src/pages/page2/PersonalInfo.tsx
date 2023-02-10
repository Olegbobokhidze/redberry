import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  HeaderWrapper,
  Wrapper,
  Title,
  Paragraph,
  ParagraphBold,
  Input,
  ButtonBold,
  Line,
  Holder,
  HolderNameSurname,
  InputArea,
  HeaderHolder,
  ArrowBackDiv,
  ArrowImg,
  ValidationImages,
  LabelButton,
} from "../styled";
import Arrow from "../../assets/Vector.png";
import {
  PersonalInfoSchema,
  InfoSchemaType,
  ExpTypes,
  EduTypes,
} from "../InfoTypes";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  BackToStarterPage,
  BorderColorFunction,
  convert2base64,
  FormattedNumber,
  FunctionShowLogo,
} from "../../utils";
import { useNavigate } from "react-router-dom";
interface Props {
  setInfoData: React.Dispatch<React.SetStateAction<InfoSchemaType>>;
  infoData: InfoSchemaType;
  setPhoto: (val: string) => void;
  photo: string;
  setExpData: React.Dispatch<React.SetStateAction<ExpTypes>>;
  setEduData: React.Dispatch<React.SetStateAction<EduTypes>>;
}
export default function PersonalInfo({
  setInfoData,
  infoData,
  setPhoto,
  photo,
  setExpData,
  setEduData,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<InfoSchemaType>({
    resolver: zodResolver(PersonalInfoSchema),
    mode: "onChange",
  });
  useEffect(() => {
    const subsc = watch((value) => {
      setInfoData({
        ...infoData,
        name: value.name || "",
        surname: value.surname || "",
        about_me: value.about_me || "",
        email: value.email || "",
        phone_number: value.phone_number || "",
      });
    });
    return () => {
      subsc.unsubscribe();
    };
  }, []);
  const [err, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSubmit = (data: InfoSchemaType): void => {
    if (photo && PersonalInfoSchema.safeParse(data).success) {
      console.log(PersonalInfoSchema.safeParse(data));
      navigate("/experienceinfo");
    } else {
      setError(true);
    }
  };

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
            <Title>პირადი ინფო</Title>
            <Title>1/3</Title>
          </HeaderHolder>
          <Line />
        </HeaderWrapper>
        <HolderNameSurname>
          <Holder style={{ width: "50%" }}>
            <ParagraphBold style={errors.name ? { color: "#EF5050" } : {}}>
              სახელი
            </ParagraphBold>

            <ValidationImages>
              <Input
                {...register("name")}
                value={infoData.name}
                placeholder="სახელი"
                style={BorderColorFunction(watch("name"), errors.name)}
              />
              {FunctionShowLogo(
                watch("name"),
                errors.name,
                control._formState.isSubmitted
              )}
            </ValidationImages>
            <Paragraph>მინიმუმ 2 ასო, ქართული ასოები</Paragraph>
          </Holder>
          <Holder style={{ width: "50%" }}>
            <ParagraphBold style={errors.surname ? { color: "#EF5050" } : {}}>
              გვარი
            </ParagraphBold>
            <ValidationImages>
              <Input
                {...register("surname")}
                value={infoData.surname}
                placeholder="გვარი"
                style={BorderColorFunction(watch("surname"), errors.surname)}
              />
              {FunctionShowLogo(
                watch("surname"),
                errors.surname,
                control._formState.isSubmitted
              )}
            </ValidationImages>

            <Paragraph>მინიმუმ 2 ასო, ქართული ასოები</Paragraph>
          </Holder>
        </HolderNameSurname>

        <Holder
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ParagraphBold style={err ? { color: "#EF5050" } : {}}>
            პირადი ფოტოს ატვირთვა
          </ParagraphBold>
          <LabelButton htmlFor="fileUpload">ატვირთვა</LabelButton>
          <input
            id="fileUpload"
            style={{ display: "none" }}
            type="file"
            onChange={(event) => convert2base64(event, setPhoto)}
          />
        </Holder>
        <Holder>
          <ParagraphBold>ჩემ შესახებ (არასავალდებულო)</ParagraphBold>
          <InputArea
            {...register("about_me")}
            value={infoData.about_me}
            placeholder="ზოგადი ინფო შენ შესახებ"
          />
        </Holder>
        <Holder>
          <ParagraphBold style={errors.email ? { color: "#EF5050" } : {}}>
            ელ.ფოსტა
          </ParagraphBold>
          <ValidationImages>
            <Input
              {...register("email")}
              value={infoData.email}
              placeholder="testtest@redberry.ge"
              style={BorderColorFunction(watch("email"), errors.email)}
            />
            {FunctionShowLogo(
              watch("email"),
              errors.email,
              control._formState.isSubmitted
            )}
          </ValidationImages>

          <Paragraph>უნდა მთავრდებოდეს @redberry.ge-თი</Paragraph>
        </Holder>
        <Holder>
          <ParagraphBold
            style={errors.phone_number ? { color: "#EF5050" } : {}}
          >
            მობილურის ნომერი
          </ParagraphBold>
          <ValidationImages>
            <Input
              style={BorderColorFunction(
                watch("phone_number"),
                errors.phone_number
              )}
              {...register("phone_number")}
              value={infoData.phone_number}
              placeholder="+995 551 12 34 56"
            />
            {FunctionShowLogo(
              watch("phone_number"),
              errors.phone_number,
              control._formState.isSubmitted
            )}
          </ValidationImages>
          <Paragraph>უნდა აკმაყოფილებდეს ქართული მობილურის ფორმატს</Paragraph>
        </Holder>
        <ButtonBold type="submit">შემდეგი</ButtonBold>
      </Wrapper>
    </form>
  );
}
