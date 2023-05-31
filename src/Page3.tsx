import styled, { css } from "styled-components";
import { boxFadeInDown, boxFadeOutUP } from "./App";
import { Font } from "./Page1";
import ProfilePhoto from "./imgs/허진욱님_증명사진.jpg";
import { Year2015To2018 } from "./page3Components/Year2015To2018";
import { Year2018To2020 } from "./page3Components/Year2018To2020";
import { Year2020To2022 } from "./page3Components/Year2020To2022";
import { Year2022ToPresent } from "./page3Components/Year2022ToPresent";

type propsType = {
  upDown: boolean;
  secondToThirdPage: boolean;

  setScrollable: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Page3({ upDown, secondToThirdPage, setScrollable }: propsType) {
  return (
    <Page3Wrapper upDown={upDown} secondToThirdPage={secondToThirdPage}>
      <Title>나의 이야기</Title>
      <Wrapper>
        <LeftContainer>
          <Photo src={ProfilePhoto} alt=""></Photo>
        </LeftContainer>
        <HrColumn />
        <RightContainer>
          <HrRow />
          <Year2015To2018 />
          <Year2018To2020 />
          <Year2020To2022 />
          <Year2022ToPresent />
        </RightContainer>
      </Wrapper>
    </Page3Wrapper>
  );
}

export const Page3Wrapper = styled.div<{
  upDown: boolean;
  secondToThirdPage: boolean;
}>`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  ${Font}
  ${({ upDown, secondToThirdPage }) =>
    upDown &&
    secondToThirdPage &&
    css`
      animation: ${boxFadeInDown} 0.5s 0s linear;
    `}

  ${({ upDown, secondToThirdPage }) =>
    !upDown &&
    secondToThirdPage &&
    css`
      animation: ${boxFadeOutUP} 0.5s 0s linear;
    `}
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 20%;
  font-family: "omyu_pretty";
  font-size: 50px;
  color: #444444;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 40%;
  height: 100%;
`;
const Photo = styled.img`
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 320px;
`;
const HrRow = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.35);
  width: 60%;
  height: 1px;
  margin-left: 20px;
`;
const HrColumn = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.35);
  width: 1px;
  height: 95%;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;
