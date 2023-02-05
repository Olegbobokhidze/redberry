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
export default function Resume() {
  return (
    <Wrapper>
      <PersonalInfoHolder>
        <TextHolder>
          <NameSurnameHolder>
            <Name>blalbla</Name>
            <Surname>balbla</Surname>
          </NameSurnameHolder>
          <Holder>
            <PhoneMailLogo src={Mail} />
            <Paragraph>blabla454@redberry.ge</Paragraph>
          </Holder>
          <Holder>
            <PhoneMailLogo src={Phone} />
            <Paragraph>+995 95 93 21</Paragraph>
          </Holder>
          <Title>ჩემ შესახებ</Title>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptatem necessitatibus repellat esse in similique
            ipsam! Necessitatibus laudantium provident mollitia, repudiandae
            consequuntur deleniti explicabo nulla fuga pariatur nihil.
            Reiciendis, natus!
          </Paragraph>
        </TextHolder>
        <Image src={Phone} />
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
