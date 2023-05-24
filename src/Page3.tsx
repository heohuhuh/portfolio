import styled, { css } from "styled-components";
import { boxFadeInDown, boxFadeOutUP } from "./App";
import { useEffect, useRef } from "react";
import { Font } from "./Page1";

type propsType = {
  upDown: boolean;
  secondToThirdPage: boolean;

  setScrollable: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Page3({ upDown, secondToThirdPage, setScrollable }: propsType) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.stopPropagation();
    };

    const scrollableDiv: any = scrollRef.current;
    scrollableDiv.addEventListener("wheel", wheelHandler);

    return () => {
      scrollableDiv.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <Page3Wrapper upDown={upDown} secondToThirdPage={secondToThirdPage}>
      <MainTitle>나의 이야기</MainTitle>
      <Hr />
      <Hr />
      <ElementWrapper>
        <Years>2015년 ~ 2018년</Years>
        <Responsibility>공군 하사</Responsibility>
        <Works
          onPointerOver={(e) => {
            setScrollable(false);
          }}
          onPointerLeave={() => {
            setScrollable(true);
          }}
          ref={scrollRef}
        >
          공군 하사로 임관하여 직무교육 후 고양시로 첫 자대를 배치받고
          지휘통신망을 관리하는 장비의 1인 담당자로 보임하였습니다. 담당 업무는
          위성통신망을 활용한 예비 지휘통신망 지원 장비 관리였습니다. 기존
          담당자의 전역 및 인수인계 자료 부족으로 인해 업무 파악에 어려움을
          느꼈으며, 새로운 업무들에 맞닥들이는 상황이 자주 발생했습니다. 하지만
          그로인해 업무파악 및 인수인계의 중요성을 깨닫게되었고, 새로운 업무에
          맞닥들였을때 주변 동료들과 소통하며 신속히 파악하여 진행하는 데에
          익숙해진 계기가 됐습니다.
        </Works>
      </ElementWrapper>
      <Hr />
      <ElementWrapper>
        <Years>2018년 ~ 2020년</Years>
        <Responsibility>공군 중사</Responsibility>
        <Works
          onPointerOver={(e) => {
            setScrollable(false);
          }}
          onPointerLeave={() => {
            setScrollable(true);
          }}
          ref={scrollRef}
        >
          중사로 진급함과 동시에 타부대로 전속을 가게되었습니다. 평택으로 자대를
          이동하여 기존에 운영하던 장비와 같은 장비를 관리하며 1인 담당자로
          근무하였지만 부대 환경이 꽤 다른 곳이었습니다. 담당하는 업무 외에 여러
          지식이 필요했고 타업무 인원과 협업하는 과정을 겪고 발전할 수
          있었습니다.
        </Works>
      </ElementWrapper>
      <Hr />
      <ElementWrapper>
        <Years>2020년 ~ 2022년</Years>
        <Responsibility>공군 중사</Responsibility>
        <Works
          onPointerOver={(e) => {
            setScrollable(false);
          }}
          onPointerLeave={() => {
            setScrollable(true);
          }}
          ref={scrollRef}
        >
          공군 부대 중 제가 담당할 수 있는 업무 중 규모가 가장 큰 부서로 전속을
          갔습니다. 해당 부대는 규모가 큰만큼 같은 업무를 하는 동료도 꽤
          있었습니다. 또한 교대 근무를 돌면서 조장으로서 책임감을 갖고 업무를
          진행하였습니다. 후에 업무를 지속하며 웹 개발자에 관심을 갖게되었고
          전역을 했습니다.
        </Works>
      </ElementWrapper>
      <Hr />
      <ElementWrapper>
        <Years>2022년 ~ 현재</Years>
        <Works
          onPointerOver={(e) => {
            setScrollable(false);
          }}
          onPointerLeave={() => {
            setScrollable(true);
          }}
          ref={scrollRef}
        >
          실제 개발자가 되기위해 제대로 공부를 진행하기에 앞서 해보고싶었던 몇몇
          아르바이트와 휴식기간 중 천천히 공부를 병행하였습니다. 개발자 현직
          지인들을 통해서 동료들과의 협업, GitHub 등 미리 알게되었고 조언을
          받으며 공부를 진행하고있습니다.
        </Works>
      </ElementWrapper>
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

const Hr = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.35);
  width: 60%;
  height: 1px;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 20%;
  font-family: "omyu_pretty";
  font-size: 50px;
`;
const ElementWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 20%;
`;
const Years = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 20%;
  font-family: "omyu_pretty";
  font-size: 20px;
`;
const Responsibility = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 20%;
  font-family: "omyu_pretty";
  font-size: 18px;
`;
const Works = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 60%;
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
