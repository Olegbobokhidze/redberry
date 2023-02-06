import React, { useState } from "react";
import { useForm, useController, FieldError } from "react-hook-form";
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
import { PersonalInfoSchema, InfoSchemaType } from "./InfoTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { BorderColorFunction, FunctionShowLogo } from "../../utils";
export default function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<InfoSchemaType>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  const convert2base64 = (file: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result?.toString());
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: InfoSchemaType): void => {
    convert2base64(data.file[0]);

    console.log(PersonalInfoSchema.safeParse(data));
  };
  const [image, setImage] = useState<any>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <img src={image} alt="imageee" />
          <Holder style={{ width: "50%" }}>
            <ParagraphBold style={errors.name ? { color: "#EF5050" } : {}}>
              სახელი
            </ParagraphBold>

            <ValidationImages>
              <Input
                {...register("name")}
                placeholder="სახელი"
                style={BorderColorFunction(
                  control._formState.isSubmitted,
                  errors.name
                )}
              />
              {FunctionShowLogo(control._formState.isSubmitted, errors.name)}
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
                placeholder="გვარი"
                style={BorderColorFunction(
                  control._formState.isSubmitted,
                  errors.surname
                )}
              />
              {FunctionShowLogo(control._formState.isSubmitted, errors.surname)}
            </ValidationImages>

            <Paragraph>მინიმუმ 2 ასო, ქართული ასოები</Paragraph>
          </Holder>
        </HolderNameSurname>
        <Holder
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ParagraphBold>პირადი ფოტოს ატვირთვა</ParagraphBold>
          <Button>
            <input type="file" {...register("file")} />
          </Button>
        </Holder>
        <Holder>
          <ParagraphBold>ჩემ შესახებ (არასავალდებულო)</ParagraphBold>
          <InputArea
            {...register("about_me")}
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
              placeholder="testtest@redberry.ge"
              style={BorderColorFunction(
                control._formState.isSubmitted,
                errors.email
              )}
            />
            {FunctionShowLogo(control._formState.isSubmitted, errors.email)}
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
                control._formState.isSubmitted,
                errors.phone_number
              )}
              {...register("phone_number")}
              placeholder="+995 551 12 34 56"
            />
            {FunctionShowLogo(
              control._formState.isSubmitted,
              errors.phone_number
            )}
          </ValidationImages>
          <Paragraph>უნდა აკმაყოფილებდეს ქართული მობილურის ფორმატს</Paragraph>
        </Holder>
        <ButtonBold type="submit">შემდეგი</ButtonBold>
      </Wrapper>
    </form>
  );
}
