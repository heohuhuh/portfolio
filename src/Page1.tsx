import styled, { css } from "styled-components";
import { boxFadeInUP, boxFadeOutDown } from "./App";

type propsType = {
  upDown: boolean;
  firstToSecondPage: boolean;
};
export function Page1({ upDown, firstToSecondPage }: propsType) {
  return (
    <Page1Wrapper upDown={upDown} firstToSecondPage={firstToSecondPage}>
      메인 화면
    </Page1Wrapper>
  );
}

const Page1Wrapper = styled.div<{
  upDown: boolean;
  firstToSecondPage: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
