import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CircleLogo from "../../assets/redberryCircleLogo.png";
import BackGroundLogo from "../../assets/backgroundLogo.png";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 25px;
  background-image: url(${BackGroundLogo});
  background-size: 100% 100%;
  overflow: hidden;
`;
const Button = styled.button`
  align-self: center;
  background-color: #1a1a1a;
  color: white;
  font-weight: bold;
  width: 464px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  z-index: 99;
  &:hover {
    opacity: 0.7;
  }
`;
const ButtonLogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Circle = styled.img`
  position: absolute;
  left: -115px;
  top: -75px;
`;
const CircleParent = styled.div`
  position: relative;
`;
export default function StarterPage() {
  return (
    <Wrapper>
      <Header />
      <ButtonLogoHolder>
        <Button>რეზიუმეს დამატება</Button>
        <CircleParent>
          <Circle src={CircleLogo} alt="circle" />
        </CircleParent>
      </ButtonLogoHolder>
    </Wrapper>
  );
}
