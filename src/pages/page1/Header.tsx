import React from "react";
import styled from "styled-components";
import RedberryLogo from "../../assets/redberry-logo.png";

export default function Header() {
  return (
    <Wrapper>
      <Logo src={RedberryLogo} alt="logo" />
      <Line />
    </Wrapper>
  );
}
const Logo = styled.img`
  align-self: flex-start;
  margin-bottom: 26px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Line = styled.hr`
  width: 100%;
  background-color: #1a1a1a;
`;
