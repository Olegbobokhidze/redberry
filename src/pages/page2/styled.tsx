import styled from "styled-components";

export const HeaderWrapper = styled.div``;
export const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const Line = styled.hr``;
export const Title = styled.h1`
  font-size: 24px;
`;
export const Paragraph = styled.p`
  font-size: 14px;
  color: #2e2e2e;
`;
export const ParagraphBold = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #2e2e2e;
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding-left: 10px;
  border: solid 1px #bcbcbc;
  &:focus {
    outline: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;

  width: 50vw;
  height: 100vh;
  gap: 50px;
  background-color: #f9f9f9;
  flex-direction: column;
  padding: 50px;
`;
export const ButtonImg = styled.button`
  background-color: #0e80bf;
  width: 107px;
  border: none;
  height: 27px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  &:focus {
    border: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const ButtonNext = styled.button`
  background-color: #6b40e3;
  width: 151px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  align-self: flex-end;
  color: white;
  &:focus {
    border: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const HolderNameSurname = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;
export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InputArea = styled.textarea`
  height: 103px;
  border: 1px solid #bcbcbc;
  padding: 10px;
  resize: none;
  &:focus {
    outline: none;
  }
`;
