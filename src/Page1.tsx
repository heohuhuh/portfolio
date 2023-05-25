import styled, { css } from "styled-components";
import { boxFadeInUP, boxFadeOutDown } from "./App";

type propsType = {
  upDown: boolean;
  firstToSecondPage: boolean;
};
export function Page1({ upDown, firstToSecondPage }: propsType) {
  return (
    <Page1Wrapper upDown={upDown} firstToSecondPage={firstToSecondPage}>
      {/* <Photo src={ProfilePhoto} alt="ProfilePhoto" /> */}
      <Introduce>
        <div>신입 웹 개발자 지원자</div>
        <div>포트폴리오</div>
      </Introduce>

      <Profile>
        <ProfileUp>
          <Age>1995. 3. 28</Age>
          <Name>허 진 욱</Name>
          <Home>경기도 수원시 팔달구</Home>
        </ProfileUp>
        <ProfileDown>
          <PhoneNum>010-3092-1378</PhoneNum>
          <Email>wlsdnr3636@gmail.com</Email>
          <License>정보처리기사, 항공무선통신사 등</License>
        </ProfileDown>
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
  flex-direction: column;
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

export const Font = css`
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;
const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 90px;
  font-family: "omyu_pretty";
  color: rgb(0, 0, 0, 0.75);
`;
const Profile = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-family: "omyu_pretty";
`;
const ProfileUp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 40%;
`;
const ProfileDown = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 40%;
`;
const ProfileStyle = css`
  color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 300px;
  background: linear-gradient(to bottom, #ffffff 20%, #ddffff);
  border-image-slice: 1;
  border-radius: 50px;
  //background: #fff;
  box-shadow: 2px 2px #aaa;
  padding: 25px;
  margin: 25px;
  font-size: 23px;
`;
const Name = styled.div`
  /* color: rgb(0, 0, 0, 0.9);
  width: 100%;
  height: 20%; */
  ${ProfileStyle}
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const PhoneNum = styled.div`
  ${ProfileStyle}
`;
const Age = styled.div`
  ${ProfileStyle}
`;
const Home = styled.div`
  ${ProfileStyle}
`;
const Email = styled.div`
  ${ProfileStyle}
`;
const License = styled.div`
  ${ProfileStyle}
`;
