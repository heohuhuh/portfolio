import styled, { css } from "styled-components";
import { boxFadeInDown, boxFadeOutUP } from "./App";
import { useEffect, useRef } from "react";
import { Font } from "./Page1";
import ProfilePhoto from "./imgs/허진욱님_증명사진.jpg";

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
          <HrRow style={{ marginLeft: "20px", width: "60%" }} />
          <ElementWrapper>
            <Years>2015년 ~ 2018년</Years>
            <Responsibility>공군 하사</Responsibility>
            <WorksContainer>
              <Works>임관</Works>
              <Works>고양시 근무</Works>
              <Works>차량형 위성통신장비 관리 담당</Works>
              <Works>예비 지휘통신망 지원(5개 기지)</Works>
            </WorksContainer>
          </ElementWrapper>
          <ElementWrapper>
            <HrRow />
            <Years>2018년 ~ 2020년</Years>
            <Responsibility>공군 중사</Responsibility>
            <WorksContainer>
              <Works>중사 진급</Works>
              <Works>평택시 근무</Works>
              <Works>차량형 위성통신장비 관리 담당</Works>
              <Works>기지 내 주, 예비 지휘통신망 지원(4개 기지)</Works>
              <Works>암호장비 관리</Works>
            </WorksContainer>
          </ElementWrapper>
          <ElementWrapper>
            <HrRow />
            <Years>2020년 ~ 2022년</Years>
            <Responsibility>공군 중사</Responsibility>
            <WorksContainer>
              <Works>대구 근무</Works>
              <Works>장거리통신장비 관리 담당</Works>
              <Works>타 기지 간 내 주, 예비 지휘통신망 지원(20여개 기지)</Works>
              <Works>3조 2교대근무</Works>
              <Works>개발에 흥미를 느낌</Works>
            </WorksContainer>
          </ElementWrapper>
          <ElementWrapper>
            <HrRow />
            <Years>2022년 ~ 현재</Years>
            <WorksContainer>
              <Works>자격증 취득(정보처리기사)</Works>
              <Works>아르바이트, 공부 병행</Works>
            </WorksContainer>
          </ElementWrapper>
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
  width: 75%;
  height: 1px;
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

const ElementWrapper = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
`;
const Years = styled.div`
  color: rgba(90, 0, 0, 0.9);
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 25px;
  font-family: "omyu_pretty";
  font-size: 20px;
`;
const Responsibility = styled.div`
  color: rgba(0, 0, 90, 0.9);
  padding: 5px 0 5px 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 20px;
  font-family: "omyu_pretty";
  font-size: 18px;
`;
const WorksContainer = styled.div`
  padding: 10px 10px 20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  font-size: 16px;

  ::-webkit-scrollbar {
    width: 5px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;
const Works = styled.li`
  font-family: "omyu_pretty";
  font-size: 20px;
`;
