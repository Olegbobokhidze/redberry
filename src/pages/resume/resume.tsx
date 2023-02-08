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
import { InfoSchemaType } from "../page2/InfoTypes";
interface Props {
  infoData: InfoSchemaType;
  photo: string;
}
export default function Resume({ infoData, photo }: Props) {
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
      <Line />
      <Title>გამოცდილება</Title>
      <Paragraph style={{ fontWeight: "bold" }}>
        React Native Developer, Microsoft
      </Paragraph>
      <Paragraph style={{ fontStyle: "italic", opacity: "0.7" }}>
        2020-09-23 - 2020-09-23
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        repellat placeat voluptates maiores facere similique impedit
        reprehenderit labore earum debitis. At debitis ad earum inventore sunt
        quidem molestias itaque dolorem.
      </Paragraph>
      <Line />
      <Title>განათლება</Title>
      <Paragraph>წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი</Paragraph>
      <Paragraph style={{ fontStyle: "italic", opacity: "0.7" }}>
        2020-09-23
      </Paragraph>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, enim nemo.
        Nihil sunt velit tempore totam. Recusandae, ea, quae assumenda molestiae
        pariatur, consectetur nobis blanditiis alias harum accusantium
        necessitatibus excepturi?
      </Paragraph>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, enim nemo.
        Nihil sunt velit tempore totam. Recusandae, ea, quae assumenda molestiae
        pariatur, consectetur nobis blanditiis alias harum accusantium
        necessitatibus excepturi?
      </Paragraph>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, enim nemo.
        Nihil sunt velit tempore totam. Recusandae, ea, quae assumenda molestiae
        pariatur, consectetur nobis blanditiis alias harum accusantium
        necessitatibus excepturi?
      </Paragraph>

      <Logo src={RedLogo} alt="logo" />
    </Wrapper>
  );
}
