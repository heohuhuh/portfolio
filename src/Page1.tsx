import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { boxFadeInUP, boxFadeOutDown } from "./App";

type propsType = {
  upDown: boolean;
  firstToSecondPage: boolean;
};
export function Page1({ upDown, firstToSecondPage }: propsType) {
  return (
    <Page1Wrapper upDown={upDown} firstToSecondPage={firstToSecondPage}>
      <Photo>사진</Photo>

      <Profile>
        <Name>허 진 욱</Name>
        <Age>29세(만 28세)</Age>
        <Home>경기도 수원시 팔달구 구천동</Home>
        <Study>React, TypeScript, JavaScript, CSS </Study>
        <License>정보처리기사, 항공무선통신사 등</License>
      </Profile>
    </Page1Wrapper>
  );
}

const Page1Wrapper = styled.div<{
  upDown: boolean;
  firstToSecondPage: boolean;
}>`
  background-color: #ddffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  ${({ upDown, firstToSecondPage }) =>
    !upDown &&
    firstToSecondPage &&
    css`
      animation: ${boxFadeInUP} 0.5s 0s linear;
    `}

  ${({ upDown, firstToSecondPage }) =>
    upDown &&
    firstToSecondPage &&
    css`
      animation: ${boxFadeOutDown} 0.5s 0s linear;
    `}
`;

const Photo = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 460px;
  height: 640px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 460px;
  height: 640px;
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "omyu_pretty";
`;

const Name = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 20px;
`;
const Age = styled.div`
  //border: 3px solid;
  width: 100%;
  background: linear-gradient(to left, #ddffff 50%, #bfcbff);
  border-image-slice: 1;
  border-radius: 50px;
  //background: #fff;
  //box-shadow: 2px 2px #aaa;
  padding: 25px;
  margin: 25px;
  font-size: 23px;
`;
const Home = styled.div`
  width: 100%;
  background: linear-gradient(to left, #ddffff 30%, #bfcbff);
  border-image-slice: 1;
  border-radius: 50px;
  padding: 25px;
  margin: 25px;
  font-size: 23px;
`;
const Study = styled.div`
  width: 100%;
  background: linear-gradient(to left, #ddffff 15%, #bfcbff);
  border-image-slice: 1;
  border-radius: 50px;
  padding: 25px;
  margin: 25px;
  font-size: 23px;
`;
const License = styled.div`
  width: 100%;
  background: linear-gradient(to left, #ddffff 00%, #bfcbff);
  border-image-slice: 1;
  border-radius: 50px;
  padding: 25px;
  margin: 25px;
  font-size: 23px;
`;
